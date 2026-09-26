const { LidStatus } = require("../model/lidStatusSchema");

const postLidStatus = async (req, res) => {
  try {
    const newData = new LidStatus(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "LidStatus successfully created",
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

const getLidStatuss = async (req, res) => {
  try {
    const data = await LidStatus.find({});

    return res.status(200).json({
      success: true,
      message: "All LidStatuss successfully received",
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

const getLidStatusById = async (req, res) => {
  try {
    const data = await LidStatus.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "LidStatus not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "LidStatus found",
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

const updateLidStatus = async (req, res) => {
  try {
    const data = await LidStatus.findByIdAndUpdate(
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
        message: "LidStatus not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "LidStatus updated successfully",
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

const deleteLidStatus = async (req, res) => {
  try {
    const data = await LidStatus.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "LidStatus not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "LidStatus deleted successfully",
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

const searchLidStatus = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await LidStatus.find({
      $or: [
        { status: { $regex: query, $options: "i" } }
      ],
    });

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
  postLidStatus,
  getLidStatuss,
  getLidStatusById,
  updateLidStatus,
  deleteLidStatus,
  searchLidStatus,
};
