import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./DB/connection/Connection.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Instance of express is created
const app = express();
app.use(cors());

// To parse the json data from req.body
app.use(express.json());

// To parse Form data in the req.body :
app.use(express.urlencoded({ extended: true }));

// To parse the cookie :
app.use(cookieParser());

// Routes :
app.use("/api/vender", authRoutes);

// Common error Handler for all  (Best practise):
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

// Database func call Before Server Start Lisiting to the PORT  we need to connect DB :
connectDB()
  .then(() => {
    console.log("Database Connected successfully");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
