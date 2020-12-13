const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).send({ success: true })
});

app.listen(4000);