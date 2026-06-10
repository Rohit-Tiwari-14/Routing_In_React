import React from 'react'

const Contact = () => {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center">
        <p className="mb-2 small fw-semibold" style={{ color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Say hello</p>
        <h1 className="fw-bold mb-3" style={{ color: '#fff', fontSize: '3.5rem', letterSpacing: '-1.5px', lineHeight: 1.1 }}>Contact</h1>
        <p style={{ color: '#444' }}>Reach out anytime.</p>
      </div>
    </div>
  )
}

export default Contact