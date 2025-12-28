const bcrypt = require("bcrypt");
const db = require("../db/connection");

exports.signup = async (req, res) => {
    console.log("Signup request received:", req.body);
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword)
    return res.status(400).json({ message: "All fields are required" });

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match" });

  const [existingUser] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
  if (existingUser.length)
    return res.status(409).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, hashedPassword]
  );

  res.json({ message: "Account created successfully" });
};

exports.login = async (req, res) => {
      console.log("Login request received:", req.body);
  const { email, password } = req.body;

  const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  if (!user.length)
    return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    message: "Login successful",
    user: {
      id: user[0].id,
      firstName: user[0].first_name,
      email: user[0].email
    }
  });
};
