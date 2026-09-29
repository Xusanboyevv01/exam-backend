const { StudentGroup } = require("../model/studentGroupSchema");

const postStudentGroup = async (req, res) => {
  try {
    const newData = new StudentGroup(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "StudentGroup successfully created",
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

const getStudentGroups = async (req, res) => {
  try {
    const data = await StudentGroup.find({});

    return res.status(200).json({
      success: true,
      message: "All StudentGroups successfully received",
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

const getStudentGroupById = async (req, res) => {
  try {
    const data = await StudentGroup.findById(req.params.id)
      .populate("student_id")
      .populate("group_id");

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentGroup found",
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

const updateStudentGroup = async (req, res) => {
  try {
    const data = await StudentGroup.findByIdAndUpdate(
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
        message: "StudentGroup not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentGroup updated successfully",
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

const deleteStudentGroup = async (req, res) => {
  try {
    const data = await StudentGroup.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentGroup deleted successfully",
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

const searchStudentGroup = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await StudentGroup.find({});

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
  postStudentGroup,
  getStudentGroups,
  getStudentGroupById,
  updateStudentGroup,
  deleteStudentGroup,
  searchStudentGroup,
};
