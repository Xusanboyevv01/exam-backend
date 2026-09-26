const express = require("express");

const router = express.Router();

const {
  postReasonLid,
  getReasonLids,
  getReasonLidById,
  updateReasonLid,
  deleteReasonLid,
  searchReasonLid,
} = require("../controllers/reasonLid.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/reasonLidValidation");

/**
 * @swagger
 * tags:
 *   name: Reason Lid
 *   description: Reason Lid boshqaruvi
 */

/**
 * @swagger
 * /api/reason-lid/create:
 *   post:
 *     summary: Create ReasonLid
 *     tags: [Reason Lid]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: ReasonLid muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/reason-lid/get:
 *   get:
 *     summary: Get all ReasonLid
 *     tags: [Reason Lid]
 *     responses:
 *       200:
 *         description: Barcha ReasonLidlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/reason-lid/getById/{id}:
 *   get:
 *     summary: Get ReasonLid by ID
 *     tags: [Reason Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: ReasonLid topildi
 *       404:
 *         description: ReasonLid topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/reason-lid/search:
 *   get:
 *     summary: Search ReasonLid
 *     tags: [Reason Lid]
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
 * /api/reason-lid/update/{id}:
 *   put:
 *     summary: Update ReasonLid
 *     tags: [Reason Lid]
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
 *         description: ReasonLid muvaffaqiyatli yangilandi
 *       404:
 *         description: ReasonLid topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/reason-lid/delete/{id}:
 *   delete:
 *     summary: Delete ReasonLid
 *     tags: [Reason Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: ReasonLid muvaffaqiyatli o'chirildi
 *       404:
 *         description: ReasonLid topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postReasonLid
);

router.get("/get", getReasonLids);

router.get("/getById/:id", getReasonLidById);

router.get("/search", searchReasonLid);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateReasonLid
);

router.delete("/delete/:id", deleteReasonLid);

module.exports = router;
