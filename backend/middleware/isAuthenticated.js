import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  // event.preventDefault();
  try {
    // Check if token is present in cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach user ID to the request object for future use
    req.id = decoded.userId;
    next();

  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Authentication failed", error: error.message });
  }
};

export default isAuthenticated;
