const Finance = require("../models/finance.model");

// CREATE
exports.create = async (req, res) => {
  try {
    const data = await Finance.create({
      ...req.body,
      userId: req.user._id
    });

    res.status(201).json({
      success: true,
      message: "Record created successfully",
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, startDate, endDate } = req.query;

    let filter = { isDeleted: false };

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const skip = (page - 1) * limit;

    const data = await Finance.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Finance.countDocuments(filter);

    res.json({
      success: true,
      message: "Data retrieved successfully",
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const data = await Finance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Updated successfully",
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await Finance.findByIdAndUpdate(req.params.id, { isDeleted: true });

    res.json({
      success: true,
      message: "Deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};