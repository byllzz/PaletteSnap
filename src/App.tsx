import Home from './pages/Home'
import About from './pages/About'
import License from './pages/License'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ColorDetails from './pages/ColorDetails'
import ColorNotFound from './pages/ColorNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Faqs from './components/layout/Faqs'
import PlateDetails from './pages/PlateDetails'
import ScrollToTop from './components/layout/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/license" element={<License />} />
          <Route path="/ColorDetails" element={<ColorDetails />} />
          <Route path="/colorNotFound" element={<ColorNotFound />} />
          <Route path="/plateDetails" element={<PlateDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
