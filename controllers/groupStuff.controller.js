const { GroupStuff } = require("../model/groupStuffSchema");

const postGroupStuff = async (req, res) => {
  try {
    const newData = new GroupStuff(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "GroupStuff successfully created",
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

const getGroupStuffs = async (req, res) => {
  try {
    const data = await GroupStuff.find({});

    return res.status(200).json({
      success: true,
      message: "All GroupStuffs successfully received",
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

const getGroupStuffById = async (req, res) => {
  try {
    const data = await GroupStuff.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "GroupStuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "GroupStuff found",
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

const updateGroupStuff = async (req, res) => {
  try {
    const data = await GroupStuff.findByIdAndUpdate(
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
        message: "GroupStuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "GroupStuff updated successfully",
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

const deleteGroupStuff = async (req, res) => {
  try {
    const data = await GroupStuff.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "GroupStuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "GroupStuff deleted successfully",
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

const searchGroupStuff = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await GroupStuff.find({});

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
  postGroupStuff,
  getGroupStuffs,
  getGroupStuffById,
  updateGroupStuff,
  deleteGroupStuff,
  searchGroupStuff,
};
