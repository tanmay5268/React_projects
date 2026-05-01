import { useState, useEffect, useRef } from "react";

// ── Replace this with your actual team photo import ──────────────────────────
// import teamPhoto from "./assets/team.jpg";
// then use: src={teamPhoto} on the <img> below
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT = "#9b8fff";

const STATS = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ACCENT}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    value: 50,
    label: "Projects",
    desc: "Across AI, ML & Automation",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ACCENT}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    value: 8,
    label: "Events",
    desc: "Hackathons & workshops",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ACCENT}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 400,
    label: "Members",
    desc: "GGSIPU East Delhi Campus",
  },
];

// ── Scramble number hook ──────────────────────────────────────────────────────
function useScramble(target, active, delay = 0) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic

        if (progress < 0.85) {
          // scramble phase — random in range
          setDisplay(Math.floor(Math.random() * (target * eased + 1)));
        } else {
          // settle phase — lock to final
          setDisplay(Math.floor(eased * target));
        }

        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        else setDisplay(target);
      }

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, delay]);

  return display;
}

// ── Single stat card ──────────────────────────────────────────────────────────
export function StatCard({ stat, index, triggered }) {
  const [hovered, setHovered] = useState(false);
  const num = useScramble(stat.value, triggered, index * 180 + 400);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "#1f1f27" : "#191919",
        border: `1px solid ${hovered ? "rgba(155,143,255,0.32)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "3px",
        padding: "18px 20px 16px",
        overflow: "hidden",
        cursor: "default",
        userSelect: "none",
        // entrance: clip-path wipe from left
        clipPath: triggered
          ? "inset(0% 0% 0% 0%)"
          : "inset(0% 100% 0% 0%)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: [
          `clip-path 0.55s cubic-bezier(.76,0,.24,1) ${index * 0.13}s`,
          "transform 0.28s cubic-bezier(.22,.68,0,1.2)",
          "background 0.25s ease",
          "border-color 0.25s ease",
        ].join(", "),
      }}
    >
      {/* ── left accent bar ── */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0,
          width: "2px",
          height: hovered ? "100%" : "0%",
          background: ACCENT,
          transition: "height 0.38s cubic-bezier(.22,.68,0,1)",
        }}
      />

      {/* ── top shimmer on hover ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: "-100%", right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
          animation: hovered ? "shimmer 0.55s ease forwards" : "none",
        }}
      />

      {/* ── icon + label row ── */}
      <div style={{ display: "flex", alignItems: "center",justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
        <div
          style={{
            width: "26px", height: "26px",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(155,143,255,0.2)",
            borderRadius: "3px",
            background: "rgba(155,143,255,0.07)",
            flexShrink: 0,
            transition: "border-color 0.25s, background 0.25s",
            ...(hovered && {
              borderColor: "rgba(155,143,255,0.4)",
              background: "rgba(155,143,255,0.12)",
            }),
          }}
        >
          {stat.icon}
        </div>
        <span
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: hovered ? "rgba(155,143,255,0.7)" : "rgba(255,255,255,0.28)",
            transition: "color 0.25s",
          }}
        >
          {stat.label}
        </span>
      </div>

      {/* ── scramble number ── */}
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "52px",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          color: "#ffffff",
          marginBottom: "10px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {num}
        <span style={{ color: ACCENT, fontSize: "34px" }}>+</span>
      </div>

      {/* ── divider ── */}
      <div
        style={{
          height: "1px",
          background: hovered
            ? `linear-gradient(90deg, rgba(155,143,255,0.4), rgba(255,255,255,0.04))`
            : "rgba(255,255,255,0.06)",
          marginBottom: "10px",
          transition: "background 0.4s ease",
        }}
      />

      {/* ── desc ── */}
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "11px",
          color: hovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)",
          lineHeight: 1.55,
          transition: "color 0.25s",
          margin: 0,
        }}
      >
        {stat.desc}
      </p>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function AboutSection() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    // trigger immediately in storybook/preview contexts
    const fallback = setTimeout(() => setTriggered(true), 500);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <>
      {/* ── Google Fonts ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ── shimmer keyframe ── */}
      <style>{`
        @keyframes shimmer {
          from { left: -100%; }
          to   { left: 100%; }
        }
        @keyframes imgReveal {
          from { clip-path: inset(0% 0% 0% 100%); }
          to   { clip-path: inset(0% 0% 0% 0%); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Section wrapper ── */}
      <section
        ref={sectionRef}
        style={{
          background: "#141414",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          gap: "44px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ambient purple bloom top-left */}
        <div
          style={{
            position: "absolute",
            width: "380px", height: "280px",
            background: "rgba(155,143,255,0.07)",
            borderRadius: "50%",
            filter: "blur(90px)",
            top: "-80px", left: "-60px",
            pointerEvents: "none",
          }}
        />

        {/* ────────────────────────────────────────────────────
            LEFT — eyebrow + three cards
        ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "280px",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "6px",
              opacity: triggered ? 1 : 0,
              animation: triggered ? "fadeDown 0.5s ease both" : "none",
            }}
          >
            <div style={{ width: "22px", height: "1px", background: "rgba(155,143,255,0.55)" }} />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ACCENT,
                opacity: 0.85,
              }}
            >
              By the numbers
            </span>
          </div>

          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} triggered={triggered} />
          ))}
        </div>

        {/* ────────────────────────────────────────────────────
            RIGHT — team photo
        ──────────────────────────────────────────────────── */}
        <div
          style={{
            flex: 1,
            position: "relative",
            zIndex: 1,
            borderRadius: "4px",
            overflow: "hidden",
            animation: triggered ? "imgReveal 0.7s cubic-bezier(.76,0,.24,1) 0.2s both" : "none",
          }}
        >
          {/*
            ── Replace the src below with your actual team photo ──
            e.g. src={teamPhoto}  or  src="/images/team.jpg"
          */}

          {/* subtle purple corner overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(155,143,255,0.06) 0%, transparent 40%)",
              borderRadius: "4px",
              pointerEvents: "none",
            }}
          />

          {/* thin purple border frame */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(155,143,255,0.14)",
              borderRadius: "4px",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>
    </>
  );
}
