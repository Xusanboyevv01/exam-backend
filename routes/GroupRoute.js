const express = require("express");

const router = express.Router();

const {
  postGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
  searchGroup,
} = require("../controllers/group.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/groupValidation");

/**
 * @swagger
 * tags:
 *   name: Group
 *   description: Group boshqaruvi
 */

/**
 * @swagger
 * /api/groups/create:
 *   post:
 *     summary: Create Group
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Group muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/groups/get:
 *   get:
 *     summary: Get all Group
 *     tags: [Group]
 *     responses:
 *       200:
 *         description: Barcha Grouplar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/groups/getById/{id}:
 *   get:
 *     summary: Get Group by ID
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group topildi
 *       404:
 *         description: Group topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/groups/search:
 *   get:
 *     summary: Search Group
 *     tags: [Group]
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
 * /api/groups/update/{id}:
 *   put:
 *     summary: Update Group
 *     tags: [Group]
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
 *         description: Group muvaffaqiyatli yangilandi
 *       404:
 *         description: Group topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/groups/delete/{id}:
 *   delete:
 *     summary: Delete Group
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group muvaffaqiyatli o'chirildi
 *       404:
 *         description: Group topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postGroup
);

router.get("/get", getGroups);

router.get("/getById/:id", getGroupById);

router.get("/search", searchGroup);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateGroup
);

router.delete("/delete/:id", deleteGroup);

module.exports = router;
