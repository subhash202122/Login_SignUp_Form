const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
// Connect to MongoDB database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log(err);
  });
// Create Express app
const app = express();
// Use middleware
app.use(cors());
app.use(express.json());
// Define a simple test route
app.get("/", (req, res) => {
  res.send("Hello from the MERN stack server");
});
// Import and use user routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
