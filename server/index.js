import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CSV_FILE_PATH = path.join(__dirname, 'recruits.csv');

// Initialize CSV with headers if it doesn't exist
if (!fs.existsSync(CSV_FILE_PATH)) {
    fs.writeFileSync(CSV_FILE_PATH, 'Timestamp,Name,Email,Branch/Year,Role Interest,Message\n', 'utf8');
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'DJS ASTRA Backend Systems Online' });
});

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, branchYear, roleInterest, message } = req.body;

    // Escape quotes and wrap in quotes to handle commas/newlines in user input
    const escapeCSV = (str) => `"${String(str || '').replace(/"/g, '""')}"`;

    const timestamp = new Date().toISOString();
    const csvRow = `${escapeCSV(timestamp)},${escapeCSV(name)},${escapeCSV(email)},${escapeCSV(branchYear)},${escapeCSV(roleInterest)},${escapeCSV(message)}\n`;

    // Append to CSV file
    fs.appendFile(CSV_FILE_PATH, csvRow, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to CSV:', err);
            return res.status(500).json({ success: false, message: 'Failed to record transmission.' });
        }

        console.log('--- NEW RECRUITMENT TRANSMISSION (SAVED TO CSV) ---');
        console.log(`Name:    ${name}`);
        console.log(`Email:   ${email}`);
        console.log(`Details: ${branchYear} // ${roleInterest}`);
        console.log('------------------------------------');

        // Simulate slight processing delay for effect
        setTimeout(() => {
            res.json({ success: true, message: 'Transmission received and logged.' });
        }, 800);
    });
});

app.listen(PORT, () => {
    console.log(`DJS ASTRA Backend initializing on port ${PORT}...`);
});
