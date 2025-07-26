// frontend/src/app/page.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('...loading')

  useEffect(() => {
    fetch('https://hello-fern-backend-production.up.railway.app/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch message 😢'))
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🌱 Hello from Hello-Fern</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{message}</p>
    </main>
  )
}
