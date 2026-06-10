import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top" style={{ background: '#0a0a0a', borderBottom: '1px solid #1a1a1a' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/" style={{ color: '#a78bfa', letterSpacing: '-0.3px' }}>MyApp</NavLink>

        <button className="navbar-toggler border-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#mainNav"
          style={{ filter: 'invert(1)' }}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-1">
            {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink end={to === '/'} to={to}
                  className="nav-link px-3 py-2 rounded-2 small fw-medium"
                  style={({ isActive }) => ({
                    color: isActive ? '#a78bfa' : '#555',
                    background: isActive ? 'rgba(167,139,250,0.08)' : 'transparent',
                    transition: 'all 0.2s'
                  })}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar