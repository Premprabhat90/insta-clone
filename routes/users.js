const mongoose = require('mongoose');
const plm = require("passport");

mongoose.connect("mongodb://localhost//instaclone")

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
})

// userSchema.plugin(plm)

module.exports = mongoose.model("user", userSchema)