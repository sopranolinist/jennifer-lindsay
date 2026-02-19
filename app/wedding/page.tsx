'use client';

import { useEffect, useMemo, useState } from 'react';

const PASSWORD = 'benandjen2024'; // TODO: change later

export default function Wedding() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [error, setError] = useState<string | null>(null);

  const storageKey = useMemo(() => 'weddingAuth', []);

  useEffect(() => {
    try {
      const ok = sessionStorage.getItem(storageKey) === 'true';
      setAuthed(ok);
    } catch {
      setAuthed(false);
    } finally {
      setReady(true);
    }
  }, [storageKey]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (pw === PASSWORD) {
      setAuthed(true);
      try { sessionStorage.setItem(storageKey, 'true'); } catch {}
    } else {
      setError('Incorrect password.');
    }
  }

  function onLogout() {
    setAuthed(false);
    setPw('');
    setError(null);
    try { sessionStorage.removeItem(storageKey); } catch {}
  }

  if (!ready) return null;

  if (!authed) {
    return (
      <div className="container">
        <h1>Wedding</h1>
        <p>This page is password protected.</p>

        <form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
          <label style={{ display: 'block', marginBottom: 10 }}>
            Password
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 8,
                padding: '10px 12px',
                fontSize: 16,
                borderRadius: 8,
                border: '1px solid #bbb',
                background: '#fff'
              }}
              autoFocus
            />
          </label>

          {error && (
            <div style={{ color: '#b00020', marginBottom: 12 }}>{error}</div>
          )}

          <button
            type="submit"
            style={{
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #aaa',
              background: '#fff',
              cursor: 'pointer'
            }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
        <h1 style={{ marginBottom: 0 }}>Wedding</h1>
        <button
          onClick={onLogout}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #aaa',
            background: '#fff',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 14
          }}
        >
          Log out
        </button>
      </div>

      <p>
        <strong>RSVP</strong>:{' '}
        <a href="https://forms.gle/Ui3M59s6ddvBRGhK9" target="_blank" rel="noreferrer">
          here
        </a>
      </p>

      <img src="/images/Ben_Jen_Wedding_Save_The_Date.png" alt="Wedding invite" style={{ width: '95%' }} />

      <p>
        Benjamin Alexander Mis and Jennifer Milicent Lindsay are pleased to announce their impending nuptials on October 19th, 2024, at 2pm.
        The wedding will be a private ceremony at the Old Orange County Courthouse in Santa Ana, followed by a reception at Maggiano&apos;s Little Italy from 3:30pm–6:30pm.
      </p>

      <p>
        You may visit our wedding registry{' '}
        <a href="https://withjoy.com/jennifer-and-benjamin-oct-24/registry" target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>

      <p>
        Maggiano&apos;s Little Italy —{' '}
        <a
          href="https://www.google.com/maps/place/Maggiano's+Little+Italy/@33.6911771,-117.8900237,17z/"
          target="_blank"
          rel="noreferrer"
        >
          3333 Bristol St, Costa Mesa, CA 92626
        </a>
      </p>

      <iframe
        width="300"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=33.6936833,-117.8896687&z=14&output=embed"
      />
    </div>
  );
}
