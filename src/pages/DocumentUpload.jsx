import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, FileUp, Loader2, PhoneOff, ShieldCheck, Timer } from 'lucide-react'

const lobLabels = {
  auto: 'Auto Insurance',
  home: 'Home Insurance',
  life: 'Life Insurance',
  health: 'Health Insurance',
  business: 'Business Insurance',
  travel: 'Travel Insurance',
}

const steps = [
  ['1', 'Upload', 'Add your current policy document.'],
  ['2', 'Analyze', 'We review limits and savings signals.'],
  ['3', 'Compare', 'See personalized insurer matches.'],
]

const trustIndicators = [
  ['Secure & encrypted', ShieldCheck],
  ['No spam calls', PhoneOff],
  ['Takes less than 30 seconds', Timer],
]

function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const navigate = useNavigate()
  const { lob } = useParams()

  const lobName = useMemo(() => lobLabels[lob] ?? 'Insurance', [lob])
  const fileSize = selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : ''

  function handleFileChange(event) {
    setSelectedFile(event.target.files?.[0] ?? null)
  }

  function handleAnalyze() {
    if (isLoading) return
    setIsLoading(true)
    sessionStorage.setItem('selectedLob', lobName)
    window.setTimeout(() => navigate('/quotes'), 1500)
  }

  return (
    <>
      <main className="animate-fade-up" style={{ maxWidth: '920px', margin: '0 auto', padding: '40px 32px 28px', textAlign: 'center' }}>
        {/* <div style={{ color: '#475569', fontSize: '12px', lineHeight: 1.6, marginBottom: '14px' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>/</span>
          <span>{lobName}</span>
        </div> */}

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
            marginBottom: '12px',
          }}
        >
          Policy document analysis
        </div>
        <h1 style={{ color: '#F1F5F9', fontSize: '32px', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
          Upload your{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {lobName}
          </span>
        </h1>
        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          Upload your current policy and we will prepare comparable quotes for review.
        </p>

        <label
          className={`pulse-ring ${isDragging ? 'is-active' : ''}`}
          htmlFor="policy-upload"
          style={{
            alignItems: 'center',
            background: isDragging ? 'rgba(59,130,246,0.07)' : 'rgba(13,31,60,0.6)',
            border: `1.5px dashed ${isDragging ? 'rgba(59,130,246,0.7)' : 'rgba(59,130,246,0.3)'}`,
            borderRadius: '16px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '200px',
            padding: '28px',
            transition: 'all 0.22s ease',
            width: '100%',
          }}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDragOver={(event) => {
            event.preventDefault()
            setIsDragging(true)
          }}
          onDrop={(event) => {
            event.preventDefault()
            setIsDragging(false)
            setSelectedFile(event.dataTransfer.files?.[0] ?? null)
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.borderColor = 'rgba(59,130,246,0.7)'
            event.currentTarget.style.background = 'rgba(59,130,246,0.07)'
          }}
          onMouseLeave={(event) => {
            if (!isDragging) {
              event.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
              event.currentTarget.style.background = 'rgba(13,31,60,0.6)'
            }
          }}
        >
          <span
            style={{
              alignItems: 'center',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '50%',
              display: 'flex',
              height: '64px',
              justifyContent: 'center',
              marginBottom: '14px',
              width: '64px',
            }}
          >
            <FileUp size={28} color="#3B82F6" />
          </span>
          <span style={{ color: '#F1F5F9', fontSize: '14px', fontWeight: 700, lineHeight: 1.4, marginBottom: '6px' }}>
            Drop your policy PDF or <span style={{ color: '#3B82F6', textDecoration: 'underline' }}>Browse</span>
          </span>
          <span style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.6 }}>PDF files accepted</span>
          {selectedFile && (
            <span
              style={{
                alignItems: 'center',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: '999px',
                color: '#10B981',
                display: 'inline-flex',
                fontSize: '13px',
                fontWeight: 700,
                gap: '7px',
                lineHeight: 1.6,
                marginTop: '14px',
                padding: '8px 16px',
              }}
            >
              <CheckCircle2 size={15} />
              {selectedFile.name} ({fileSize})
            </span>
          )}
          <input
            accept="application/pdf,.pdf"
            id="policy-upload"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            type="file"
          />
        </label>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '6px',
          }}
        >
         
        </div>

        <button
          className={isLoading ? 'loading-shimmer' : ''}
          disabled={isLoading}
          onClick={handleAnalyze}
          style={{
            alignItems: 'center',
            background: isLoading
              ? 'linear-gradient(110deg, #2563EB 0%, #3B82F6 35%, #60A5FA 50%, #3B82F6 65%, #2563EB 100%)'
              : 'linear-gradient(135deg, #2563EB, #3B82F6)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: isLoading ? 'wait' : 'pointer',
            display: 'flex',
            fontSize: '14px',
            fontWeight: 700,
            gap: '8px',
            height: '48px',
            justifyContent: 'center',
            marginTop: '16px',
            transition: 'all 0.22s ease',
            width: '100%',
          }}
          onMouseEnter={(event) => {
            if (!isLoading) {
              event.currentTarget.style.boxShadow = '0 0 32px rgba(59,130,246,0.45)'
              event.currentTarget.style.transform = 'translateY(-1px)'
            }
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.boxShadow = 'none'
            event.currentTarget.style.transform = 'translateY(0)'
          }}
          type="button"
        >
          {isLoading && <Loader2 className="animate-spin" size={18} />}
          {isLoading ? 'Analyzing Policy...' : 'Analyze & Get Quotes'}
        </button>
      </main>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{ margin: '40px auto 0', maxWidth: '840px', textAlign: 'center' }}>
          <h2 style={{ color: '#F1F5F9', fontSize: '26px', fontWeight: 800, lineHeight: 1.4, marginBottom: '20px' }}>
            How it works
          </h2>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.55), transparent)',
                height: '1px',
                left: '18%',
                position: 'absolute',
                right: '18%',
                top: '20px',
              }}
            />
            {steps.map(([number, title, description]) => (
              <div key={title} className="animate-fade-up" style={{ maxWidth: '190px', position: 'relative', textAlign: 'center', zIndex: 1 }}>
                <div
                  style={{
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(59,130,246,0.35)',
                    color: 'white',
                    display: 'flex',
                    fontSize: '13px',
                    fontWeight: 800,
                    height: '40px',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    width: '40px',
                  }}
                >
                  {number}
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '13px', fontWeight: 700, lineHeight: 1.4, marginBottom: '4px' }}>
                  {title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.6 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DocumentUpload
