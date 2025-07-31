const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  videos: [{ url: String, title: String }],
});

module.exports = mongoose.model("Course", courseSchema);

