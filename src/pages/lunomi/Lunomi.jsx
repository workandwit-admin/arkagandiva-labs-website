import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenText, MoonStar, ShieldCheck, Sparkles } from 'lucide-react'

export default function Lunomi() {
  return (
    <>
      <section className="lunomi-hero">
        <div className="container lunomi-hero-grid">
          <div>
            <div className="product-badge"><MoonStar size={18}/> Lunomi</div>
            <h1>Tonight's story starts with you.</h1>
            <p className="lunomi-tagline">Dream it. Create it. Be the hero.</p>
            <p className="lead">
              Choose who to become, where to explore, and what happens next.
              Lunomi turns a child's ideas into personalized stories created especially for them.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/lunomi/support">Support <ArrowRight size={18}/></Link>
              <Link className="button button-ghost" to="/lunomi/privacy">Privacy</Link>
            </div>
          </div>
          <div className="lunomi-book">
            <div className="book-glow" />
            <div className="book-icon">📖</div>
            <div className="book-moon">☾</div>
            <div className="book-stars">✦ ✧</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">How it works</div>
            <h2>From imagination to adventure in a few taps.</h2>
          </div>
          <div className="steps-grid">
            <div><span>01</span><strong>Choose your hero</strong><p>Become a space explorer, pirate, wizard, superhero, or simply yourself.</p></div>
            <div><span>02</span><strong>Pick your world</strong><p>Travel to the Moon, explore magical kingdoms, sail pirate islands, and more.</p></div>
            <div><span>03</span><strong>Imagine the adventure</strong><p>Add your own idea or let Lunomi surprise you.</p></div>
            <div><span>04</span><strong>Become the hero</strong><p>Lunomi creates a personalized story tailored to the child's age and choices.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Story experience</div>
            <h2>Stories that grow with them.</h2>
          </div>
          <div className="feature-grid">
            <div><Sparkles/><strong>Age-adaptive language</strong><span>Story vocabulary and complexity adjust to the child's age.</span></div>
            <div><BookOpenText/><strong>Three story lengths</strong><span>Quick Story, Bedtime Story, and Big Adventure.</span></div>
            <div><MoonStar/><strong>Bedtime-friendly endings</strong><span>Adventures naturally settle into warm, comforting conclusions.</span></div>
            <div><ShieldCheck/><strong>Parent-minded design</strong><span>No ads. No behavioral tracking. Parent controls are built in.</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Story lengths</div>
            <h2>Pick the perfect length for tonight.</h2>
          </div>
          <div className="length-grid">
            <div><strong>Quick Story</strong><span>About 3 minutes</span></div>
            <div><strong>Bedtime Story</strong><span>About 5 minutes</span></div>
            <div><strong>Big Adventure</strong><span>About 8 minutes</span></div>
          </div>
        </div>
      </section>
    </>
  )
}
