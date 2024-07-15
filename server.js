// server.js
const express = require("express");
const app = express();

// Middleware and configuration
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// Define routes
const userRouter = require("./routes/users");
app.use("/users", userRouter);




// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
