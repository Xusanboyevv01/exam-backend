const express = require("express");

const router = express.Router();

const {
  postLesson,
  getLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
  searchLesson,
} = require("../controllers/lesson.controller");

const validateSchema = require("../middleware/validate.middleware");

const {
  createValidationSchema,
  updateValidationSchema,
} = require("../validation/lessonValidation");

/**
 * @swagger
 * tags:
 *   name: Lesson
 *   description: Lesson boshqaruvi
 */

/**
 * @swagger
 * /api/lesson/create:
 *   post:
 *     summary: Create Lesson
 *     tags: [Lesson]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Lesson muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lesson/get:
 *   get:
 *     summary: Get all Lesson
 *     tags: [Lesson]
 *     responses:
 *       200:
 *         description: Barcha Lessonlar
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lesson/getById/{id}:
 *   get:
 *     summary: Get Lesson by ID
 *     tags: [Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lesson topildi
 *       404:
 *         description: Lesson topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lesson/search:
 *   get:
 *     summary: Search Lesson
 *     tags: [Lesson]
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
 * /api/lesson/update/{id}:
 *   put:
 *     summary: Update Lesson
 *     tags: [Lesson]
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
 *         description: Lesson muvaffaqiyatli yangilandi
 *       404:
 *         description: Lesson topilmadi
 *       500:
 *         description: Server xatosi
 */

/**
 * @swagger
 * /api/lesson/delete/{id}:
 *   delete:
 *     summary: Delete Lesson
 *     tags: [Lesson]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lesson muvaffaqiyatli o'chirildi
 *       404:
 *         description: Lesson topilmadi
 *       500:
 *         description: Server xatosi
 */

router.post(
  "/create",
  validateSchema(createValidationSchema),
  postLesson
);

router.get("/get", getLessons);

router.get("/getById/:id", getLessonById);

router.get("/search", searchLesson);

router.put(
  "/update/:id",
  validateSchema(updateValidationSchema),
  updateLesson
);

router.delete("/delete/:id", deleteLesson);

module.exports = router;
