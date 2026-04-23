const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Sample users API
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  res.json(users);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
