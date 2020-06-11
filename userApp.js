import express from "express"
import db from "./db/db"
// Initialize  the express app
const app = express()
// get all users
app.get("/api/v1/users", (req, res) => {
  res.status(200).send({
    success: true,
    message: "users retrieved successfully",
    users: Object.values(db),
  })
})

//get specific user
app.get("/api/v1/users/:userId", (req, res) => {
  const userId = req.params.userId
  const keys = Object.keys(db)
  if (keys.includes(userId)) {
    res.status(200).send({
      success: true,
      message: "users retrieved successfully",
      users: db[userId],
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "user does not exist",
    })
  }
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
