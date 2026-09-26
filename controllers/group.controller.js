const { Group } = require("../model/groupSchema");

const postGroup = async (req, res) => {
  try {
    const newData = new Group(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Group successfully created",
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

const getGroups = async (req, res) => {
  try {
    const data = await Group.find({});

    return res.status(200).json({
      success: true,
      message: "All Groups successfully received",
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

const getGroupById = async (req, res) => {
  try {
    const data = await Group.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Group not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Group found",
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

const updateGroup = async (req, res) => {
  try {
    const data = await Group.findByIdAndUpdate(
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
        message: "Group not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Group updated successfully",
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

const deleteGroup = async (req, res) => {
  try {
    const data = await Group.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Group not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Group deleted successfully",
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

const searchGroup = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Group.find({
      $or: [
        { group_name: { $regex: query, $options: "i" } },
        { lesson_start_time: { $regex: query, $options: "i" } },
        { lesson_continuous: { $regex: query, $options: "i" } },
        { lesson_week_day: { $regex: query, $options: "i" } }
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
  postGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
  searchGroup,
};
