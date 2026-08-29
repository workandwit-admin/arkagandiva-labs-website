import { Mail } from 'lucide-react'

export default function LunomiSupport() {
  return (
    <section className="section page-top">
      <div className="container content-page">
        <div className="product-badge">🌙 Lunomi</div>
        <h1>Lunomi Support</h1>
        <p className="lead">Help for parents using Lunomi.</p>

        <div className="faq">
          <details open>
            <summary>How do I create a story?</summary>
            <p>Open Create, choose a hero, world, adventure type, optional idea, and story length, then tap Create My Story.</p>
          </details>
          <details>
            <summary>How do I save a story?</summary>
            <p>Finish reading the generated story, then choose Save to My Stories. Saved stories can be reopened without generating them again.</p>
          </details>
          <details>
            <summary>How do I reset my password?</summary>
            <p>Use Forgot Password on the sign-in screen and follow the recovery link sent to the parent email address.</p>
          </details>
          <details>
            <summary>How do I delete my account?</summary>
            <p>Open Settings, complete the Parent Gate, then choose Delete Account. Account deletion permanently removes the account, child profile, and saved stories.</p>
          </details>
          <details>
            <summary>Does Lunomi show ads?</summary>
            <p>No. Lunomi does not include advertising or behavioral tracking.</p>
          </details>
        </div>

        <div className="support-card secondary">
          <div>
            <h3>Still need help?</h3>
            <p>Contact Lunomi support and include a short description of the issue.</p>
          </div>
          <a className="button" href="mailto:contact@arkagandivalabs.com?subject=Lunomi%20Support">
            <Mail size={18}/> Email Support
          </a>
        </div>
      </div>
    </section>
  )
}
