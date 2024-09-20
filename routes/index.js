var express = require("express");
const passport = require("passport");
var router = express.Router();

const { requireAuth, checkUser } = require("../middleware/authmiddleware");

router.get("*", checkUser);

/* Getting Home page */
router.get("/", function (req, res, next) {
  res.render("home");
});

/* Dynamic Genre and Detail Routes */
const genres = [
  "history",
  "children",
  "engineering",
  "horror",
  "literacy",
  "mystery",
  "romance",
  "young",
  "fantasy",
  "biographies",
  "science",
  "nonfiction",
];

router.get("/genre/:genreName", function (req, res, next) {
  const genreName = req.params.genreName;

  if (genres.includes(genreName)) {
    res.render(`genre/${genreName}/${genreName}-index`, { genreName });
  } else {
    res.status(404).send("Genre not found");
  }
});

router.get("/:genreName-detail", function (req, res, next) {
  const genreName = req.params.genreName;

  console.log("Genre Name:", genreName);

  if (genres.includes(genreName)) {
    res.render(`genre/${genreName}/${genreName}-detail`, { genreName });
  } else {
    res.status(404).send("Detail page not found");
  }
});

/* Other routes */
router.get("/about", function (req, res) {
  res.render("aboutus");
});

router.get("/contact", function (req, res) {
  res.render("contactus");
});

router.get("/genre", function (req, res) {
  const genres = [
    { name: "romance" },
    { name: "biographies" },
    { name: "horror" },
    { name: "young" },
    { name: "literacy" },
    { name: "engineering" },
    { name: "children" },
    { name: "science" },
    { name: "mystery" },
    { name: "nonfiction" },
    { name: "fantasy" },
    { name: "history" },
  ];

  res.render("container", { genres });
});

/* GET profile page */
router.get("/profile", requireAuth, (req, res) => {
  res.render("profile");
});

module.exports = router;
