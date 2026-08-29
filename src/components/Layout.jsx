import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-arc" />
              <span className="brand-arrow">➶</span>
            </span>
            <span>Arka Gandiva Labs</span>
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/support">Support</NavLink>
          </nav>
          <a className="button button-small" href="mailto:contact@arkagandivalabs.com">
            Contact <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark"><span className="brand-arc"/><span className="brand-arrow">➶</span></span>
              <span>Arka Gandiva Labs LLC</span>
            </div>
            <p className="muted">Building thoughtful digital products.</p>
          </div>
          <div>
            <h4>Products</h4>
            <Link to="/lunomi">Lunomi</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
            <a href="mailto:contact@arkagandivalabs.com">Contact</a>
          </div>
          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy</Link>
            <Link to="/lunomi/privacy">Lunomi Privacy</Link>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Arka Gandiva Labs LLC. All rights reserved.</div>
      </footer>
    </div>
  )
}
