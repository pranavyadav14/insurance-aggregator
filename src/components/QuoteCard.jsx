import { ArrowRight, Check, Star } from 'lucide-react'

function QuoteCard({ bestValue, quote, index }) {
  const [company, initials, logoColor, price, rating, features] = quote

  return (
    <article
      className="animate-fade-up shimmer-card"
      style={{
        '--delay': `${index * 80}ms`,
        background: 'rgba(13,31,60,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(event) => {
        const button = event.currentTarget.querySelector('[data-select]')
        const arrow = event.currentTarget.querySelector('[data-button-arrow]')
        event.currentTarget.style.transform = 'translateY(-4px)'
        event.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
        event.currentTarget.style.boxShadow = '0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(59,130,246,0.2), 0 0 40px rgba(59,130,246,0.08)'
        button.style.background = '#3B82F6'
        button.style.color = 'white'
        button.style.boxShadow = '0 8px 20px rgba(59,130,246,0.35)'
        button.style.transform = 'translateY(-1px)'
        arrow.style.opacity = '1'
        arrow.style.transform = 'translateX(0)'
      }}
      onMouseLeave={(event) => {
        const button = event.currentTarget.querySelector('[data-select]')
        const arrow = event.currentTarget.querySelector('[data-button-arrow]')
        event.currentTarget.style.transform = 'translateY(0)'
        event.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        event.currentTarget.style.boxShadow = 'none'
        button.style.background = 'rgba(59,130,246,0.15)'
        button.style.color = '#60A5FA'
        button.style.boxShadow = 'none'
        button.style.transform = 'translateY(0)'
        arrow.style.opacity = '0'
        arrow.style.transform = 'translateX(-4px)'
      }}
    >
      {bestValue && (
        <span
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'linear-gradient(135deg, #059669, #10B981)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.8px',
            padding: '5px 9px',
            boxShadow: '0 4px 12px rgba(16,185,129,0.3)',
            textTransform: 'uppercase',
          }}
        >
          Best Value
        </span>
      )}

      <div style={{ alignItems: 'center', display: 'flex', gap: '14px', marginBottom: '22px', paddingRight: '92px' }}>
        <div
          style={{
            alignItems: 'center',
            background: logoColor,
            borderRadius: '50%',
            boxShadow: `0 0 0 3px ${logoColor}40`,
            color: 'white',
            display: 'flex',
            fontSize: '13px',
            fontWeight: 900,
            height: '48px',
            justifyContent: 'center',
            width: '48px',
          }}
        >
          {initials}
        </div>
        <div>
          <h3 style={{ color: '#F1F5F9', fontSize: '18px', fontWeight: 700, lineHeight: 1.4 }}>
            {company}
          </h3>
          <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star
                key={`${company}-${starIndex}`}
                color={starIndex < Math.floor(rating) ? '#F59E0B' : '#334155'}
                fill={starIndex < Math.floor(rating) ? '#F59E0B' : 'transparent'}
                size={13}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', marginBottom: '5px', textTransform: 'uppercase' }}>
            Monthly premium
          </p>
          <div style={{ alignItems: 'baseline', display: 'flex', gap: '4px' }}>
            <span style={{ color: '#F1F5F9', fontSize: '38px', fontWeight: 900, lineHeight: 1 }}>${price}</span>
            <span style={{ color: '#64748B', fontSize: '14px', fontWeight: 500 }}>/mo</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', marginBottom: '5px', textTransform: 'uppercase' }}>
            Coverage
          </p>
          <p style={{ color: '#F1F5F9', fontSize: '14px', fontWeight: 700 }}>$100,000</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '20px 0 16px' }} />

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
        {features.map((feature) => (
          <li key={feature} style={{ alignItems: 'center', color: '#94A3B8', display: 'flex', fontSize: '13px', gap: '10px', lineHeight: 1.6 }}>
            <Check color="#3B82F6" size={14} />
            {feature}
          </li>
        ))}
      </ul>

      <button
        data-select
        style={{
          alignItems: 'center',
          background: 'rgba(59,130,246,0.15)',
          border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: '10px',
          color: '#60A5FA',
          cursor: 'pointer',
          display: 'flex',
          fontSize: '14px',
          fontWeight: 600,
          height: '44px',
          justifyContent: 'center',
          marginTop: '20px',
          transition: 'all 0.22s ease',
          width: '100%',
        }}
        type="button"
      >
        Select Plan
        <ArrowRight
          data-button-arrow
          size={14}
          style={{ marginLeft: '6px', opacity: 0, transform: 'translateX(-4px)', transition: 'all 0.2s ease' }}
        />
      </button>
    </article>
  )
}

export default QuoteCard
