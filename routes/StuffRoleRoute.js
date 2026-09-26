const express = require("express");

const router = express.Router();

const {
  postStuffRole,
  getStuffRoles,
  getStuffRoleById,
  updateStuffRole,
  deleteStuffRole,
  searchStuffRole,
} = require("../controllers/stuffRole.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/stuffRoleValidation");

/**
 * @swagger
 * tags:
 *   name: Stuff Role
 *   description: Stuff Role boshqaruvi
 */

/**
 * @swagger
 * /api/stuff-role/create:
 *   post:
 *     summary: Create StuffRole
 *     tags: [Stuff Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: StuffRole muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff-role/get:
 *   get:
 *     summary: Get all StuffRole
 *     tags: [Stuff Role]
 *     responses:
 *       200:
 *         description: Barcha StuffRolelar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff-role/getById/{id}:
 *   get:
 *     summary: Get StuffRole by ID
 *     tags: [Stuff Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StuffRole topildi
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff-role/search:
 *   get:
 *     summary: Search StuffRole
 *     tags: [Stuff Role]
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
 * /api/stuff-role/update/{id}:
 *   put:
 *     summary: Update StuffRole
 *     tags: [Stuff Role]
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
 *         description: StuffRole muvaffaqiyatli yangilandi
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/stuff-role/delete/{id}:
 *   delete:
 *     summary: Delete StuffRole
 *     tags: [Stuff Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StuffRole muvaffaqiyatli o'chirildi
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStuffRole
);

router.get("/get", getStuffRoles);

router.get("/getById/:id", getStuffRoleById);

router.get("/search", searchStuffRole);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStuffRole
);

router.delete("/delete/:id", deleteStuffRole);

module.exports = router;
