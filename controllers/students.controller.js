const { Students } = require("../model/studentsSchema");

const postStudents = async (req, res) => {
  try {
    const newData = new Students(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Students successfully created",
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

const getStudentss = async (req, res) => {
  try {
    const data = await Students.find({});

    return res.status(200).json({
      success: true,
      message: "All Studentss successfully received",
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

const getStudentsById = async (req, res) => {
  try {
    const data = await Students.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Students not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students found",
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

const updateStudents = async (req, res) => {
  try {
    const data = await Students.findByIdAndUpdate(
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
        message: "Students not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students updated successfully",
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

const deleteStudents = async (req, res) => {
  try {
    const data = await Students.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Students not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students deleted successfully",
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

const searchStudents = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Students.find({
      $or: [
        { first_name: { $regex: query, $options: "i" } },
        { last_name: { $regex: query, $options: "i" } },
        { phone_number: { $regex: query, $options: "i" } },
        { gender: { $regex: query, $options: "i" } }
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
  postStudents,
  getStudentss,
  getStudentsById,
  updateStudents,
  deleteStudents,
  searchStudents,
};
