const cors = require('cors');

const express = require('express')
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({test: 'Hello World!'})
});

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});