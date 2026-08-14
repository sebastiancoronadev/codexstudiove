const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /#D95A11/gi, to: '#FF007F' },
  { from: /#E87C2A/gi, to: '#FF0000' },
  { from: /#F4A261/gi, to: '#FF6B00' },
  { from: /rgba\(217,90,17/gi, to: 'rgba(255,0,127' },
  { from: /rgba\(232,124,42/gi, to: 'rgba(255,0,0' },
  { from: /rgba\(244,162,97/gi, to: 'rgba(255,107,0' },
  { from: /rgba\(217,\s*90,\s*17/gi, to: 'rgba(255, 0, 127' },
  { from: /rgba\(232,\s*124,\s*42/gi, to: 'rgba(255, 0, 0' },
  { from: /rgba\(244,\s*162,\s*97/gi, to: 'rgba(255, 107, 0' }
];

function processPath(targetPath) {
  if (!fs.existsSync(targetPath)) return;
  
  if (fs.statSync(targetPath).isDirectory()) {
    const files = fs.readdirSync(targetPath);
    for (const file of files) {
      processPath(path.join(targetPath, file));
    }
  } else {
    if (targetPath.endsWith('.tsx') || targetPath.endsWith('.ts') || targetPath.endsWith('.css') || targetPath.endsWith('.html')) {
      let content = fs.readFileSync(targetPath, 'utf8');
      let changed = false;
      for (const req of replacements) {
        if (req.from.test(content)) {
          content = content.replace(req.from, req.to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(targetPath, content, 'utf8');
        console.log(`Updated ${targetPath}`);
      }
    }
  }
}

processPath(path.join(__dirname, 'src'));
processPath(path.join(__dirname, 'index.html'));
