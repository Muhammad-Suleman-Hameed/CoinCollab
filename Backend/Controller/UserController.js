// const express = require('express')
// const server = express()
const userModel = require("../Model/UserSchema");
const USER = userModel.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await USER.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ message: 'Password is invalid. It must meet certain criteria.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await USER.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).json({ user: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const User = await USER.findOne({ email: email });
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }

    const comparePassword = bcrypt.compareSync(password, User.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "Password is invalid" });
    }

    const token = await jwt.sign(
      { email: email },
      "donttrytohackmyappdata"
    );

    return res.status(201).json({ user: User, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const User = await USER.findOne({ email: email });
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(201).json({ user: User });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

 //resetPasswordUser
exports.resetPasswordUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email
    const user = await USER.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ message: 'Password minimum length is 4 with one special character. It must meet certain criteria.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.status(400).json({ message: 'New password must be different from the old password' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

function isValidPassword(password) {
  // Minimum 4 characters with at least one special character
  const passwordRegex = /^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]{4,}$/;
  return passwordRegex.test(password);
}
