const express = require("express");

const router = express.Router();

const {
  postLid,
  getLids,
  getLidById,
  updateLid,
  deleteLid,
  searchLid,
} = require("../controllers/lid.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/lidValidation");

/**
 * @swagger
 * tags:
 *   name: Lid
 *   description: Lid boshqaruvi
 */

/**
 * @swagger
 * /api/lids/create:
 *   post:
 *     summary: Create Lid
 *     tags: [Lid]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Lid muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lids/get:
 *   get:
 *     summary: Get all Lid
 *     tags: [Lid]
 *     responses:
 *       200:
 *         description: Barcha Lidlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lids/getById/{id}:
 *   get:
 *     summary: Get Lid by ID
 *     tags: [Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lid topildi
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lids/search:
 *   get:
 *     summary: Search Lid
 *     tags: [Lid]
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
 * /api/lids/update/{id}:
 *   put:
 *     summary: Update Lid
 *     tags: [Lid]
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
 *         description: Lid muvaffaqiyatli yangilandi
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lids/delete/{id}:
 *   delete:
 *     summary: Delete Lid
 *     tags: [Lid]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lid muvaffaqiyatli o'chirildi
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postLid
);

router.get("/get", getLids);

router.get("/getById/:id", getLidById);

router.get("/search", searchLid);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateLid
);

router.delete("/delete/:id", deleteLid);

module.exports = router;
