const fs = require('fs');
const https = require('https');

// IMPORTANT: Replace this with your actual Google Sheet ID
// You can find the ID in your Google Sheet URL:
// https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
const SHEET_ID = 'YOUR_SHEET_ID_HERE';

// The Google Sheets CSV export URL
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

// Path where the updated data will be saved
const OUTPUT_FILE = './src/data/team.json';

https.get(CSV_URL, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        try {
            // Very basic CSV to JSON parser for demonstration
            // (In a real app, it's better to use a package like 'papaparse')
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const headers = lines[0].split(',').map(h => h.trim());
            
            const teamMembers = [];

            for (let i = 1; i < lines.length; i++) {
                // Handle basic comma separation (Warning: assumes no commas inside values)
                const values = lines[i].split(',');
                if (values.length === headers.length) {
                    const member = {};
                    headers.forEach((header, index) => {
                        member[header] = values[index].trim();
                    });
                    teamMembers.push(member);
                }
            }

            // Write the array of objects to our local JSON file
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(teamMembers, null, 2), 'utf8');
            console.log(`✅ Successfully updated team data from Google Sheets!`);
            console.log(`📂 Saved to: ${OUTPUT_FILE}`);
            console.log(`Next step: Check your website, the changes should be reflected!`);

        } catch (error) {
            console.error('❌ Error processing the data:', error.message);
        }
    });

}).on("error", (err) => {
    console.log("❌ Error fetching the Google Sheet: " + err.message);
});
