import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AvatarCreator from './components/AvatarCreator'
import SuccessStories from './components/SuccessStories'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
        </>} />
        <Route path="/create" element={<>
          <AvatarCreator />
        </>} />
        <Route path="/stories" element={<>
          <SuccessStories />
        </>} />
        <Route path="/faq" element={<>
          <FAQ />
        </>} />
      </Routes>
      <Footer />
    </div>
  )
}
