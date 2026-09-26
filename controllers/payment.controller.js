const { Payment } = require("../model/paymentSchema");

const postPayment = async (req, res) => {
  try {
    const newData = new Payment(req.body);

    await newData.save();

    return res.status(201).json({
      success: true,
      message: "Payment successfully created",
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

const getPayments = async (req, res) => {
  try {
    const data = await Payment.find({});

    return res.status(200).json({
      success: true,
      message: "All Payments successfully received",
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

const getPaymentById = async (req, res) => {
  try {
    const data = await Payment.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment found",
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

const updatePayment = async (req, res) => {
  try {
    const data = await Payment.findByIdAndUpdate(
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
        message: "Payment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment updated successfully",
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

const deletePayment = async (req, res) => {
  try {
    const data = await Payment.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment deleted successfully",
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

const searchPayment = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Qidiruv So'zini kiriting",
      });
    }

    const result = await Payment.find({});

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
  postPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  searchPayment,
};
