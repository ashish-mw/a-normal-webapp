const express = require('express')
const app = express();



app.get('/', (req, res) => {
  const animals = ['deer', 'lion']
  return res.json(animals)
})


app.listen(3456, () => {
  console.log('Server running on 3456')
})
