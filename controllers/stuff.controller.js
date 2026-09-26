const { Stuff } = require("../model/stuffSchema");

const postStuff = async (req, res) => {
  try {
    const newData = new Stuff(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Stuff successfully created",
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

const getStuffs = async (req, res) => {
  try {
    const data = await Stuff.find({});

    return res.status(200).json({
      success: true,
      message: "All Stuffs successfully received",
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

const getStuffById = async (req, res) => {
  try {
    const data = await Stuff.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stuff found",
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

const updateStuff = async (req, res) => {
  try {
    const data = await Stuff.findByIdAndUpdate(
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
        message: "Stuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stuff updated successfully",
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

const deleteStuff = async (req, res) => {
  try {
    const data = await Stuff.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stuff deleted successfully",
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

const searchStuff = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Stuff.find({
      $or: [
        { first_name: { $regex: query, $options: "i" } },
        { last_name: { $regex: query, $options: "i" } },
        { phone_number: { $regex: query, $options: "i" } },
        { login: { $regex: query, $options: "i" } },
        { parol: { $regex: query, $options: "i" } }
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
  postStuff,
  getStuffs,
  getStuffById,
  updateStuff,
  deleteStuff,
  searchStuff,
};
