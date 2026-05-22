import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function LobCard({ description, icon: Icon, index = 0, slug, title }) {
  return (
    <Link
      className="animate-fade-up shimmer-card"
      data-lob={slug}
      style={{
        '--delay': `${index * 60}ms`,
        minHeight: '170px',
        padding: '24px',
        background: 'rgba(13,31,60,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        color: 'inherit',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
      }}
      to={`/upload`}
      onMouseEnter={(event) => {
        const icon = event.currentTarget.querySelector('[data-icon-box]')
        const arrow = event.currentTarget.querySelector('[data-arrow]')
        event.currentTarget.style.transform = 'translateY(-3px)'
        event.currentTarget.style.borderColor = 'rgba(59,130,246,0.55)'
        event.currentTarget.style.background = '#112347'
        event.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,130,246,0.15)'
        icon.style.background = '#3B82F6'
        icon.style.color = 'white'
        icon.style.boxShadow = '0 0 20px rgba(59,130,246,0.35)'
        arrow.style.opacity = '1'
        arrow.style.transform = 'translateX(0)'
      }}
      onMouseLeave={(event) => {
        const icon = event.currentTarget.querySelector('[data-icon-box]')
        const arrow = event.currentTarget.querySelector('[data-arrow]')
        event.currentTarget.style.transform = 'translateY(0)'
        event.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        event.currentTarget.style.background = 'rgba(13,31,60,0.9)'
        event.currentTarget.style.boxShadow = 'none'
        icon.style.background = 'rgba(59,130,246,0.12)'
        icon.style.color = '#60A5FA'
        icon.style.boxShadow = 'none'
        arrow.style.opacity = '0'
        arrow.style.transform = 'translateX(-6px)'
      }}
    >
      <ArrowRight
        color="#60A5FA"
        data-arrow
        size={15}
        style={{
          opacity: 0,
          position: 'absolute',
          right: '24px',
          top: '24px',
          transform: 'translateX(-6px)',
          transition: 'all 0.2s ease',
        }}
      />
      <div
        data-icon-box
        style={{
          alignItems: 'center',
          background: 'rgba(59,130,246,0.12)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '10px',
          color: '#60A5FA',
          display: 'flex',
          height: '44px',
          justifyContent: 'center',
          marginBottom: '18px',
          transition: 'all 0.22s ease',
          width: '44px',
        }}
      >
        <Icon size={22} />
      </div>
      <h3 style={{ color: '#F1F5F9', fontSize: '16px', fontWeight: 700, lineHeight: 1.4, marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.55 }}>
        {description}
      </p>
    </Link>
  )
}

export default LobCard
