import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const packageJsonPath = path.join(projectRoot, 'package.json');
const distDir = path.join(projectRoot, 'dist');

// Read package.json to get version
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const version = packageJson.version;

// Extension ID (should match the one in src/vm/extensions/block/index.js)
const EXTENSION_ID = 'gai';

console.log(`Building ${EXTENSION_ID} version ${version}...`);

// Run rollup build
try {
    execSync('npm run build', { 
        cwd: projectRoot,
        stdio: 'inherit' 
    });
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
}

// Create version directory and copy files
const sourceFile = path.join(distDir, `${EXTENSION_ID}.mjs`);
const versionDir = path.join(distDir, version);
const targetFile = path.join(versionDir, `${EXTENSION_ID}.mjs`);

if (fs.existsSync(sourceFile)) {
    // Create version directory
    fs.ensureDirSync(versionDir);
    
    // Copy the module file
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✓ Created: dist/${version}/${EXTENSION_ID}.mjs`);
    
    // Also copy sourcemap if it exists
    const sourceMapFile = `${sourceFile}.map`;
    const targetMapFile = `${targetFile}.map`;
    if (fs.existsSync(sourceMapFile)) {
        fs.copyFileSync(sourceMapFile, targetMapFile);
        console.log(`✓ Created: dist/${version}/${EXTENSION_ID}.mjs.map`);
    }
} else {
    console.error(`Error: ${sourceFile} not found`);
    process.exit(1);
}

console.log(`\n✓ Version ${version} build completed successfully!`);
