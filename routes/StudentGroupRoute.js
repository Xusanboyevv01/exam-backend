const express = require("express");

const router = express.Router();

const {
  postStudentGroup,
  getStudentGroups,
  getStudentGroupById,
  updateStudentGroup,
  deleteStudentGroup,
  searchStudentGroup,
} = require("../controllers/studentGroup.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/studentGroupValidation");

/**
 * @swagger
 * tags:
 *   name: Student Group
 *   description: Student Group boshqaruvi
 */

/**
 * @swagger
 * /api/student-groups/create:
 *   post:
 *     summary: Create StudentGroup
 *     tags: [Student Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: StudentGroup muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-groups/get:
 *   get:
 *     summary: Get all StudentGroup
 *     tags: [Student Group]
 *     responses:
 *       200:
 *         description: Barcha StudentGrouplar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-groups/getById/{id}:
 *   get:
 *     summary: Get StudentGroup by ID
 *     tags: [Student Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentGroup topildi
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-groups/search:
 *   get:
 *     summary: Search StudentGroup
 *     tags: [Student Group]
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
 * /api/student-groups/update/{id}:
 *   put:
 *     summary: Update StudentGroup
 *     tags: [Student Group]
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
 *         description: StudentGroup muvaffaqiyatli yangilandi
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-groups/delete/{id}:
 *   delete:
 *     summary: Delete StudentGroup
 *     tags: [Student Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentGroup muvaffaqiyatli o'chirildi
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStudentGroup
);

router.get("/get", getStudentGroups);

router.get("/getById/:id", getStudentGroupById);

router.get("/search", searchStudentGroup);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStudentGroup
);

router.delete("/delete/:id", deleteStudentGroup);

module.exports = router;
