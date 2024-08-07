const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would normally process the contact form submission, e.g., save to a database or send an email.
  // For this example, let's just return a success response.
  console.log('Contact form submitted:', { name, email, message });
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
