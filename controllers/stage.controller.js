const { Stage } = require("../model/stageSchema");

const postStage = async (req, res) => {
  try {
    const newData = new Stage(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Stage successfully created",
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

const getStages = async (req, res) => {
  try {
    const data = await Stage.find({});

    return res.status(200).json({
      success: true,
      message: "All Stages successfully received",
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

const getStageById = async (req, res) => {
  try {
    const data = await Stage.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Stage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stage found",
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

const updateStage = async (req, res) => {
  try {
    const data = await Stage.findByIdAndUpdate(
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
        message: "Stage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stage updated successfully",
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

const deleteStage = async (req, res) => {
  try {
    const data = await Stage.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Stage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stage deleted successfully",
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

const searchStage = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Stage.find({
      $or: [
        { name: { $regex: query, $options: "i" } }
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
  postStage,
  getStages,
  getStageById,
  updateStage,
  deleteStage,
  searchStage,
};
