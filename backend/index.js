const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    const users = response.data.users;
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
