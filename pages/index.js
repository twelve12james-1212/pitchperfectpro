import { useState } from "react";
import Head from "next/head";

const COLORS = {
  teal: "#0B5C6E",
  tealDark: "#083F4D",
  tealLight: "#1A7A90",
  skyBlue: "#4BAEC8",
  gold: "#C8930A",
  goldLight: "#E5A90C",
  offWhite: "#F7F5F0",
  white: "#FFFFFF",
  darkText: "#0F2830",
  mutedText: "#5A7A85",
  border: "#D6EBF0",
};

const features = [
  {
    icon: "🎙️",
    title: "Log a Speaking Session",
    desc: "Record or type details of any pitch — topic, audience, and your honest self-assessment — while the experience is still fresh.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Delivery Analysis",
    desc: "Get objective feedback on filler words, pace, clarity, and overall impact — instantly, without judgment.",
  },
  {
    icon: "🎯",
    title: "Personalized Goals & Exercises",
    desc: "Set targets like 'reduce um by 50%' and receive AI-suggested exercises tailored to your specific weaknesses.",
  },
  {
    icon: "📈",
    title: "Performance History & Progress",
    desc: "Watch your confidence scores rise over time with visual analytics that show exactly how far you've come.",
  },
];

const steps = [
  {
    num: "01",
    title: "Log Your Session",
    desc: "Right after a pitch or practice, answer 3 structured prompts. Takes under 3 minutes.",
  },
  {
    num: "02",
    title: "Get Your AI Analysis",
    desc: "Receive an objective breakdown of your filler words, pacing, and delivery — no sugarcoating.",
  },
  {
    num: "03",
    title: "Track Your Growth",
    desc: "Watch your confidence score climb as you eliminate bad habits and build unshakeable delivery.",
  },
];

