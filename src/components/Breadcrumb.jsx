import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, ShieldCheck } from 'lucide-react'

function formatLabel(segment) {
  return segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      path: `/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(6,14,30,0.78)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px) saturate(160%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
       <Link
  to="/"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#F1F5F9',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 700,
  }}
>
 <img
  src="/logo.png"
  alt="CoverSmart Logo"
  style={{
    width: '135px',
    height: '104px',
    objectFit: 'contain',
    borderRadius: '10px',
    filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.28))',
  }}
/>

</Link>
{/* 
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {crumbs.map((item, index) => {
            const isActive = index === crumbs.length - 1

            return (
              <span key={item.path} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {index > 0 && <ChevronRight color="rgba(255,255,255,0.32)" size={14} />}
                {isActive ? (
                  <span style={{ color: '#3B82F6', fontSize: '13px', fontWeight: 700 }}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      color: '#CBD5E1',
                      fontSize: '13px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = '#F1F5F9'
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
        </nav> */}
      </div>
    </header>
  )
}

export default Breadcrumb
