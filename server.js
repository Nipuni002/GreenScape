const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

app.use('/uploads', express.static('uploads'));

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

  //Email transporter configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  app.locals.sendEmail = async (recipient, subject, text) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: recipient,
        subject: subject,
        text: text,
      };
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

// Routes
const employeeRouter = require("./routes/employee.js");
const taskRouter = require("./routes/taskRoutes.js");
const workRouter = require("./routes/work.js");
const jobRouter = require("./routes/jobs");
const jobApplicationRouter = require("./routes/JobApplication.js");

app.use("/employee", employeeRouter);
app.use("/task", taskRouter);
app.use("/work",workRouter);
app.use("/jobs", jobRouter);
app.use("/jobApplications", jobApplicationRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));