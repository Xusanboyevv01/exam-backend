const express = require("express");

const router = express.Router();

const {
  postBranch,
  getBranchs,
  getBranchById,
  updateBranch,
  deleteBranch,
  searchBranch,
} = require("../controllers/branch.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/branchValidation");

/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Branch boshqaruvi
 */

/**
 * @swagger
 * /api/branch/create:
 *   post:
 *     summary: Create Branch
 *     tags: [Branch]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Branch muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/branch/get:
 *   get:
 *     summary: Get all Branch
 *     tags: [Branch]
 *     responses:
 *       200:
 *         description: Barcha Branchlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/branch/getById/{id}:
 *   get:
 *     summary: Get Branch by ID
 *     tags: [Branch]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch topildi
 *       404:
 *         description: Branch topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/branch/search:
 *   get:
 *     summary: Search Branch
 *     tags: [Branch]
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
 * /api/branch/update/{id}:
 *   put:
 *     summary: Update Branch
 *     tags: [Branch]
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
 *         description: Branch muvaffaqiyatli yangilandi
 *       404:
 *         description: Branch topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/branch/delete/{id}:
 *   delete:
 *     summary: Delete Branch
 *     tags: [Branch]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch muvaffaqiyatli o'chirildi
 *       404:
 *         description: Branch topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postBranch
);

router.get("/get", getBranchs);

router.get("/getById/:id", getBranchById);

router.get("/search", searchBranch);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateBranch
);

router.delete("/delete/:id", deleteBranch);

module.exports = router;
