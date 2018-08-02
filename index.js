
const express = require('express')
const app = express()
const path = require('path')

const cors = require('cors')



app.use(cors())

app.use(express.static(path.join('dist/angularcv')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angularcv/index.html'));
});



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
