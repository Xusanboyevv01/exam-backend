const { StuffRole } = require("../model/stuffRoleSchema");

const postStuffRole = async (req, res) => {
  try {
    const newData = new StuffRole(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "StuffRole successfully created",
      innerData: newData,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getStuffRoles = async (req, res) => {
  try {
    const data = await StuffRole.find({});

    return res.status(200).json({
      success: true,
      message: "All StuffRoles successfully received",
      innerData: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getStuffRoleById = async (req, res) => {
  try {
    const data = await StuffRole.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StuffRole found",
      innerData: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const updateStuffRole = async (req, res) => {
  try {
    const data = await StuffRole.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StuffRole updated successfully",
      innerData: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteStuffRole = async (req, res) => {
  try {
    const data = await StuffRole.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StuffRole deleted successfully",
      innerData: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const searchStuffRole = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await StuffRole.find({});

    return res.status(200).json({
      success: true,
      message: "Search results",
      innerData: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  postStuffRole,
  getStuffRoles,
  getStuffRoleById,
  updateStuffRole,
  deleteStuffRole,
  searchStuffRole,
};
