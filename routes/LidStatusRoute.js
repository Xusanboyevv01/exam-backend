const express = require("express");

const router = express.Router();

const {
  postLidStatus,
  getLidStatuss,
  getLidStatusById,
  updateLidStatus,
  deleteLidStatus,
  searchLidStatus,
} = require("../controllers/lidStatus.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/lidStatusValidation");

/**
 * @swagger
 * tags:
 *   name: Lid Status
 *   description: Lid Status boshqaruvi
 */

/**
 * @swagger
 * /api/lid-status/create:
 *   post:
 *     summary: Create LidStatus
 *     tags: [Lid Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: LidStatus muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lid-status/get:
 *   get:
 *     summary: Get all LidStatus
 *     tags: [Lid Status]
 *     responses:
 *       200:
 *         description: Barcha LidStatuslar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lid-status/getById/{id}:
 *   get:
 *     summary: Get LidStatus by ID
 *     tags: [Lid Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LidStatus topildi
 *       404:
 *         description: LidStatus topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lid-status/search:
 *   get:
 *     summary: Search LidStatus
 *     tags: [Lid Status]
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
 * /api/lid-status/update/{id}:
 *   put:
 *     summary: Update LidStatus
 *     tags: [Lid Status]
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
 *         description: LidStatus muvaffaqiyatli yangilandi
 *       404:
 *         description: LidStatus topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lid-status/delete/{id}:
 *   delete:
 *     summary: Delete LidStatus
 *     tags: [Lid Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LidStatus muvaffaqiyatli o'chirildi
 *       404:
 *         description: LidStatus topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postLidStatus
);

router.get("/get", getLidStatuss);

router.get("/getById/:id", getLidStatusById);

router.get("/search", searchLidStatus);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateLidStatus
);

router.delete("/delete/:id", deleteLidStatus);

module.exports = router;
