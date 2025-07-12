const User = require("../models/User.model");
const bcrypt = require('crypto')

const getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user1 = await User.findById(id);
    res.status(200).json(user1);
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const isexistingemail = await User.findOne({ email: req.body.email });
    if (!isexistingemail) {
      const user1 = await User.create(req.body); //Note: password encryption is not done for now
      res.status(200).json(user1);
    }
    res.status(400).json({ "message": "User with this email already exist!" });
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user1 = await User.findByIdAndUpdate(id, req.body);
    if (!user1) {
      res.status(404).json({ "message": "User not found" });
    }
    const userupdated = await User.findByID(id)
    res.status(200).json(userupdated);
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ "message": "User not found" });
    }
    res.status(200).json({"message":"User Deleted Successfully"})
  } catch (error) {
    res.status(500).json({ "message": error.message });
  }
};

module.exports={getAllUsers, getUser, createUser, updateUser, deleteUser};
