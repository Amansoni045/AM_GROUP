const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'app');
const componentsPath = path.join(__dirname, 'src', 'components');

const patternsToRemove = [
  // Imports
  /import\s+TopBar\s+from\s+['"]@\/components\/layouts\/TopBar['"];?\n?/g,
  /import\s+Footer\s+from\s+['"]@\/components\/layouts\/Footer['"];?\n?/g,
  /import\s+BackToTop\s+from\s+['"]@\/components\/ui\/BackToTop['"];?\n?/g,
  /import\s+Header\s+from\s+['"]@\/components\/layouts\/Header['"];?\n?/g,
  
  // Components (self-closing or with spaces)
  /<\s*TopBar\s*\/?\s*>\n?/g,
  /<\s*Footer\s*\/?\s*>\n?/g,
  /<\s*BackToTop\s*\/?\s*>\n?/g,
  /<\s*Header\s*\/?\s*>\n?/g,
];

function processFile(filePath) {
  // Skip layout.tsx completely
  if (filePath.endsWith('layout.tsx')) return;
  
  // For components, only process Hero components or similar top-level section components if they have Header
  // Actually, we can just process all components, it's safe to remove Header/TopBar from them.
  // Wait, TopBar, Header, Footer, BackToTop are the components themselves. We shouldn't empty them!
  if (filePath.endsWith('TopBar.tsx') || filePath.endsWith('Footer.tsx') || filePath.endsWith('Header.tsx') || filePath.endsWith('BackToTop.tsx')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const pattern of patternsToRemove) {
    content = content.replace(pattern, '');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

console.log("Starting cleanup...");
walkDir(directoryPath);
walkDir(componentsPath);
console.log("Cleanup complete!");
