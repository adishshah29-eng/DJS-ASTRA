import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { name, email, branchYear, roleInterest, message } = req.body;

        // Vercel Environment Variables setup for Google Sheets API
        const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

        if (!GOOGLE_PRIVATE_KEY || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SHEET_ID) {
            console.error('Missing Google Sheets API environment variables.');
            return res.status(500).json({ success: false, message: 'Server configuration error.' });
        }

        const serviceAccountAuth = new JWT({
            email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: GOOGLE_PRIVATE_KEY,
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

        // Load document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0]; // Assuming first tab is the target

        // Append to the Google Sheet
        const timestamp = new Date().toISOString();
        await sheet.addRow({
            Timestamp: timestamp,
            Name: name || '',
            Email: email || '',
            'Branch/Year': branchYear || '',
            'Role Interest': roleInterest || '',
            Message: message || ''
        });

        console.log(`--- NEW RECRUITMENT TRANSMISSION (SAVED TO SHEETS) ---`);
        console.log(`Name:    ${name}`);
        console.log(`Email:   ${email}`);
        console.log('------------------------------------');

        return res.status(200).json({ success: true, message: 'Transmission received and safely logged to cloud.' });

    } catch (error) {
        console.error('Error writing to Google Sheets:', error);
        return res.status(500).json({ success: false, message: 'Failed to record transmission.' });
    }
}
