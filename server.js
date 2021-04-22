const express = require('express')
const app = express()

app.use(express.static('./public'))
app.get('/api', function(req, res){
  res.json({username: 'Tommy', gender: 'male'})
})

app.listen(9000)
