// chat.controller.js
export const chatHandler = (req, res) => {
  const { message } = req.body;
  // Simple echo bot logic (replace with AI logic later)
  const reply = `You said: ${message}`;
  res.json({ reply });
}; 

