import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import styles from './Chatbot.module.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Add your OpenAI API key in .env
  });
  const openai = new OpenAIApi(configuration);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `You are a helpful assistant. Answer the following question: ${input}`,
        max_tokens: 150,
      });

      const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = { sender: 'bot', text: 'Sorry, I could not process your request.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput('');
  };

  return (
    <div className={styles.chatbot}>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;