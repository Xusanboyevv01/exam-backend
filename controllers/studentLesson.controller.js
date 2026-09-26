const { StudentLesson } = require("../model/studentLessonSchema");

const postStudentLesson = async (req, res) => {
  try {
    const newData = new StudentLesson(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "StudentLesson successfully created",
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

const getStudentLessons = async (req, res) => {
  try {
    const data = await StudentLesson.find({});

    return res.status(200).json({
      success: true,
      message: "All StudentLessons successfully received",
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

const getStudentLessonById = async (req, res) => {
  try {
    const data = await StudentLesson.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentLesson found",
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

const updateStudentLesson = async (req, res) => {
  try {
    const data = await StudentLesson.findByIdAndUpdate(
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
        message: "StudentLesson not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentLesson updated successfully",
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

const deleteStudentLesson = async (req, res) => {
  try {
    const data = await StudentLesson.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "StudentLesson deleted successfully",
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

const searchStudentLesson = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await StudentLesson.find({
      $or: [
        { reason: { $regex: query, $options: "i" } }
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
  postStudentLesson,
  getStudentLessons,
  getStudentLessonById,
  updateStudentLesson,
  deleteStudentLesson,
  searchStudentLesson,
};
