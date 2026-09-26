const express = require("express");

const router = express.Router();

const {
  postStage,
  getStages,
  getStageById,
  updateStage,
  deleteStage,
  searchStage,
} = require("../controllers/stage.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/stageValidation");

/**
 * @swagger
 * tags:
 *   name: Stage
 *   description: Stage boshqaruvi
 */

/**
 * @swagger
 * /api/stage/create:
 *   post:
 *     summary: Create Stage
 *     tags: [Stage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Stage muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stage/get:
 *   get:
 *     summary: Get all Stage
 *     tags: [Stage]
 *     responses:
 *       200:
 *         description: Barcha Stagelar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stage/getById/{id}:
 *   get:
 *     summary: Get Stage by ID
 *     tags: [Stage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stage topildi
 *       404:
 *         description: Stage topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stage/search:
 *   get:
 *     summary: Search Stage
 *     tags: [Stage]
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
 * /api/stage/update/{id}:
 *   put:
 *     summary: Update Stage
 *     tags: [Stage]
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
 *         description: Stage muvaffaqiyatli yangilandi
 *       404:
 *         description: Stage topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stage/delete/{id}:
 *   delete:
 *     summary: Delete Stage
 *     tags: [Stage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stage muvaffaqiyatli o'chirildi
 *       404:
 *         description: Stage topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStage
);

router.get("/get", getStages);

router.get("/getById/:id", getStageById);

router.get("/search", searchStage);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStage
);

router.delete("/delete/:id", deleteStage);

module.exports = router;
