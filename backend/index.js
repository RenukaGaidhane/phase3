const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/notes', (req, res) => {
  res.json([
    { id: 1, text: "Learn Docker" },
    { id: 2, text: "Learn DevOps" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
