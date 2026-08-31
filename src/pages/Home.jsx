import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MoonStar,
  ShieldCheck,
  Sparkles,
  BookOpenText,
  Egg,
  CheckCircle2,
  Trophy,
  WandSparkles,
} from 'lucide-react'
import arkaGandivaIcon from '../assets/branding/arka_gandiva_app_icon.png'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Independent software product studio</div>

             <h1>
              Ideas with purpose.
              <br />
              <span>Products with possibility.</span>
            </h1>
            
            <p>
              Arka Gandiva Labs creates thoughtful digital products that combine
              imagination, intelligent technology, and beautifully simple experiences.
            </p>

            <div className="hero-actions">
              <a className="button" href="#products">
                Explore Our Products <ArrowRight size={18} />
              </a>

              <Link className="button button-ghost" to="/about">
                About Us
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Arka Gandiva Labs visual">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />

            <div className="gandiva-symbol">
              <img
                src={arkaGandivaIcon}
                alt=""
                className="hero-brand-symbol"
              />
            </div>

            <div className="floating-card floating-card-one">
              Imagine
            </div>

            <div className="floating-card floating-card-two">
              Build
            </div>

            <div className="floating-card floating-card-three">
              Evolve
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our products</div>

            <h2>Products built around real experiences</h2>

            <p>
              Focused digital products designed to make everyday moments more useful,
              imaginative, and enjoyable.
            </p>
          </div>

          <div className="products-showcase">
            <div className="product-card">
              <div className="product-card-copy">
                <div className="product-badge">
                  <MoonStar size={18} />
                  Lunomi
                </div>

                <div className="product-status product-status-live">
                  Available soon
                </div>

                <h3>
                  Personalized stories where your child becomes the hero.
                </h3>

                <p>
                  Lunomi transforms a child's imagination into personalized adventures
                  tailored to their age, choices, and story ideas.
                </p>

                <div className="feature-grid compact">
                  <div>
                    <Sparkles size={20} />
                    <strong>Age-adaptive stories</strong>
                    <span>Language evolves with the child.</span>
                  </div>

                  <div>
                    <BookOpenText size={20} />
                    <strong>Create the adventure</strong>
                    <span>Hero, world, idea, and length.</span>
                  </div>

                  <div>
                    <MoonStar size={20} />
                    <strong>Made for bedtime</strong>
                    <span>Warm, calming endings.</span>
                  </div>

                  <div>
                    <ShieldCheck size={20} />
                    <strong>Parent-minded</strong>
                    <span>No ads or behavioral tracking.</span>
                  </div>
                </div>

                <Link className="button" to="/lunomi">
                  Discover Lunomi <ArrowRight size={18} />
                </Link>
              </div>

              <div className="lunomi-preview">
                <div className="phone">
                  <div className="phone-notch" />

                  <div className="phone-screen">
                    <div className="stars">✦ · ✧ · ✦</div>
                    <div className="moon">☾</div>

                    <div className="phone-title">
                      Tonight's story
                      <br />
                      starts with you
                    </div>

                    <div className="phone-subtitle">
                      Dream it. Create it. Be the hero.
                    </div>

                    <div className="phone-button">
                      Create My Story ✨
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card product-card-hatch">
              <div className="product-card-copy">
                <div className="product-badge">
                  <Egg size={18} />
                  HatchaHabit
                </div>

                <div className="product-status">
                  Coming soon
                </div>

                <h3>
                  Turn everyday habits into adventures kids want to complete.
                </h3>

                <p>
                  HatchaHabit helps children build positive routines through quests,
                  progress, collectible rewards, and evolving creatures.
                </p>

                <div className="feature-grid compact">
                  <div>
                    <CheckCircle2 size={20} />
                    <strong>Daily quests</strong>
                    <span>Turn routines and chores into clear goals.</span>
                  </div>

                  <div>
                    <Egg size={20} />
                    <strong>Creature evolution</strong>
                    <span>Progress helps eggs hatch and characters grow.</span>
                  </div>

                  <div>
                    <Trophy size={20} />
                    <strong>Positive rewards</strong>
                    <span>Celebrate consistency with badges and collectibles.</span>
                  </div>

                  <div>
                    <WandSparkles size={20} />
                    <strong>Made for kids</strong>
                    <span>Playful motivation without making habits feel like work.</span>
                  </div>
                </div>

                <div className="button button-ghost product-disabled">
                  HatchaHabit is coming soon
                </div>
              </div>

              <div className="hatch-preview">
                <div className="hatch-orbit hatch-orbit-one" />
                <div className="hatch-orbit hatch-orbit-two" />

                <div className="hatch-egg">
                  <div className="egg-glow" />
                  <div className="egg-shell">✦</div>
                </div>

                <div className="hatch-label hatch-label-one">
                  Complete quests
                </div>

                <div className="hatch-label hatch-label-two">
                  Build habits
                </div>

                <div className="hatch-label hatch-label-three">
                  Hatch rewards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container values">
          <div className="section-heading narrow">
            <div className="eyebrow">How we build</div>

            <h2>
              Technology should serve a clear human purpose.
            </h2>
          </div>

          <div className="feature-grid">
            <div>
              <strong>Useful by design</strong>
              <span>
                We start with a real need, not a technology trend.
              </span>
            </div>

            <div>
              <strong>Simple experiences</strong>
              <span>
                Powerful products do not need complicated interfaces.
              </span>
            </div>

            <div>
              <strong>Responsible technology</strong>
              <span>
                Privacy, safety, and thoughtful product design matter.
              </span>
            </div>

            <div>
              <strong>Built to evolve</strong>
              <span>
                Products should grow without losing what made them useful.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
