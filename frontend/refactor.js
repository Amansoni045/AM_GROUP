const fs = require('fs');
const path = require('path');

const dirs = ['about', 'accounting', 'analytiks', 'consulting', 'design'];
const base = '/Users/amansoni/Documents/Development/Client Projects/AM_GROUP/frontend/src/components';

dirs.forEach(d => {
  const dir = path.join(base, d);
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const replacements = [
        // Backgrounds
        [/bg-\[#f9f9f9\]/g, 'bg-[var(--bg-alt)]'],
        [/bg-\[#6373f2\](?:\/[0-9]+)?/g, 'bg-[var(--color-accent-soft)]'],
        [/bg-\[#059669\](?:\/[0-9]+)?/g, 'bg-[var(--color-accent-soft)]'],
        [/bg-\[#dc2626\](?:\/[0-9]+)?/g, 'bg-[var(--color-accent-soft)]'],
        [/bg-\[#6373f2\]/g, 'bg-[var(--color-accent)]'],
        
        // Text
        [/text-\[#6373f2\]/g, 'text-[var(--color-accent)]'],
        [/text-\[#059669\]/g, 'text-[var(--color-accent)]'],
        [/text-\[#dc2626\]/g, 'text-[var(--color-accent)]'],

        // Borders
        [/border-\[#6373f2\](?:\/[0-9]+)?/g, 'border-[var(--color-accent)]'],
        [/border-\[#059669\](?:\/[0-9]+)?/g, 'border-[var(--color-accent)]'],
        [/border-\[#dc2626\](?:\/[0-9]+)?/g, 'border-[var(--color-accent)]'],

        // Shadows
        [/shadow-\[0_0_15px_rgba\([^)]+\)\]/g, ''],
      ];
      
      replacements.forEach(([regex, replacement]) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
        }
      });
      
      if (content !== fs.readFileSync(fullPath, 'utf8')) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
});
console.log('Done replacing inner pages.');
