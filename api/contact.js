// export default async function handler(req, res) {
//   // Enable CORS
//   res.setHeader('Access-Control-Allow-Origin', '*'); // or restrict to your domain
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   // Handle preflight
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { fullName, email, company, employees, message, findUs } = req.body;

//   const ZENDESK_DOMAIN = process.env.ZENDESK_SUBDOMAIN;
//   const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL;
//   const ZENDESK_TOKEN = process.env.ZENDESK_TOKEN;

//   const auth = Buffer.from(`${ZENDESK_EMAIL}/token:${ZENDESK_TOKEN}`).toString("base64");

//   try {
//     const response = await fetch(`https://${ZENDESK_DOMAIN}.zendesk.com/api/v2/tickets.json`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${auth}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         ticket: {
//           subject: `New form submitted from ${fullName}`,
//           comment: {
//             body: `Full-Name:${fullName}\nEmail:${email}\nCompany: ${company}\nEmployees: ${employees}\nMessage: ${message}\nSource: ${findUs}`,
//           },
//           requester: {
//             name: fullName,
//             email: email,
//           },
//         },
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       console.error("Zendesk Error:", data);
//       return res.status(response.status).json({ error: data });
//     }

//     return res.status(200).json({ success: true, ticket: data.ticket });
//   } catch (err) {
//     console.error("Zendesk Ticket Error:", err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

export default async function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method === 'OPTIONS') {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return res.status(200).end();
}
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const {
    formType,
    email,
    fullName,
    message,
    subject,
    company,
    employees,
    findUs,
    clientCode,
    uanNumber,
  } = req.body;

  const ZENDESK_DOMAIN = process.env.ZENDESK_SUBDOMAIN;
  const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL;
  const ZENDESK_TOKEN = process.env.ZENDESK_TOKEN;

  const auth = Buffer.from(`${ZENDESK_EMAIL}/token:${ZENDESK_TOKEN}`).toString(
    "base64"
  );

  let composedMessage = "";
  let ticketSubject = subject || "New Submission";

  if (formType === "contact") {
    composedMessage = `
Contact Form Submission:

Name: ${fullName}
Email: ${email}
Company: ${company}
Employees: ${employees}
Heard About Us: ${findUs}

Message:
${message}
    `;
    ticketSubject = `Contact: ${fullName}`;
  } else if (formType === "signup") {
    composedMessage = `
Sign-up Form Submission:

Name: ${fullName}
Email: ${email}
Client Code: ${clientCode}
UAN Number: ${uanNumber}

Message:
${message}
    `;
    ticketSubject = `Signup: ${fullName}`;
  } else {
    return res.status(400).json({ error: "Invalid formType" });
  }

  try {
    const response = await fetch(
      `https://${ZENDESK_DOMAIN}.zendesk.com/api/v2/tickets.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticket: {
            subject: ticketSubject,
            comment: { body: composedMessage },
            requester: {
              name: fullName || email,
              email,
            },
          },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data });

    return res.status(200).json({ success: true, ticket: data.ticket });
  } catch (err) {
    console.error("Zendesk Ticket Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
