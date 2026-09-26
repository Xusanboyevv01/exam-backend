const { ReasonLid } = require("../model/reasonLidSchema");

const postReasonLid = async (req, res) => {
  try {
    const newData = new ReasonLid(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "ReasonLid successfully created",
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

const getReasonLids = async (req, res) => {
  try {
    const data = await ReasonLid.find({});

    return res.status(200).json({
      success: true,
      message: "All ReasonLids successfully received",
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

const getReasonLidById = async (req, res) => {
  try {
    const data = await ReasonLid.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "ReasonLid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "ReasonLid found",
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

const updateReasonLid = async (req, res) => {
  try {
    const data = await ReasonLid.findByIdAndUpdate(
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
        message: "ReasonLid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "ReasonLid updated successfully",
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

const deleteReasonLid = async (req, res) => {
  try {
    const data = await ReasonLid.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "ReasonLid not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "ReasonLid deleted successfully",
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

const searchReasonLid = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await ReasonLid.find({
      $or: [
        { reason_lid: { $regex: query, $options: "i" } }
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
  postReasonLid,
  getReasonLids,
  getReasonLidById,
  updateReasonLid,
  deleteReasonLid,
  searchReasonLid,
};
