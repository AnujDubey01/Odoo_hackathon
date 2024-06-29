const User = require("../Model/user");
const { createToken } = require("../services/authentication");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email or password not provided" });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      // Check password
      if ((password = user.password)) {
        res.status(200).json({
          msg: "Login successful",
          token,
          user: {
            id: user._id,
            email: user.email,
          },
        });
      } else {
        res.status(400).json({ msg: "invalid password" });
      }
    } else {
      // Create new user

      user = await User.create({
        email,
        password,
      });
    }

    // Create token
    const token = createToken(user);

    // Send response
    return res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports = { login };
