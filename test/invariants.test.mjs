import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const componentsDir = path.join(rootDir, 'src', 'components');
const themePath = path.join(rootDir, 'src', 'config', 'theme.ts');
const stringsPath = path.join(rootDir, 'src', 'constants', 'strings.ts');

let totalErrors = 0;

function reportError(rule, file, message) {
  console.error(`❌ [INVARIANT FAILURE] ${rule}`);
  console.error(`   File: ${file}`);
  console.error(`   ${message}\n`);
  totalErrors++;
}

function getFilesRecursively(dir, extensionRegex) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, extensionRegex));
    } else if (extensionRegex.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

console.log('🔍 Running Wervify Invariants Validation Suite...\n');

// 1. Validate Theme Tokens
console.log('▶ Checking Theme Token Invariants (src/config/theme.ts)...');
if (!fs.existsSync(themePath)) {
  reportError('THEME_EXISTS', themePath, 'theme.ts does not exist');
} else {
  const themeContent = fs.readFileSync(themePath, 'utf8');
  const requiredTokens = ['void', 'midnight', 'marine', 'cobalt', 'cerulean', 'azure', 'ice', 'white'];
  for (const token of requiredTokens) {
    if (!themeContent.includes(`${token}:`)) {
      reportError('THEME_TOKEN_MISSING', themePath, `Missing required color token: "${token}" in theme.ts`);
    }
  }
}

// 2. Validate Strings Registry
console.log('▶ Checking Strings Registry (src/constants/strings.ts)...');
if (!fs.existsSync(stringsPath)) {
  reportError('STRINGS_EXISTS', stringsPath, 'strings.ts does not exist');
} else {
  const stringsContent = fs.readFileSync(stringsPath, 'utf8');
  const requiredSections = ['meta', 'nav', 'hero', 'problem', 'pillars', 'process', 'pricing', 'faq', 'demo', 'footer'];
  for (const sec of requiredSections) {
    if (!stringsContent.includes(`${sec}:`)) {
      reportError('STRINGS_SECTION_MISSING', stringsPath, `Missing required section in strings.ts: "${sec}"`);
    }
  }
}

// 3. Validate Components: Zero Hardcoded Hex
console.log('▶ Checking Components for Hardcoded Hex Colors...');
const componentFiles = getFilesRecursively(componentsDir, /\.tsx$/);

const hexRegex = /#[0-9a-fA-F]{3,8}(?![\w])/g;
// Allow SVG xmlns or standard non-color items if any, but in components hex colors are forbidden
for (const file of componentFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(rootDir, file);

  // Check for raw hex colors
  const matches = content.match(hexRegex);
  if (matches) {
    // Filter out common SVG xml entities if any
    const invalidHexes = matches.filter(m => !m.startsWith('#svg-def'));
    if (invalidHexes.length > 0) {
      reportError(
        'ZERO_HEX_RULE',
        relativePath,
        `Hardcoded hex values detected: ${invalidHexes.join(', ')}. Use semantic Tailwind classes (e.g. bg-wervify-cobalt) instead.`
      );
    }
  }

  // Check that strings are imported from strings.ts or constants
  const hasStringsImport = content.includes('strings') || content.includes('constants') || content.includes('packages') || content.includes('cases') || content.includes('faq');
  const isContainerOnly = content.length < 500 && !content.includes('>') && !content.includes('button');
  if (!hasStringsImport && !isContainerOnly) {
    // Check if component renders raw text tags
    const suspiciousLiteralMatch = content.match(/<(h[1-6]|p|span|button|a)[^>]*>[A-Za-z]{4,}/);
    if (suspiciousLiteralMatch) {
      reportError(
        'STRINGS_CENTRALIZATION',
        relativePath,
        `Component appears to render hardcoded UI text: "${suspiciousLiteralMatch[0]}". All copy must be sourced from strings.ts.`
      );
    }
  }
}

console.log('--------------------------------------------------');
if (totalErrors === 0) {
  console.log('✅ ALL INVARIANTS PASSED! Zero hardcoded hex, strings registry intact, tokens aligned.\n');
  process.exit(0);
} else {
  console.error(`💥 Failed with ${totalErrors} invariant violations.\n`);
  process.exit(1);
}
