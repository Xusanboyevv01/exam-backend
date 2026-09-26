const express = require("express");

const router = express.Router();

const {
  postRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
  searchRole,
} = require("../controllers/role.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/roleValidation");

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role boshqaruvi
 */

/**
 * @swagger
 * /api/role/create:
 *   post:
 *     summary: Create Role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Role muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/role/get:
 *   get:
 *     summary: Get all Role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Barcha Rolelar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/role/getById/{id}:
 *   get:
 *     summary: Get Role by ID
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role topildi
 *       404:
 *         description: Role topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/role/search:
 *   get:
 *     summary: Search Role
 *     tags: [Role]
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
 * /api/role/update/{id}:
 *   put:
 *     summary: Update Role
 *     tags: [Role]
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
 *         description: Role muvaffaqiyatli yangilandi
 *       404:
 *         description: Role topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/role/delete/{id}:
 *   delete:
 *     summary: Delete Role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role muvaffaqiyatli o'chirildi
 *       404:
 *         description: Role topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postRole
);

router.get("/get", getRoles);

router.get("/getById/:id", getRoleById);

router.get("/search", searchRole);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateRole
);

router.delete("/delete/:id", deleteRole);

module.exports = router;
