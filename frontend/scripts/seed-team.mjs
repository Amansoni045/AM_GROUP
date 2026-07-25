import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pg from "pg";
import { v2 as cloudinary } from "cloudinary";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = join(__dirname, "../.env.local");
  const lines = readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const val = trimmed.slice(eq + 1);
    if (!process.env[key]) process.env[key] = val;
  }
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function uploadImage(sourceUrl, publicId) {
  const result = await cloudinary.uploader.upload(sourceUrl, {
    folder: "am-group/team",
    public_id: publicId,
    overwrite: true,
    resource_type: "image",
  });
  return { url: result.secure_url, publicId: result.public_id };
}

async function main() {
  loadEnv();

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const seed = JSON.parse(
    readFileSync(join(__dirname, "../src/data/team-seed.json"), "utf8")
  );

  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  console.log("Clearing existing team data...");
  await pool.query("DELETE FROM team_members");
  await pool.query("DELETE FROM team_categories");

  let totalMembers = 0;

  for (const category of seed.categories) {
    const { rows } = await pool.query(
      `INSERT INTO team_categories (name, is_leadership, sort_order)
       VALUES ($1, $2, $3) RETURNING id`,
      [category.name, category.is_leadership, category.sort_order]
    );
    const categoryId = rows[0].id;
    console.log(`\n${category.name} (${category.members.length} members)`);

    for (let i = 0; i < category.members.length; i++) {
      const member = category.members[i];
      const publicId = slugify(member.name);

      process.stdout.write(`  Uploading ${member.name}... `);
      let profileImageUrl = member.image;
      let cloudinaryPublicId = null;

      try {
        const uploaded = await uploadImage(member.image, publicId);
        profileImageUrl = uploaded.url;
        cloudinaryPublicId = uploaded.publicId;
        console.log("done");
      } catch (err) {
        console.log(`failed (${err.message}), using source URL`);
      }

      await pool.query(
        `INSERT INTO team_members (
          category_id, name, role, profile_image_url, cloudinary_public_id, sort_order
        ) VALUES ($1, $2, $3, $4, $5, $6)`,
        [categoryId, member.name, member.role, profileImageUrl, cloudinaryPublicId, i]
      );
      totalMembers++;
    }
  }

  await pool.end();
  console.log(`\nSeeded ${seed.categories.length} categories and ${totalMembers} members with profile images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
