const express = require("express");

const router = express.Router();

const {
  postGroupStuff,
  getGroupStuffs,
  getGroupStuffById,
  updateGroupStuff,
  deleteGroupStuff,
  searchGroupStuff,
} = require("../controllers/groupStuff.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/groupStuffValidation");

/**
 * @swagger
 * tags:
 *   name: Group Stuff
 *   description: Group Stuff boshqaruvi
 */

/**
 * @swagger
 * /api/group-stuff/create:
 *   post:
 *     summary: Create GroupStuff
 *     tags: [Group Stuff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: GroupStuff muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/group-stuff/get:
 *   get:
 *     summary: Get all GroupStuff
 *     tags: [Group Stuff]
 *     responses:
 *       200:
 *         description: Barcha GroupStufflar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/group-stuff/getById/{id}:
 *   get:
 *     summary: Get GroupStuff by ID
 *     tags: [Group Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: GroupStuff topildi
 *       404:
 *         description: GroupStuff topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/group-stuff/search:
 *   get:
 *     summary: Search GroupStuff
 *     tags: [Group Stuff]
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
 * /api/group-stuff/update/{id}:
 *   put:
 *     summary: Update GroupStuff
 *     tags: [Group Stuff]
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
 *         description: GroupStuff muvaffaqiyatli yangilandi
 *       404:
 *         description: GroupStuff topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/group-stuff/delete/{id}:
 *   delete:
 *     summary: Delete GroupStuff
 *     tags: [Group Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: GroupStuff muvaffaqiyatli o'chirildi
 *       404:
 *         description: GroupStuff topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postGroupStuff
);

router.get("/get", getGroupStuffs);

router.get("/getById/:id", getGroupStuffById);

router.get("/search", searchGroupStuff);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateGroupStuff
);

router.delete("/delete/:id", deleteGroupStuff);

module.exports = router;
