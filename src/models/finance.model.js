const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  type: { type: String, enum: ["INCOME", "EXPENSE"] },
  category: String,
  date: Date,
  note: String,
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

schema.index({ isDeleted: 1, category: 1, date: -1 });
module.exports = mongoose.model("Finance", schema);
