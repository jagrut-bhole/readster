var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://jagrutbhole103:Jagrut2004@cluster0.dt0jxkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  Email: String,
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
