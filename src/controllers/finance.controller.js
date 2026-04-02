const { success } = require("zod/v4");
const Finance = require("../models/finance.model");

exports.create = async (req, res) => {
  const data = await Finance.create({ ...req.body, userId: req.user._id });
  res.json(data);
};

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10, category, startDate, endDate } = req.query;

  let filter = { isDeleted: false };

  if (category) filter.category = { $regex: category, $options: "i" };
  if (startDate && endDate) {
    filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }

  const skip = (page - 1) * limit;

  const data = await Finance.find(filter).skip(skip).limit(limit);
  const total = await Finance.countDocuments(filter);

  res.json({ success: true, message: "Data retrieved successfully", total, page, data });
};

exports.update = async (req, res) => {
  const data = await Finance.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true,message: "Updated successfully", data: data });
};

exports.remove = async (req, res) => {
  await Finance.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.json({ success: true,  message: "Deleted successfully " });
};
