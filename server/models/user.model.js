const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  EmailAddress: {
    type: String,
    required: true,
    minlength: 5,
  },
  Password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
