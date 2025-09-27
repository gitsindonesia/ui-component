#!/usr/bin/env node

/**
 * Build script for Morpheme V2 Tailwind CSS theme
 * 
 * This script compiles the Tailwind CSS theme and outputs the final CSS file.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const srcDir = path.join(__dirname, '../src/morpheme-v2');
const distDir = path.join(__dirname, '../dist/morpheme-v2');
const inputFile = path.join(srcDir, 'main.css');
const outputFile = path.join(distDir, 'main.css');
const configFile = path.join(srcDir, 'tailwind.config.js');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

console.log('🎨 Building Morpheme V2 Tailwind CSS theme...');
console.log(`📁 Source: ${srcDir}`);
console.log(`📁 Output: ${distDir}`);
console.log(`⚙️  Config: ${configFile}`);

try {
    // Build Tailwind CSS
    const command = `npx tailwindcss -i "${inputFile}" -o "${outputFile}" --config "${configFile}"`;

    console.log(`🔨 Running: ${command}`);
    execSync(command, { stdio: 'inherit' });

    // Get file size
    const stats = fs.statSync(outputFile);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);

    console.log(`✅ Build completed successfully!`);
    console.log(`📦 Output file: ${outputFile}`);
    console.log(`📏 File size: ${fileSizeInKB} KB`);

    // Create minified version
    const minifiedFile = path.join(distDir, 'main.min.css');
    const minifyCommand = `npx tailwindcss -i "${inputFile}" -o "${minifiedFile}" --config "${configFile}" --minify`;

    console.log(`🔨 Creating minified version...`);
    execSync(minifyCommand, { stdio: 'inherit' });

    const minStats = fs.statSync(minifiedFile);
    const minFileSizeInKB = (minStats.size / 1024).toFixed(2);

    console.log(`✅ Minified version created!`);
    console.log(`📦 Minified file: ${minifiedFile}`);
    console.log(`📏 Minified size: ${minFileSizeInKB} KB`);
    console.log(`📊 Size reduction: ${((stats.size - minStats.size) / stats.size * 100).toFixed(1)}%`);

} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}
