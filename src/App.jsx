import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Breadcrumb from './components/Breadcrumb'
import ScrollToTop from './components/ScrollToTop'
import DocumentUpload from './pages/DocumentUpload'
import LobSelection from './pages/LobSelection'
import QuoteResults from './pages/QuoteResults'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <main className="page-shell" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<LobSelection />} />
        <Route path="/upload" element={<DocumentUpload />} />
        <Route path="/quotes" element={<QuoteResults />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Breadcrumb />
      <div className="relative min-h-screen overflow-hidden bg-[#0A1628] text-white">
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" aria-hidden="true" />
        
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
