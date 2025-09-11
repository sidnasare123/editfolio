export default function handler(req, res) {
  const { username, password } = req.body;

  if (process.env.USERNAME === username && process.env.PASSWORD === password)
    return res.status(200).json({ message: "Authentication Successful" });
  return res.status(401).json({ message: "Invalid credentials" });
}
