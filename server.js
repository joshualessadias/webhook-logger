// server.js
const express = require('express');
const app = express();
const port = 3003;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Catch-all route to log all incoming webhook requests
app.all('/*"*"', (req, res) => {
  console.log(`📬 [ ${new Date()} ] Webhook received!`);
  console.log()
  console.log('🔗 URL:', req.originalUrl);
  console.log('==> Method:', req.method);
  console.log('==> Headers:', req.headers);
  console.log('==> Body:', JSON.stringify(req.body));
  console.log()
  console.log('-----------------------------');
  console.log()
  res.sendStatus(200); // Respond OK
});

app.listen(port, () => {
  console.log(`🚀 Webhook logger running at http://localhost:${port}`);
});