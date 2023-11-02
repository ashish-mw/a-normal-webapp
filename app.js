const express = require('express')
const app = express();

const navHtml = `<ul>
<li>
<a href="/">Home</a>
</li>
<li>
<a href="/about">About</a>
</li>
</ul>`

app.get('/', (req, res) => {

  const animals = ['deer', 'lion']
  const animalsHtml = animals.map(a => `<li>${a}</li>`).join('')

  console.log(animalsHtml)

  const html = `

  ${navHtml}

  <h1>Hello, world!</h1>

  <ul>
${animalsHtml}
  </ul>

  `
  return res.send(html)
})

app.get('/about', (req, res) => {
  const html = `
  ${navHtml}

  <h1>About!</h1>

  `
  return res.send(html)
})

app.listen(3456, () => {
  console.log('Server running on 3456')
})
