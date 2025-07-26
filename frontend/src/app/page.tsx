'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('https://hello-fern-backend-production.up.railway.app/api/greet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })

      const data = await res.json()
      setResponse(data.message)
    } catch (err) {
      setResponse('Something went wrong 😢')
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🌱 Hello from Hello-Fern</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem' }}>
          Send
        </button>
      </form>

      <p style={{ fontSize: '1.2rem' }}>{response}</p>
    </main>
  )
}
