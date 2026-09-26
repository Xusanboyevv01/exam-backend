const express = require("express");

const router = express.Router();

const {
  postStudents,
  getStudentss,
  getStudentsById,
  updateStudents,
  deleteStudents,
  searchStudents,
} = require("../controllers/students.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/studentsValidation");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students boshqaruvi
 */

/**
 * @swagger
 * /api/students/create:
 *   post:
 *     summary: Create Students
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Students muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/students/get:
 *   get:
 *     summary: Get all Students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Barcha Studentslar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/students/getById/{id}:
 *   get:
 *     summary: Get Students by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Students topildi
 *       404:
 *         description: Students topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/students/search:
 *   get:
 *     summary: Search Students
 *     tags: [Students]
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
 * /api/students/update/{id}:
 *   put:
 *     summary: Update Students
 *     tags: [Students]
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
 *         description: Students muvaffaqiyatli yangilandi
 *       404:
 *         description: Students topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/students/delete/{id}:
 *   delete:
 *     summary: Delete Students
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Students muvaffaqiyatli o'chirildi
 *       404:
 *         description: Students topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStudents
);

router.get("/get", getStudentss);

router.get("/getById/:id", getStudentsById);

router.get("/search", searchStudents);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStudents
);

router.delete("/delete/:id", deleteStudents);

module.exports = router;
