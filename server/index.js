import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config(); // Load .env variables

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // For parsing JSON bodies

app.post('/api/contact', async (req, res) => {
  const { fullName, email, company, employees, message, findUs } = req.body;

  try {
    const response = await axios.post(
      `https://${process.env.ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/requests.json`,
      {
        request: {
          subject: "New Contact Form Submission",
          comment: {
            body: `
              Name: ${fullName}
              Email: ${email}
              Company: ${company}
              Employees: ${employees}
              Message: ${message}
              How did they find us?: ${findUs}
            `
          },
          requester: {
            name: fullName,
            email: email
          }
        }
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${process.env.ZENDESK_EMAIL}/token:${process.env.ZENDESK_TOKEN}`).toString('base64')}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ success: true, ticket: response.data.request });
  } catch (error) {
    console.error('Zendesk API Error:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
