import React, { useEffect, useState } from 'react';
import styles from './Community.module.css';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/community')
      .then(r => r.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  function submit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const payload = { author: name || 'Anonymous', text: text.trim() };
    fetch('/api/community', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(r => r.json())
      .then(newPost => {
        setPosts([newPost, ...posts]);
        setText('');
      })
      .catch(console.error);
  }

  return (
    <section className={styles.wrapper} id="community">
      <h2>Community</h2>
      <p className={styles.lead}>Ask questions, share tips, and connect with other travellers.</p>

      <form className={styles.composer} onSubmit={submit}>
        <input
          className={styles.input}
          placeholder="Your name (optional)"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="Share a question, tip or story..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className={styles.row}>
          <button className={styles.button} type="submit">Post</button>
        </div>
      </form>

      <ul className={styles.list}>
        {posts.map(p => (
          <li key={p.id} className={styles.post}>
            <div className={styles.meta}>
              <strong>{p.author}</strong>
              <span className={styles.time}>{new Date(p.createdAt).toLocaleString()}</span>
            </div>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.contact}>
        <h3>Contact the owner</h3>
        <p>If you need direct help, send a message and the site owner (omycce@gmail.com) will contact you.</p>
        <form onSubmit={e => {
          e.preventDefault();
          const fd = new FormData(e.target);
          fetch('/api/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(fd)), headers: { 'Content-Type': 'application/json' } });
          e.target.reset();
          alert('Message sent — the owner will contact you at omycce@gmail.com');
        }}>
          <input name="name" placeholder="Your name" className={styles.input} />
          <input name="email" placeholder="Your email" className={styles.input} />
          <textarea name="message" placeholder="How can we help?" className={styles.textarea}></textarea>
          <div className={styles.row}><button className={styles.button} type="submit">Send</button></div>
        </form>
      </div>
    </section>
  );
}
