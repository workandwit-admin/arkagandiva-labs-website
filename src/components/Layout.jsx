import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import arkaGandivaIcon from '../assets/branding/arka_gandiva_app_icon.png'

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '')

      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/">
            <img
              src={arkaGandivaIcon}
              alt="Arka Gandiva Labs"
              className="brand-logo"
            />
            <span>Arka Gandiva Labs</span>
          </Link>

          <nav className="nav" aria-label="Primary navigation">
            <NavLink to="/">Home</NavLink>
            <Link to="/#products">Products</Link>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/support">Support</NavLink>
          </nav>

          <a
            className="button button-small"
            href="mailto:contact@arkagandivalabs.com"
          >
            Contact <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <img
                src={arkaGandivaIcon}
                alt=""
                className="brand-logo"
              />
              <span>Arka Gandiva Labs LLC</span>
            </div>

            <p className="muted">
              Building thoughtful digital products.
            </p>
          </div>

          <div>
            <h4>Products</h4>
            <Link to="/lunomi">Lunomi</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
            <a href="mailto:contact@arkagandivalabs.com">
              Contact
            </a>
          </div>

          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy</Link>
            <Link to="/lunomi/privacy">
              Lunomi Privacy
            </Link>
          </div>
        </div>

        <div className="container footer-bottom">
          © 2026 Arka Gandiva Labs LLC. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
