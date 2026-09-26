const express = require("express");

const router = express.Router();

const {
  postStudentLesson,
  getStudentLessons,
  getStudentLessonById,
  updateStudentLesson,
  deleteStudentLesson,
  searchStudentLesson,
} = require("../controllers/studentLesson.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/studentLessonValidation");

/**
 * @swagger
 * tags:
 *   name: Student Lesson
 *   description: Student Lesson boshqaruvi
 */

/**
 * @swagger
 * /api/student-lessons/create:
 *   post:
 *     summary: Create StudentLesson
 *     tags: [Student Lesson]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: StudentLesson muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-lessons/get:
 *   get:
 *     summary: Get all StudentLesson
 *     tags: [Student Lesson]
 *     responses:
 *       200:
 *         description: Barcha StudentLessonlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-lessons/getById/{id}:
 *   get:
 *     summary: Get StudentLesson by ID
 *     tags: [Student Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentLesson topildi
 *       404:
 *         description: StudentLesson topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-lessons/search:
 *   get:
 *     summary: Search StudentLesson
 *     tags: [Student Lesson]
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
 * /api/student-lessons/update/{id}:
 *   put:
 *     summary: Update StudentLesson
 *     tags: [Student Lesson]
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
 *         description: StudentLesson muvaffaqiyatli yangilandi
 *       404:
 *         description: StudentLesson topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/student-lessons/delete/{id}:
 *   delete:
 *     summary: Delete StudentLesson
 *     tags: [Student Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentLesson muvaffaqiyatli o'chirildi
 *       404:
 *         description: StudentLesson topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postStudentLesson
);

router.get("/get", getStudentLessons);

router.get("/getById/:id", getStudentLessonById);

router.get("/search", searchStudentLesson);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateStudentLesson
);

router.delete("/delete/:id", deleteStudentLesson);

module.exports = router;
