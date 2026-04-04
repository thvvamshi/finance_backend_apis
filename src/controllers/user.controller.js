const User = require("../models/user.model");
const mongoose = require("mongoose");

//  GET USERS
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    console.error("GET USERS ERROR:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { role } = req.body;

    // Only allow valid roles
    const allowedRoles = ["VIEWER", "ANALYST", "ADMIN"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true },
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User role updated successfully",
      data: user,
    });
  } catch (err) {
    console.error("UPDATE ROLE ERROR:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { isActive } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    if (typeof isActive !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "isActive must be true or false",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User status updated successfully",
      data: user,
    });

  } catch (err) {
    console.error("UPDATE STATUS ERROR:", err.message);

    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
