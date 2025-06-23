import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: 'bot', text: data.reply }]);
    } catch {
      setMessages((msgs) => [...msgs, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <div className={`chatbot-widget${open ? ' open' : ''}`}> 
      {open ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.from}`}>{msg.text}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-area" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot; 