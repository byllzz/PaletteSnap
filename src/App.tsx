import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import License from './pages/License'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ColorDetails from './pages/ColorDetails'
import ColorNotFound from './pages/ColorNotFound'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Faqs from './components/layout/Faqs'
import PlateDetails from './pages/PlateDetails'
import ScrollToTop from './components/layout/ScrollToTop'

// Animated Loading Spinner
function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-2 border-white/20 rounded-full"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-16 h-16 border-t-2 border-[#E2FF46] rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40"
      >
        Loading Archive
      </motion.div>
    </motion.div>
  )
}

// Wrapper component to handle route changes
function AppRoutes() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/license" element={<License />} />
          <Route path="/ColorDetails" element={<ColorDetails />} />
          <Route path="/colorNotFound" element={<ColorNotFound />} />
          <Route path="/plateDetails" element={<PlateDetails />} />
        </Routes>
      </motion.div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
