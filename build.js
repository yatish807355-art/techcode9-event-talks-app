const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');
const templatePath = path.join(__dirname, 'template.html');
const outputPath = path.join(__dirname, 'index.html');

try {
    const data = fs.readFileSync(dataPath, 'utf8');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Inject data into template
    const finalHtml = template.replace('<!-- SCHEDULE_DATA -->', data);

    fs.writeFileSync(outputPath, finalHtml);
    console.log('Successfully generated index.html');
} catch (error) {
    console.error('Error generating website:', error);
}
