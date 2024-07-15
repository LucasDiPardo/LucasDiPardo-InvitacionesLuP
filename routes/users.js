// routes/users.js
const express = require("express");
const router = express.Router();

// Middleware function for logging
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// Dummy data for users
const users = [{ name: "Kyle" }, { name: "Sally" }];

// Route to render the user creation form
router.get("/new", (req, res) => {
  res.render("users/new");
});

// Route to handle form submission
router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    // Logic for valid submission (not implemented)
    res.redirect(`/users/${users.length - 1}`);
  } else {
    // Logic for invalid submission
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// Route parameters for user ID
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

// Middleware function to handle user ID parameter
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

// Apply logger middleware to all routes
router.use(logger);

module.exports = router;
