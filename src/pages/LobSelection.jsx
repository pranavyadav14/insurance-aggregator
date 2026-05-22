import { useEffect, useState } from 'react'
import { Building2, Car, HeartPulse, Home, Plane, ShieldPlus } from 'lucide-react'
import LobCard from '../components/LobCard'

const wrapper = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 32px',
}

const lobs = [
  { description: 'Compare premiums, deductibles, and driver-friendly coverage in minutes.', icon: Car, slug: 'auto', title: 'Auto Insurance' },
  { description: 'Protect your home, valuables, and liability with smarter policy options.', icon: Home, slug: 'home', title: 'Home Insurance' },
  { description: 'Find flexible protection for the people who count on you most.', icon: HeartPulse, slug: 'life', title: 'Life Insurance' },
  { description: 'Review health plans with clearer benefits and less fine-print friction.', icon: ShieldPlus, slug: 'health', title: 'Health Insurance' },
  { description: 'Get business coverage tuned for teams, property, and everyday risk.', icon: Building2, slug: 'business', title: 'Business Insurance' },
  { description: 'Travel with confidence using coverage for trips, delays, and emergencies.', icon: Plane, slug: 'travel', title: 'Travel Insurance' },
]

const stats = [
  { label: 'Customers', prefix: '', suffix: '+', target: 10000 },
  { label: 'Insurers', prefix: '', suffix: '+', target: 50 },
  { label: 'Average savings', prefix: '', suffix: '%', target: 40 },
]

function CountUpStat({ label, prefix, suffix, target }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <p style={{ color: '#F1F5F9', fontSize: '40px', fontWeight: 800, lineHeight: 1 }}>
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </p>
      <p
        style={{
          color: '#475569',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '2.5px',
          lineHeight: 1.6,
          marginTop: '10px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
    </div>
  )
}

function LobSelection() {
  return (
    <>
      <section style={{ padding: '58px 0 44px', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-200px',
            left: '50%',
            width: '600px',
            height: '600px',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div className="animate-fade-up" style={{ ...wrapper, position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid rgba(59,130,246,0.35)',
              background: 'rgba(59,130,246,0.08)',
              color: '#60A5FA',
              fontSize: '11px',
              fontWeight: 700,
              lineHeight: 1.6,
              padding: '4px 14px',
              borderRadius: '999px',
              marginBottom: '16px',
            }}
          >
            ✦ Trusted by 10,000+ customers
          </div>
          <h1 style={{ color: '#F1F5F9', fontSize: '50px', fontWeight: 800, lineHeight: 1.15, marginBottom: '14px' }}>
            Compare insurance.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Save more.
            </span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 22px' }}>
            Upload your policy, compare trusted insurers, and choose smarter coverage without the usual paperwork drag.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <a
              href="#coverage-options"
              style={{
                alignItems: 'center',
                background: '#3B82F6',
                border: '1px solid transparent',
                borderRadius: '8px',
                color: 'white',
                display: 'flex',
                fontSize: '13px',
                fontWeight: 700,
                height: '40px',
                padding: '0 20px',
                textDecoration: 'none',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = '0 0 24px rgba(59,130,246,0.45)'
                event.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = 'none'
                event.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get Started Free
            </a>
            <a
              href="#stats"
              style={{
                alignItems: 'center',
                background: 'rgba(13,31,60,0.55)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#F1F5F9',
                display: 'flex',
                fontSize: '13px',
                fontWeight: 600,
                height: '40px',
                padding: '0 20px',
                textDecoration: 'none',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
                event.currentTarget.style.background = 'rgba(59,130,246,0.08)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                event.currentTarget.style.background = 'rgba(13,31,60,0.55)'
              }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section id="coverage-options" style={{ padding: '24px 0 48px' }}>
        <div style={wrapper}>
          <h2 style={{ color: '#F1F5F9', fontSize: '28px', fontWeight: 800, lineHeight: 1.4, marginBottom: '24px', textAlign: 'center' }}>
            Choose your coverage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '15px', width: '100%' }}>
            {lobs.map((lob, index) => (
              <LobCard key={lob.slug} index={index} {...lob} />
            ))}
          </div>
        </div>
      </section>

      <section id="stats" style={{ padding: '24px 0 64px' }}>
        <div style={wrapper}>
          <div
            className="animate-fade-up"
            style={{
              display: 'flex',
              background: 'rgba(13,31,60,0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px 48px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.2)',
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  borderRight: index === stats.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <CountUpStat {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LobSelection
