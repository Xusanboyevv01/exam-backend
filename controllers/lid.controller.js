const { Lid } = require("../model/lidSchema");

const postLid = async (req, res) => {
  try {
    const newData = new Lid(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Lid successfully created",
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

const getLids = async (req, res) => {
  try {
    const data = await Lid.find({});

    return res.status(200).json({
      success: true,
      message: "All Lids successfully received",
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

const getLidById = async (req, res) => {
  try {
    const data = await Lid.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Lid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lid found",
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

const updateLid = async (req, res) => {
  try {
    const data = await Lid.findByIdAndUpdate(
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
        message: "Lid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lid updated successfully",
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

const deleteLid = async (req, res) => {
  try {
    const data = await Lid.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Lid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lid deleted successfully",
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

const searchLid = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Lid.find({
      $or: [
        { first_name: { $regex: query, $options: "i" } },
        { last_name: { $regex: query, $options: "i" } },
        { phone_number: { $regex: query, $options: "i" } },
        { trial_lesson_time: { $regex: query, $options: "i" } }
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
  postLid,
  getLids,
  getLidById,
  updateLid,
  deleteLid,
  searchLid,
};
