const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8080


const start = () => {
  app.listen(PORT, () => console.log("Server listening", PORT))
}

app.get('/', (req, res) => {
  console.log("Reached default route")
  res.end("******HELLO INVOKER******")
})

app.get('/test', (req, res) => {
  console.log("Reached /test route")
  res.end("******RESPONSE FROM test ROUTE******")
})


start()