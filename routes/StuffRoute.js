const express = require("express");

const router = express.Router();

const {
  postStuff,
  getStuffs,
  getStuffById,
  updateStuff,
  deleteStuff,
  searchStuff,
} = require("../controllers/stuff.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/stuffValidation");

/**
 * @swagger
 * tags:
 *   name: Stuff
 *   description: Stuff boshqaruvi
 */

/**
 * @swagger
 * /api/stuff/create:
 *   post:
 *     summary: Create Stuff
 *     tags: [Stuff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Stuff muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff/get:
 *   get:
 *     summary: Get all Stuff
 *     tags: [Stuff]
 *     responses:
 *       200:
 *         description: Barcha Stufflar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff/getById/{id}:
 *   get:
 *     summary: Get Stuff by ID
 *     tags: [Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stuff topildi
 *       404:
 *         description: Stuff topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff/search:
 *   get:
 *     summary: Search Stuff
 *     tags: [Stuff]
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
 * /api/stuff/update/{id}:
 *   put:
 *     summary: Update Stuff
 *     tags: [Stuff]
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
 *         description: Stuff muvaffaqiyatli yangilandi
 *       404:
 *         description: Stuff topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff/delete/{id}:
 *   delete:
 *     summary: Delete Stuff
 *     tags: [Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stuff muvaffaqiyatli o'chirildi
 *       404:
 *         description: Stuff topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStuff
);

router.get("/get", getStuffs);

router.get("/getById/:id", getStuffById);

router.get("/search", searchStuff);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStuff
);

router.delete("/delete/:id", deleteStuff);

module.exports = router;
