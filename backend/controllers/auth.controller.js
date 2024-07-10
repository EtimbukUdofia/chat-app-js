import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const login = (req, res) => {
  console.log("Login user");
  res.send("login user");
}

export const logout = (req, res) => {
  console.log("Logout user");
  res.send("logout user");
}

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password:hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic
    })

    if (newUser) {
      const result = await newUser.save();
      res.status(201).json(result);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("Error in signup controller:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}