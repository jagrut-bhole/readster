var express = require('express');
const passport = require('passport');
var router = express.Router();
const userModel = require("./users");
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

// Code for Logout
router.get('/logout', function(req,res,next){
  req.logout(function(err){
    if (err) {return next (err);}
    res.redirect("/");
  });
});
// Code is for Isloggedin middleware
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// Code for creating user
router.post('/register',function(req,res){
  var userData = new userModel({
    username: req.body.username,
    email: req.body.email,
  })

   userModel.register(userData, req.body.password)
   .then(function (registereduser) {
    passport.authenticate("local")(req,res,function(){
      res.redirect('/home');
    })
   })
});

//Code for LogIn
router.post("/login", passport.authenticate("local",{
  successRedirect:"/home",
  failureRedirect:"/",
}), function (req,res){});

/* Getting Home page */
router.get('/', function (req, res, next) {
  res.render('home');
});
router.get('/home',isLoggedIn, function (req, res, next) {
  res.render('home-l');
});

router.get('/genre/history',  function (req, res, next) {
  res.render('genre/history/history-index');
});

router.get('/history-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/history/history-detail');
});

router.get('/genre/children',  function (req, res, next) {
  res.render('genre/children/children-index');
});

router.get('/children-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/children/children-detail');
});
router.get('/genre/engineering',  function (req, res, next) {
  res.render('genre/engineering/engineering-index');
});

router.get('/engineering-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/engineering/engineering-detail');
});
router.get('/genre/horror',  function (req, res, next) {
  res.render('genre/horror/horror-index');
});
router.get('/horror-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/horror/horror-detail');
});
router.get('/genre/literacy',  function (req, res, next) {
  res.render('genre/literacy/literacy-index');
});
router.get('/literacy-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/literacy/literacy-detail');
});
router.get('/genre/mystery',  function (req, res, next) {
  res.render('genre/mystery/mystery-index');
});
router.get('/mystery-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/mystery/mystery-detail');
});
router.get('/genre/romance', function (req, res, next) {
  res.render('genre/romance/romance-index');
});
router.get('/romance-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/romance/romance-detail');
});
router.get('/genre/young',  function (req, res, next) {
  res.render('genre/young/young-index');
});
router.get('/young-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/young/young-detail');
});

router.get('/genre/fantasy', function (req, res, next) {
  res.render('genre/fantasy/fantasy-index');
});

router.get('/fantasy-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/fantasy/fantasy-detail');
});
router.get('/genre/biographies', function (req, res, next) {
  res.render('genre/biographies/biographies-index');
});
router.get('/biographies-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/biographies/biographies-detail');
});

router.get('/genre/science', function (req, res, next) {
  res.render('genre/science/science-index');
});
router.get('/science-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/science/science-detail');
});

router.get('/genre/nonfiction', function (req, res, next) {
  res.render('genre/nonfiction/nonfiction-index');
});
router.get('/nonfiction-detail',isLoggedIn, function (req, res, next) {
  res.render('genre/nonfiction/nonfiction-detail');
});

router.get('/about', function (req, res) {
  res.render('aboutus')
});

router.get('/contact', function (req, res) {
  res.render('contactus')
});

router.get('/genre', function (req, res) {
  res.render('container')
});

router.get('/profile', isLoggedIn, async function (req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  console.log(user);
  res.render("profile", { user });
});

router.get('/login', function (req, res, next) {
  res.render('login',{error:req.flash('error')})
});
router.get('/register', function (req, res, next) {
  res.render('register')
});

module.exports = router;