const personas = [
  { emoji: "🏡", role: "Real Estate Agent", pain: "Losing listings because nerves undercut your expertise" },
  { emoji: "⚖️", role: "Attorney", pain: "Courtroom delivery that doesn't match your legal precision" },
  { emoji: "🎤", role: "Coach or Consultant", pain: "Helping everyone else but freezing when you pitch yourself" },
  { emoji: "📣", role: "Marketing Professional", pain: "Brilliant strategy, uneven presentation confidence" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Replace this URL with your AWeber or email capture endpoint
    // e.g. AWeber form action URL or a Next.js API route
    try {
      await new Promise((r) => setTimeout(r, 900)); // simulate submit
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>PitchPerfect Pro — AI Speaking Coach for Solo Professionals</title>
        <meta
          name="description"
          content="Stop losing clients because of how you sound. PitchPerfect Pro is the AI-powered delivery coach built for solo professionals. Coming to the App Store."
        />
        <meta property="og:title" content="PitchPerfect Pro — AI Speaking Coach" />
        <meta
          property="og:description"
          content="Log your pitches. Get AI feedback. Build unshakeable delivery confidence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.offWhite}; color: ${COLORS.darkText}; font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: ${COLORS.tealDark};
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; height: 64px;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 700;
          color: ${COLORS.white}; letter-spacing: 0.01em;
        }
        .nav-logo span { color: ${COLORS.goldLight}; }
        .nav-cta {
          background: ${COLORS.gold}; color: ${COLORS.white};
          padding: 8px 20px; border-radius: 6px;
          font-size: 0.85rem; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: ${COLORS.goldLight}; }

        /* HERO */
        .hero {
          background: linear-gradient(145deg, ${COLORS.tealDark} 0%, ${COLORS.teal} 60%, ${COLORS.tealLight} 100%);
          min-height: 100vh; padding: 120px 5% 80px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
        }
        .hero-inner { max-width: 780px; }
        .hero-badge {
          display: inline-block;
          background: rgba(200,147,10,0.18);
          border: 1px solid ${COLORS.goldLight};
          color: ${COLORS.goldLight};
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
          margin-bottom: 28px;
        }
        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.8rem);
          font-weight: 900; line-height: 1.1;
          color: ${COLORS.white}; margin-bottom: 24px;
        }
        .hero-headline em {
          font-style: normal; color: ${COLORS.goldLight};
        }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255,255,255,0.82); line-height: 1.65;
          max-width: 580px; margin: 0 auto 40px;
        }
        .filler-demo {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px; padding: 10px 18px;
          margin-bottom: 40px; font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
        }
        .filler-word {
          color: #FF7B7B; text-decoration: line-through;
          font-weight: 600;
        }
        .clean-word { color: ${COLORS.goldLight}; font-weight: 600; }

        /* EMAIL FORM */
        .email-form {
          display: flex; gap: 12px; max-width: 480px;
          margin: 0 auto; flex-wrap: wrap; justify-content: center;
        }
        .email-input {
          flex: 1; min-width: 240px;
          padding: 14px 18px; border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: ${COLORS.white}; font-size: 0.95rem;
          outline: none; transition: border 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .email-input::placeholder { color: rgba(255,255,255,0.45); }
        .email-input:focus { border-color: ${COLORS.goldLight}; }
        .email-btn {
          padding: 14px 28px; border-radius: 8px;
          background: ${COLORS.gold}; color: ${COLORS.white};
          font-size: 0.95rem; font-weight: 600;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          font-family: 'Inter', sans-serif; white-space: nowrap;
        }
        .email-btn:hover { background: ${COLORS.goldLight}; transform: translateY(-1px); }
        .email-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .success-msg {
          color: ${COLORS.goldLight}; font-size: 1rem;
          font-weight: 600; padding: 16px;
          background: rgba(200,147,10,0.1);
          border: 1px solid rgba(200,147,10,0.3);
          border-radius: 8px; max-width: 480px; margin: 0 auto;
        }
        .hero-micro {
          margin-top: 16px; font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
        }

        /* PAIN SECTION */
        .pain {
          background: ${COLORS.white};
          padding: 80px 5%;
          text-align: center;
        }
        .section-label {
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${COLORS.teal}; margin-bottom: 16px;
        }
        .section-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700; line-height: 1.2;
          color: ${COLORS.darkText}; max-width: 620px;
          margin: 0 auto 48px;
        }
        .pain-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px; max-width: 900px; margin: 0 auto;
        }
        .pain-card {
          background: ${COLORS.offWhite};
          border: 1px solid ${COLORS.border};
          border-radius: 12px; padding: 28px 24px;
          text-align: left;
        }
        .pain-icon { font-size: 1.6rem; margin-bottom: 14px; }
        .pain-title {
          font-size: 0.95rem; font-weight: 600;
          color: ${COLORS.darkText}; margin-bottom: 8px;
        }
        .pain-desc { font-size: 0.88rem; color: ${COLORS.mutedText}; line-height: 1.6; }

        /* HOW IT WORKS */
        .how {
          background: ${COLORS.offWhite};
          padding: 80px 5%; text-align: center;
        }
        .steps {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px; max-width: 860px; margin: 0 auto;
          position: relative;
        }
        .step-card {
          background: ${COLORS.white};
          border: 1px solid ${COLORS.border};
          border-radius: 12px; padding: 32px 28px;
          text-align: left; position: relative;
        }
        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem; font-weight: 900;
          color: ${COLORS.border}; line-height: 1;
          margin-bottom: 12px;
        }
        .step-title {
          font-size: 1rem; font-weight: 700;
          color: ${COLORS.teal}; margin-bottom: 10px;
        }
        .step-desc { font-size: 0.88rem; color: ${COLORS.mutedText}; line-height: 1.65; }

        /* FEATURES */
        .features {
          background: ${COLORS.tealDark};
          padding: 80px 5%; text-align: center;
        }
        .features .section-label { color: ${COLORS.goldLight}; }
        .features .section-headline { color: ${COLORS.white}; }
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px; max-width: 960px; margin: 0 auto;
        }
        .feature-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 30px 26px; text-align: left;
          transition: background 0.2s;
        }
        .feature-card:hover { background: rgba(255,255,255,0.1); }
        .feature-icon { font-size: 1.8rem; margin-bottom: 14px; }
        .feature-title {
          font-size: 1rem; font-weight: 600;
          color: ${COLORS.white}; margin-bottom: 10px;
        }
        .feature-desc { font-size: 0.88rem; color: rgba(255,255,255,0.65); line-height: 1.65; }

        /* WHO IT'S FOR */
        .audience {
          background: ${COLORS.white};
          padding: 80px 5%; text-align: center;
        }
        .persona-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px; max-width: 860px; margin: 0 auto;
        }
        .persona-card {
          border: 2px solid ${COLORS.border};
          border-radius: 12px; padding: 28px 20px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .persona-card:hover {
          border-color: ${COLORS.skyBlue};
          transform: translateY(-3px);
        }
        .persona-emoji { font-size: 2rem; margin-bottom: 12px; }
        .persona-role {
          font-size: 0.95rem; font-weight: 700;
          color: ${COLORS.teal}; margin-bottom: 8px;
        }
        .persona-pain { font-size: 0.82rem; color: ${COLORS.mutedText}; line-height: 1.55; }

        /* SOCIAL PROOF */
        .proof {
          background: ${COLORS.offWhite};
          padding: 70px 5%; text-align: center;
        }
        .proof-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 7vw, 4.5rem);
          font-weight: 900; color: ${COLORS.teal}; line-height: 1;
          margin-bottom: 8px;
        }
        .proof-label {
          font-size: 1rem; color: ${COLORS.mutedText}; margin-bottom: 40px;
        }
        .quote {
          max-width: 580px; margin: 0 auto;
          background: ${COLORS.white};
          border-left: 4px solid ${COLORS.gold};
          border-radius: 0 10px 10px 0;
          padding: 24px 28px; text-align: left;
        }
        .quote-text {
          font-size: 1.05rem; font-style: italic;
          color: ${COLORS.darkText}; line-height: 1.65; margin-bottom: 14px;
        }
        .quote-author { font-size: 0.85rem; font-weight: 600; color: ${COLORS.teal}; }

        /* FINAL CTA */
        .final-cta {
          background: linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%);
          padding: 90px 5%; text-align: center;
        }
        .final-cta .section-headline { color: ${COLORS.white}; margin-bottom: 14px; }
        .final-sub {
          color: rgba(255,255,255,0.75); font-size: 1.05rem;
          max-width: 480px; margin: 0 auto 40px; line-height: 1.6;
        }

        /* APP STORE BUTTON (swap in when live) */
        .appstore-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: ${COLORS.white}; color: ${COLORS.tealDark};
          padding: 14px 32px; border-radius: 10px;
          font-size: 1rem; font-weight: 700;
          text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .appstore-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.25); }
        .appstore-icon { font-size: 1.4rem; }

        /* FOOTER */
        .footer {
          background: ${COLORS.tealDark};
          padding: 32px 5%;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700;
          color: ${COLORS.white};
        }
        .footer-logo span { color: ${COLORS.goldLight}; }
        .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.4); }

        @media (max-width: 600px) {
          .nav-logo { font-size: 0.95rem; }
          .email-form { flex-direction: column; }
          .email-input { min-width: unset; width: 100%; }
          .footer { justify-content: center; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">PitchPerfect <span>Pro</span></div>
        {/* When live, replace href with your App Store URL */}
        <a
          className="nav-cta"
          href="#notify"
          onClick={(e) => { e.preventDefault(); document.querySelector("#notify")?.scrollIntoView({ behavior: "smooth" }); }}
        >
          Get Early Access
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">🎙️ Coming to the App Store</div>
          <h1 className="hero-headline">
            Stop Losing Clients<br />
            Because of <em>How You Sound</em>
          </h1>
          <p className="hero-sub">
            PitchPerfect Pro is the AI-powered delivery coach built for solo professionals.
            Log your sessions, eliminate filler words, and build the confident delivery your expertise deserves.
          </p>

          {/* Filler word demo */}
          <div className="filler-demo">
            <span>
              <span className="filler-word">Um,</span> our listings
              <span className="filler-word"> like</span> outperform the market
              <span className="filler-word"> uh</span> every quarter.
            </span>
            <span>→</span>
            <span className="clean-word">Our listings outperform the market every quarter.</span>
          </div>

          {/* Email capture */}
          <div id="notify">
            {!submitted ? (
              <>
                <form className="email-form" onSubmit={handleSubmit}>
                  <input
                    className="email-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="email-btn" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Notify Me at Launch →"}
                  </button>
                </form>
                <p className="hero-micro">Free 7-day trial at launch. No credit card required.</p>
              </>
            ) : (
              <div className="success-msg">
                ✓ You're on the list! We'll email you the moment PitchPerfect Pro is live on the App Store.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="pain">
        <p className="section-label">The Problem</p>
        <h2 className="section-headline">
          You know your material.<br />So why do you keep losing the room?
        </h2>
        <div className="pain-grid">
          {[
            { icon: "😬", title: "Filler words undercut your authority", desc: "Every 'um' and 'uh' chips away at the confidence your expertise deserves." },
            { icon: "💸", title: "Enterprise tools aren't built for you", desc: "Coaching platforms like Yoodli and Spinify are built for 50-rep sales floors — not solo professionals on a budget." },
            { icon: "🔄", title: "You can't see your own blind spots", desc: "Without objective feedback, you keep repeating the same delivery habits that cost you clients." },
            { icon: "⏱️", title: "No time for formal coaching", desc: "Weekly sessions with a speaking coach aren't realistic. You need feedback in the moment, on your schedule." },
          ].map((p) => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <div className="pain-title">{p.title}</div>
              <div className="pain-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <p className="section-label">How It Works</p>
        <h2 className="section-headline">Three steps. Under five minutes.<br />Real results.</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step-card" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <p className="section-label">What's Inside</p>
        <h2 className="section-headline" style={{ color: "#fff", marginBottom: 48 }}>
          Every feature built around<br />one goal: your next pitch wins.
        </h2>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="audience">
        <p className="section-label">Who It's For</p>
        <h2 className="section-headline">
          Built for the solo professional<br />who pitches for a living.
        </h2>
        <div className="persona-grid">
          {personas.map((p) => (
            <div className="persona-card" key={p.role}>
              <div className="persona-emoji">{p.emoji}</div>
              <div className="persona-role">{p.role}</div>
              <div className="persona-pain">{p.pain}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="proof">
        <div className="proof-number">500+</div>
        <div className="proof-label">solo professionals on the early access list</div>
        <div className="quote">
          <div className="quote-text">
            "I had no idea how many times I said 'um' in a single listing presentation.
            PitchPerfect Pro showed me exactly what I was doing — and more importantly, how to fix it."
          </div>
          <div className="quote-author">— Real estate agent, Miami FL</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2 className="section-headline">
          Your next pitch could be<br />the one that changes everything.
        </h2>
        <p className="final-sub">
          Join the waitlist today. When PitchPerfect Pro launches on the App Store,
          you'll be first — with 7 days completely free.
        </p>

        {/* EMAIL FORM (repeated at bottom) */}
        {!submitted ? (
          <>
            <form className="email-form" style={{ justifyContent: "center" }} onSubmit={handleSubmit}>
              <input
                className="email-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="email-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Get Early Access →"}
              </button>
            </form>
            <p className="hero-micro" style={{ color: "rgba(255,255,255,0.4)", marginTop: 14 }}>
              No spam. No credit card. Just your AI speaking coach, the moment it's live.
            </p>
          </>
        ) : (
          <div className="success-msg" style={{ maxWidth: 520, margin: "0 auto" }}>
            ✓ You're on the list! We'll email you the moment PitchPerfect Pro hits the App Store.
          </div>
        )}

        {/* 
          ─────────────────────────────────────────────────────
          WHEN YOUR APP IS LIVE ON THE APP STORE:
          1. Replace the email form above with the button below
          2. Add your real App Store URL to the href
          ─────────────────────────────────────────────────────
          <a
            className="appstore-btn"
            href="https://apps.apple.com/app/YOUR-APP-ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="appstore-icon">🍎</span>
            Download on the App Store
          </a>
          ─────────────────────────────────────────────────────
        */}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">PitchPerfect <span>Pro</span></div>
        <div className="footer-copy">© {new Date().getFullYear()} PitchPerfect Pro. All rights reserved.</div>
      </footer>
    </>
  );
}
