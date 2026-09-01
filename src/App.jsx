import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Lunomi from './pages/lunomi/Lunomi'
import LunomiSupport from './pages/lunomi/Support'
import LunomiPrivacy from './pages/lunomi/Privacy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/lunomi" element={<Lunomi />} />
        <Route path="/lunomi/support" element={<LunomiSupport />} />
        <Route path="/lunomi/privacy" element={<LunomiPrivacy />} />
      </Routes>
    </Layout>
  )
}
