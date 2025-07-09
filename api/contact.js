export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, company, employees, message, findUs } = req.body;

  const ZENDESK_DOMAIN = process.env.ZENDESK_SUBDOMAIN;
  const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL;
  const ZENDESK_TOKEN = process.env.ZENDESK_TOKEN;

  const auth = Buffer.from(`${ZENDESK_EMAIL}/token:${ZENDESK_TOKEN}`).toString("base64");

  try {
    const response = await fetch(`https://${ZENDESK_DOMAIN}.zendesk.com/api/v2/tickets.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ticket: {
          subject: `New Contact from ${fullName}`,
          comment: {
            body: `Company: ${company}\nEmployees: ${employees}\nMessage: ${message}\nSource: ${findUs}`,
          },
          requester: {
            name: fullName,
            email: email,
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Zendesk Error:", data);
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json({ success: true, ticket: data.ticket });
  } catch (err) {
    console.error("Zendesk Ticket Error:", err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
