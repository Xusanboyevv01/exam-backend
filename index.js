const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const LidStatusRoute = require("./routes/LidStatusRoute");
const ReasonLidRoute = require("./routes/ReasonLidRoute");
const StageRoute = require("./routes/StageRoute");
const BranchRoute = require("./routes/BranchRoute");
const RoleRoute = require("./routes/RoleRoute");
const StuffRoute = require("./routes/StuffRoute");
const GroupRoute = require("./routes/GroupRoute");
const GroupStuffRoute = require("./routes/GroupStuffRoute");
const StuffRoleRoute = require("./routes/StuffRoleRoute");
const LessonRoute = require("./routes/LessonRoute");
const LidRoute = require("./routes/LidRoute");
const StudentsRoute = require("./routes/StudentsRoute");
const StudentGroupRoute = require("./routes/StudentGroupRoute");
const StudentLessonRoute = require("./routes/StudentLessonRoute");
const PaymentRoute = require("./routes/PaymentRoute");

app.use("/api/lid-status", LidStatusRoute);
app.use("/api/reason-lid", ReasonLidRoute);
app.use("/api/stage", StageRoute);
app.use("/api/branch", BranchRoute);
app.use("/api/role", RoleRoute);
app.use("/api/stuff", StuffRoute);
app.use("/api/groups", GroupRoute);
app.use("/api/group-stuff", GroupStuffRoute);
app.use("/api/stuff-role", StuffRoleRoute);
app.use("/api/lesson", LessonRoute);
app.use("/api/lids", LidRoute);
app.use("/api/students", StudentsRoute);
app.use("/api/student-groups", StudentGroupRoute);
app.use("/api/student-lessons", StudentLessonRoute);
app.use("/api/payments", PaymentRoute);

const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

ConnectionDB();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const SwaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Academy API",
      version: "1.0.0",
      description: "Academy API documentation using Swagger",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(SwaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
