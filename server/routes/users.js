var express = require("express");
var router = express.Router();
var userModel = require("../db/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

router.post("/logout", function (req, res, next) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
    });
    let loggedOut = true;
    res.json({ loggedOut, message: "User logged out!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during logout", error: error.message });
  }
});

router.post("/login", async function (req, res) {
  try {
    let { username, password } = req.body;

    // Find user
    let user = await userModel.findOne({ username });
    if (!user) {
      return res.json({ logged: false, message: "User not found" });
    }

    // Compare password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error("Error during password comparison:", err);
        return res
          .status(500)
          .json({ logged: false, message: "Internal Server Error" });
      }

      if (result) {
        // Set cookie
        let token = jwt.sign({ username }, "shaiq-auth");
        res.cookie("token", token, {
          httpOnly: true,
        });

        return res.json({ logged: true, message: "User logged in!" });
      } else {
        return res.json({ logged: false, message: "Login failed!" });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
});

router.post("/admin-login", async function (req, res) {
  try {
    let { password } = req.body;

    if (password === "chin tapak dum dum") {
      res.json({ logged: true, message: "Admin logged in!" });
    } else res.json({ logged: false, message: "Admin login failed!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during admin login", error: error.message });
  }
});

router.post("/register", async function (req, res, next) {
  try {
    let { name, password, username, email } = req.body;
    let user = await userModel.findOne({ username });
    let registered = false;
    if (user) {
      return res.json({ registered, message: "User already registered" });
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error generating salt", error: err.message });
      }
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error hashing password", error: err.message });
        }
        let user = await userModel.create({
          name,
          email,
          password: hash,
          username,
        });

        let token = jwt.sign({ username }, "shaiq-auth");
        res.cookie("token", token, {
          httpOnly: true,
        });
        registered = true;
        res.json({ registered, user, message: "User registered successfully" });
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during registration", error: error.message });
  }
});

router.get("/authenticate", async (req, res) => {
  try {
    let isAuthenticated = false;
    if (req.cookies.token) {
      isAuthenticated = true;
      res.json({ isAuthenticated, message: "User authenticated" });
    } else {
      res.json({ isAuthenticated, message: "User not authenticated" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during authentication", error: error.message });
  }
});

router.get("/get-users", async (req, res) => {
  try {
    const users = await userModel.find(); // Fetch all users

    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    res.status(200).json(users); // Respond with the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ msg: "Failed to fetch users", error: error.message });
  }
});

module.exports = router;
