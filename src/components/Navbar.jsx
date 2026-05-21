import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

function Navbar() {
  return (
    <header
      style={{
        top: 0,
        zIndex: 100,
        height: '56px',
        background: 'rgba(6,14,30,0.85)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          bottom: '-1px',
          left: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
        }}
      />
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
            transition: 'opacity 0.2s',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              background: '#3B82F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={16} />
          </span>
          CoverSmart
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            style={{
              background: 'transparent',
              color: '#F1F5F9',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              height: '32px',
              padding: '0 16px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              event.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = 'transparent'
              event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
            type="button"
          >
            Login
          </button>
          <Link
            to="/"
            style={{
              background: '#2563EB',
              color: 'white',
              borderRadius: '8px',
              height: '32px',
              padding: '0 16px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = '#3B82F6'
              event.currentTarget.style.filter = 'brightness(1.1)'
              event.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.4)'
              event.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = '#2563EB'
              event.currentTarget.style.filter = 'brightness(1)'
              event.currentTarget.style.boxShadow = 'none'
              event.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
