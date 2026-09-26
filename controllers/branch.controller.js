const { Branch } = require("../model/branchSchema");

const postBranch = async (req, res) => {
  try {
    const newData = new Branch(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Branch successfully created",
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

const getBranchs = async (req, res) => {
  try {
    const data = await Branch.find({});

    return res.status(200).json({
      success: true,
      message: "All Branchs successfully received",
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

const getBranchById = async (req, res) => {
  try {
    const data = await Branch.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Branch found",
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

const updateBranch = async (req, res) => {
  try {
    const data = await Branch.findByIdAndUpdate(
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
        message: "Branch not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Branch updated successfully",
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

const deleteBranch = async (req, res) => {
  try {
    const data = await Branch.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Branch deleted successfully",
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

const searchBranch = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Branch.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { address: { $regex: query, $options: "i" } },
        { call_number: { $regex: query, $options: "i" } }
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
  postBranch,
  getBranchs,
  getBranchById,
  updateBranch,
  deleteBranch,
  searchBranch,
};
