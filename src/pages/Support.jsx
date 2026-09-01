import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'

export default function Support() {
  return (
    <section className="section page-top support-page">
      <div className="container content-page">
        <div className="eyebrow">Support</div>

        <h1>How can we help?</h1>

        <p className="lead">
          Get help with our products or contact Arka Gandiva Labs for general inquiries.
        </p>

        <div className="support-card">
          <div>
            <span className="product-badge">🌙 Lunomi</span>

            <h3>Lunomi Support</h3>

            <p>
              Get help with your account, story creation, saved stories, privacy,
              and other Lunomi questions.
            </p>
          </div>

          <Link className="button" to="/lunomi/support">
            Open Lunomi Support <ArrowRight size={18} />
          </Link>
        </div>

        <div className="support-card secondary">
          <div>
            <h3>General company support</h3>

            <p>
              For business, partnership, product, or other general inquiries.
            </p>
          </div>

          <a
            className="button button-ghost"
            href="mailto:contact@arkagandivalabs.com"
          >
            <Mail size={18} />
            contact@arkagandivalabs.com
          </a>
        </div>
      </div>
    </section>
  )
}
