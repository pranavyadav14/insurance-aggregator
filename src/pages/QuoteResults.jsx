import { useMemo, useState } from 'react'
import QuoteCard from '../components/QuoteCard'

const wrapper = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 32px',
}

const quotes = [
  ['Progressive', 'PR', '#0EA5E9', 89, 4.8, ['Snapshot savings included', 'Accident forgiveness option', '24/7 claims support']],
  ['Geico', 'GE', '#10B981', 102, 4.7, ['Fast digital ID cards', 'Multi-policy discount', 'Roadside assistance option']],
  ['State Farm', 'SF', '#EF4444', 116, 4.9, ['Local agent network', 'Safe driver rewards', 'Bundled coverage perks']],
  ['Allstate', 'AL', '#6366F1', 124, 4.6, ['Claim satisfaction guarantee', 'Deductible rewards', 'New customer savings']],
  ['Liberty Mutual', 'LM', '#F59E0B', 132, 4.5, ['Customizable coverage', 'Replacement benefits', 'Paperless discount']],
  ['Farmers', 'FA', '#65A30D', 139, 4.4, ['Enhanced liability options', 'Flexible deductible choices', 'Claims concierge support']],
]

const filters = ['All', 'Best Value', 'Highest Rated']

function QuoteResults() {
  const [filter, setFilter] = useState('All')
  const selectedLob = sessionStorage.getItem('selectedLob') ?? 'Auto Insurance'
  const cheapestPrice = Math.min(...quotes.map((quote) => quote[3]))

  const visibleQuotes = useMemo(() => {
    const sortedQuotes = [...quotes].sort((a, b) => a[3] - b[3])

    if (filter === 'Best Value') return sortedQuotes.filter((quote) => quote[3] === cheapestPrice)
    if (filter === 'Highest Rated') return sortedQuotes.sort((a, b) => b[4] - a[4])

    return sortedQuotes
  }, [cheapestPrice, filter])

  return (
    <>
      <header className="animate-fade-up" style={{ ...wrapper, paddingTop: '40px', paddingBottom: '20px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(59,130,246,0.35)',
            background: 'rgba(59,130,246,0.08)',
            color: '#60A5FA',
            fontSize: '10px',
            fontWeight: 700,
            lineHeight: 1.6,
            padding: '4px 14px',
            borderRadius: '999px',
            marginBottom: '12px',
            textTransform: 'uppercase',
          }}
        >
          Quotes for {selectedLob}
        </div>
        <h1 style={{ color: '#F1F5F9', fontSize: '28px', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
          We found 6 quotes for you
        </h1>
        <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
          Compare personalized offers from leading insurers and select the best fit.
        </p>
        {/* <div
          style={{
            alignItems: 'center',
            background: 'rgba(16,185,129,0.07)',
            border: '1px solid rgba(16,185,129,0.2)',
            borderLeft: '3px solid #10B981',
            borderRadius: '12px',
            color: '#10B981',
            display: 'flex',
            fontSize: '13px',
            fontWeight: 600,
            height: '44px',
            padding: '0 16px',
            width: '100%',
          }}
        >
          ⚡ Switching to Progressive could save you $43/month.
        </div> */}
      </header>

      <section style={{ ...wrapper, paddingBottom: '18px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {filters.map((filterName) => {
            const active = filter === filterName
            return (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                style={{
                  background: active ? '#3B82F6' : 'rgba(13,31,60,0.45)',
                  border: active ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px',
                  boxShadow: active ? '0 0 16px rgba(59,130,246,0.3)' : 'none',
                  color: active ? 'white' : '#64748B',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  height: '34px',
                  padding: '0 16px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  if (!active) event.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
                }}
                onMouseLeave={(event) => {
                  if (!active) event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
                type="button"
              >
                {filterName}
              </button>
            )
          })}
        </div>
      </section>

      <section style={{ ...wrapper, paddingBottom: '64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px', width: '100%' }}>
          {visibleQuotes.map((quote, index) => (
            <QuoteCard
              bestValue={quote[3] === cheapestPrice}
              index={index}
              key={quote[0]}
              quote={quote}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default QuoteResults
