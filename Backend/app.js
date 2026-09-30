// ===============================
// Import Required Packages
// ===============================

require("dotenv").config();

const express = require("express");
const cors = require("cors");

// ===============================
// Import Database Connection
// ===============================

const db = require("./config1/database");

// ===============================
// Import Routes
// ===============================

const userRoutes = require("./routes/userRoutes");

// ===============================
// Create Express Application
// ===============================

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {
    res.send("Welcome to NSS Website Backend");
});

// ===============================
// User Routes
// ===============================

app.use("/api/users", userRoutes);

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});