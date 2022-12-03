const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Registration route

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      return res.json({
        status: "bad",
        msg: "Please, full in all inputs",
      });
    }
    console.log(username, username.length);
    if (username.length < 4) {
      return res.json({
        status: "bad",
        msg: "Username is needed less than 4 characters",
      });
    }
    if (username.length > 20) {
      return res.json({
        status: "bad",
        msg: "Username is needed no more than 20 characters",
      });
    }
    if (password.length < 5) {
      return res.json({
        status: "bad",
        msg: "Password is needed less than 5 characters",
      });
    }

    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.json({
        status: "bad",
        msg: "This user is already exist, please registrate with another one",
      });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await new User({
      username,
      password: hashedPass,
    });
    const savedUser = await newUser.save();
    const token = await jwt.sign({ user: savedUser }, "secretToken");
    res.json({
      status: "ok",
      msg: "You succesfully sign up",
      user: savedUser,
      token,
    });
  } catch (error) {
    res.json({
      status: "bad",
      msg: error,
    });
  }
});

//Login route

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      return res.json({
        status: "bad",
        msg: "Please, full in all inputs",
      });
    }

    const existUser = await User.findOne({ username });
    if (!existUser) {
      return res.json({
        status: "bad",
        msg: "This user is not finded",
      });
    }

    const token = await jwt.sign({ user: existUser }, "secretToken");
    const comparedPass = await bcrypt.compare(password, existUser.password);

    if (!comparedPass) {
      return res.json({
        status: "bad",
        msg: "Password is incorrect",
      });
    }

    res.json({
      status: "ok",
      msg: "You succesfully sign in",
      user: existUser,
      token,
    });
  } catch (error) {
    res.json({
      status: "bad",
      msg: error,
    });
  }
});

module.exports = router;
