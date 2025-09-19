import React, { useEffect, useState } from 'react';
import styles from './Community.module.css';

function Avatar({ name }) {
  const initials = (name || 'A').split(' ').slice(0,2).map(n => n[0]).join('').toUpperCase();
  return <div className={styles.avatar}>{initials}</div>;
}

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [contactSent, setContactSent] = useState(false);

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

  function toggleLike(id) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, _liked: !p._liked, _likes: (p._likes||0) + (p._liked ? -1 : 1) } : p));
  }

  return (
    <section className={styles.wrapper} id="community">
      <div className={styles.headerRow}>
        <h2>Community</h2>
        <p className={styles.lead}>Ask questions, share tips, and connect with other travellers.</p>
      </div>

      <form className={styles.composer} onSubmit={submit}>
        <div className={styles.composerRow}>
          <input
            className={styles.input}
            placeholder="Your name (optional)"
            value={name}
            onChange={e => setName(e.target.value)}
            aria-label="Your name"
          />
          <button className={styles.button} type="submit">Post</button>
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Share a question, tip or story..."
          value={text}
          onChange={e => setText(e.target.value)}
          aria-label="Post content"
        />
      </form>

      <ul className={styles.list}>
        {posts.map(p => (
          <li key={p.id} className={styles.post}>
            <div className={styles.postInner}>
              <Avatar name={p.author} />
              <div className={styles.postBody}>
                <div className={styles.meta}>
                  <strong className={styles.author}>{p.author}</strong>
                  <span className={styles.time}>{new Date(p.createdAt).toLocaleString()}</span>
                </div>
                <div className={styles.content}>{p.text}</div>
                <div className={styles.actions}>
                  <button className={`${styles.iconBtn} ${p._liked ? styles.liked : ''}`} onClick={() => toggleLike(p.id)} aria-label="Like">
                    ♥ {p._likes || 0}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* contact-owner section removed per user request */}
    </section>
  );
}
