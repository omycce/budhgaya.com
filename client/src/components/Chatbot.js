import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  // Client-side posts to server /api/chat which proxies to OpenAI. This keeps the API key secret.

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await resp.json();
      if (resp.ok) setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
      else setMessages(prev => [...prev, { sender: 'bot', text: data.error || 'Sorry, something went wrong.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I could not process your request right now.' }]);
    }

    setInput('');
  };

  return (
    <div>
      <button
        aria-label="Help"
        className={styles.helpButton}
        onClick={() => setOpen(o => !o)}
      >
        ?
      </button>

      {open && (
        <div className={styles.chatbot} role="dialog" aria-label="Site chat">
          <div className={styles.chatHeader}>
            <strong>Help</strong>
            <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className={styles.chatWindow} ref={scrollRef}>
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
                {message.text}
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about travel, temples, or directions..."
              className={styles.input}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSend(); } }}
            />
            <button onClick={handleSend} className={styles.sendButton}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;