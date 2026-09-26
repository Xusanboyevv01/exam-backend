const express = require("express");

const router = express.Router();

const {
  postPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  searchPayment,
} = require("../controllers/payment.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/paymentValidation");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment boshqaruvi
 */

/**
 * @swagger
 * /api/payments/create:
 *   post:
 *     summary: Create Payment
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Payment muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/payments/get:
 *   get:
 *     summary: Get all Payment
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Barcha Paymentlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/payments/getById/{id}:
 *   get:
 *     summary: Get Payment by ID
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment topildi
 *       404:
 *         description: Payment topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/payments/search:
 *   get:
 *     summary: Search Payment
 *     tags: [Payment]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         example: example
 *     responses:
 *       200:
 *         description: Qidiruv natijalari
 *       400:
 *         description: Qidiruv so'zi kiritilmagan
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/payments/update/{id}:
 *   put:
 *     summary: Update Payment
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli yangilandi
 *       404:
 *         description: Payment topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/payments/delete/{id}:
 *   delete:
 *     summary: Delete Payment
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment muvaffaqiyatli o'chirildi
 *       404:
 *         description: Payment topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postPayment
);

router.get("/get", getPayments);

router.get("/getById/:id", getPaymentById);

router.get("/search", searchPayment);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updatePayment
);

router.delete("/delete/:id", deletePayment);

module.exports = router;
