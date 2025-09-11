import jwt from "jsonwebtoken";

export default function handler(req, res) {
  // auth using token
  const TOKEN_KEY = "EDITFOLIO_JWT_TOKEN";
  const authHeader = req.headers.authorization;
  if (authHeader) {
    try {
      jwt.verify(authHeader, process.env.JWT_SECRET_KEY);
      return res.status(200).json({ message: "Authentication Successful" });
    } catch (_) {
      return res.status(401).json({ message: "Token Expired" });
    }
  }

  // generate token
  const { username, password } = req.body;
  if (process.env.USERNAME === username && process.env.PASSWORD === password) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    return res.status(200).json({ message: "Authentication Successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
}
