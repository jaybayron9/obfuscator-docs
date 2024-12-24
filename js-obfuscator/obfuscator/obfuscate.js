const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Directory paths
const sourceDir = './src';  // Source directory containing JS files
const outputDir = './output'; // Output directory for obfuscated files

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to obfuscate a file
function obfuscateFile(filePath, outputPath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
    }).getObfuscatedCode();

    fs.writeFileSync(outputPath, obfuscatedCode);
}

// Function to process all .js files in a directory recursively
function processDirectory(source, output) {
    const files = fs.readdirSync(source);

    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const outputPath = path.join(output, file);

        if (fs.statSync(sourcePath).isDirectory()) {
            if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);
            processDirectory(sourcePath, outputPath);
        } else if (path.extname(file) === '.js') {
            console.log(`Obfuscating: ${sourcePath}`);
            obfuscateFile(sourcePath, outputPath);
        }
    });
}

// Start processing
processDirectory(sourceDir, outputDir);
console.log('Obfuscation completed!');
