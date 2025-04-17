const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors({"https://fruits-frontend-flax.vercel.app/"}));


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let fruits = [];

// POST: Add fruit
app.post('/fruits', (req, res) => {
  const { name } = req.body;
  if (name) {
    fruits.push({ name });
    res.status(201).json({ message: 'Fruit added' });
  } else {
    res.status(400).json({ error: 'Fruit name is required' });
  }
});

// GET: View all fruits
app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});