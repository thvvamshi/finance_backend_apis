const Finance = require("../models/finance.model");

exports.summary = async (req, res) => {
  const data = await Finance.aggregate([
    { $match: { isDeleted: false } },
    { $group: { _id: "$type", total: { $sum: "$amount" } } }
  ]);

  let income = 0, expense = 0;
  data.forEach(d => d._id === "INCOME" ? income = d.total : expense = d.total);

  res.json({ success: true, message: "Summary retrieved successfully", income, expense, net: income - expense });
};
