import { Link, useLocation } from 'react-router-dom'

function formatLabel(segment) {
  return segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const items = [
    { label: 'Home', path: '/' },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      path: `/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        position: 'fixed',
        top: '16px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 14px',
        borderRadius: '12px',
        background: 'rgba(13,31,60,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
      }}
    >
      {items.map((item, index) => {
        const isActive = index === items.length - 1

        return (
          <span key={item.path} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && (
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
                ›
              </span>
            )}
            {isActive ? (
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#3B82F6',
                }}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = '#CBD5E1'
                }}
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
