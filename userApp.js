var express = require('express')
var db = require('./db/db.json')

// Initialize  the express app
const app = express()
// get all users
app.get("/api/v1/users", (req, res) => {
  res.status(200).send({
    success: true,
    message: "users retrieved successfully",
    users: db,
  })
})

//get specific user
app.get("/api/v1/users/:userId", (req, res) => {
  const userId = req.params.userId
  const user = db.filter((user) => user.id == userId)
  if (user.length) {
    res.status(200).send({
      success: true,
      message: "user retrieved successfully",
      users: user,
    })
  } else {
    return res.status(404).send({
      success: false,
      message: `user with user id: ${userId} does not exist `,
    })
  }
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
module.exports= app