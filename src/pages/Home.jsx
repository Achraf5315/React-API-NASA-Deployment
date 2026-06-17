import { Link } from "react-router-dom";

const footerLinks = [
  "WHAT'S NEW",
  "BLOG",
  "HELP CENTER",
  "WHO WE ARE",
  "OUR STANCE ON AI",
  "MERCH STORE",
  "STATUS",
  "CONTACT US",
];

const socialLinks = [
  { label: "Email", short: "@" },
  { label: "Tumblr", short: "T" },
  { label: "Discord", short: "D" },
  { label: "Instagram", short: "I" },
  { label: "TikTok", short: "K" },
  { label: "LinkedIn", short: "L" },
  { label: "Bluesky", short: "B" },
];

function RocketIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="illustration illustration--rocket"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M220 70c35 20 57 57 57 95 0 54-34 107-85 133l-26 13-2-33c-54-16-91-59-91-115 0-41 24-78 62-96 28-14 57-12 85 3Z"
          strokeWidth="4"
        />
        <path
          d="M231 103c18 15 29 36 29 58 0 30-18 58-46 74"
          strokeWidth="3"
          opacity="0.85"
        />
        <circle cx="201" cy="165" r="24" strokeWidth="4" />
        <path d="M168 245 124 304" strokeWidth="4" />
        <path d="M200 259 197 339" strokeWidth="4" />
        <path d="M242 247 282 305" strokeWidth="4" />
        <path d="M151 201 92 183" strokeWidth="4" />
        <path d="M257 200 314 183" strokeWidth="4" />
        <path d="M159 270 121 333" strokeWidth="4" />
        <path d="M238 274 274 339" strokeWidth="4" />
        <path d="M188 89c14-11 34-11 49 0" strokeWidth="3" opacity="0.7" />
      </g>
    </svg>
  );
}

function AstronautWritingIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="illustration illustration--astronaut"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M140 324c27-37 55-58 95-66 42-8 83 0 128 29"
          strokeWidth="4"
          opacity="0.5"
        />
        <path
          d="M184 125c9-22 28-38 53-44 38-9 73 7 92 39 16 28 19 60 7 92-11 29-32 52-61 66-32 15-66 14-96-3-27-15-45-39-53-68-8-31-4-60 8-82Z"
          strokeWidth="4"
        />
        <path d="M215 102c11-17 28-27 50-30 21-3 42 2 58 15" strokeWidth="4" />
        <circle cx="264" cy="170" r="30" strokeWidth="4" />
        <path d="M218 209c17 16 39 24 64 24 21 0 40-6 57-18" strokeWidth="4" />
        <path d="M173 280c28-13 52-18 77-16" strokeWidth="4" />
        <path d="M293 261c27 4 50 16 72 35" strokeWidth="4" />
        <path d="M235 197c13 10 29 15 48 15" strokeWidth="3" opacity="0.85" />
        <path
          d="M238 165c8-7 17-10 28-10 12 0 22 4 31 12"
          strokeWidth="3"
          opacity="0.8"
        />
        <path d="M193 244c-17 24-26 49-28 75" strokeWidth="4" />
        <path d="M329 239c21 24 32 52 34 83" strokeWidth="4" />
        <path d="M361 154l57-20" strokeWidth="4" />
        <path d="M366 202l61 6" strokeWidth="4" />
        <path d="M125 230l-44-10" strokeWidth="4" />
        <path d="M127 190l-53 20" strokeWidth="4" />
        <path d="M379 304l42 22" strokeWidth="4" />
        <path d="M125 320l-34 26" strokeWidth="4" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7">
        <path d="M356 68c18 8 29 20 35 39" />
        <path d="M325 78c15 1 27 7 37 18" />
        <path d="M108 122c-15 10-24 24-28 43" />
        <path d="M92 164c-16 6-27 18-34 35" />
      </g>
      <g fill="currentColor" opacity="0.12">
        <circle cx="93" cy="75" r="10" />
        <circle cx="449" cy="106" r="8" />
        <circle cx="420" cy="302" r="12" />
        <circle cx="69" cy="274" r="9" />
      </g>
    </svg>
  );
}

function TelescopeAstronautIllustration() {
  return (
    <svg
      viewBox="0 0 1200 430"
      className="illustration illustration--transition"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M80 312h1040" strokeWidth="4" opacity="0.5" />
        <path d="M287 309l191-106" strokeWidth="5" />
        <path d="M468 204l138-18" strokeWidth="5" />
        <path d="M601 187l120 36" strokeWidth="5" />
        <path d="M439 205l-48 84" strokeWidth="5" />
        <path d="M520 192l-17 102" strokeWidth="5" />
        <path d="M646 204l22 94" strokeWidth="5" />
        <path d="M419 303h237" strokeWidth="5" />
        <path
          d="M705 243c30-27 72-40 123-40 54 0 101 14 140 43"
          strokeWidth="5"
        />
        <path
          d="M798 199c0-26 18-48 44-53 31-6 61 13 70 43 7 23 2 45-15 62-18 18-41 25-66 19-22-5-37-18-45-40-5-12-6-23-3-31Z"
          strokeWidth="5"
        />
        <circle cx="847" cy="202" r="28" strokeWidth="4" />
        <path d="M830 250c8 9 17 14 28 16 14 2 27-1 39-11" strokeWidth="4" />
        <path d="M809 162c8-9 18-14 31-16" strokeWidth="4" />
        <path d="M880 155c14 3 25 11 34 25" strokeWidth="4" />
        <path d="M899 252l58 39" strokeWidth="5" />
        <path d="M769 243l-60 46" strokeWidth="5" />
        <path d="M912 170l87-48" strokeWidth="5" />
        <path d="M938 198l88 8" strokeWidth="5" />
        <path d="M725 337c128-30 278-31 450-4" strokeWidth="4" opacity="0.65" />
        <path d="M204 277c-52 8-91 34-116 77" strokeWidth="4" opacity="0.8" />
      </g>
      <g fill="currentColor" opacity="0.12">
        <circle cx="130" cy="85" r="8" />
        <circle cx="1144" cy="87" r="10" />
        <circle cx="1046" cy="55" r="5" />
        <circle cx="1088" cy="287" r="9" />
        <circle cx="286" cy="70" r="6" />
      </g>
    </svg>
  );
}

function FooterSocial({ label, short }) {
  return (
    <a className="social-pill" href="#footer" aria-label={label}>
      <span aria-hidden="true">{short}</span>
    </a>
  );
}

function Home() {
  return (
    <>
      <section id="hero" className="hero-section section-block">
        <div className="hero-copy">
          <p className="eyebrow">NASA / DIEPE RUIMTE EDITIE</p>
          <h1 className="hero-title">
            Verken als een mens
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h1>
          <p className="hero-subtext">
            NASA is de toegangspoort van de mensheid tot het universum — gebouwd
            voor ontdekking.
          </p>
          <div className="hero-actions">
            <a className="btn-outline-hero" href="#philosophy">
              Begin met verkennen
            </a>
            <Link className="hero-link" to="/overview">
              Open missiesarchief
            </Link>
          </div>
        </div>

        <div className="hero-illustration">
          <RocketIllustration />
        </div>
      </section>

      <section
        id="philosophy"
        className="philosophy-section section-block section-block--light mx-auto"
      >
        <div className="philosophy-grid">
          <div className="philosophy-heading">
            <p className="eyebrow eyebrow--dark">FILOSOFIE</p>
            <h2>
              Een wetenschappelijke missie
              <br />- door mensen, voor de mensheid
            </h2>
          </div>

          <div className="philosophy-content">
            <p className="philosophy-copy">
              Wij vinden dat kennis vrij moet zijn - zonder barrières en zonder
              de beperkingen van de aarde. Geen grenzen - ooit.
            </p>
            <div className="annotation-stack" aria-label="Editorial notes">
              <span className="annotation annotation--green">
                Jouw universum is OPEN.
              </span>
              <span className="annotation annotation--red">
                Nooit betaalmuren.
              </span>
            </div>
            <AstronautWritingIllustration />
          </div>
        </div>
      </section>

      <section id="transition" className="transition-section section-block">
        <div className="section-rule" aria-hidden="true" />
        <div className="transition-copy">
          <p className="eyebrow">VERDER DAN HET OPPERVLAK</p>
          <h2 className="transition-title">
            Luisteren naar de duisternis tussen de sterren.
          </h2>
        </div>
        <TelescopeAstronautIllustration />
      </section>

      <footer id="footer" className="site-footer section-block">
        <div className="footer-top">
          <div className="footer-branding">
            <Link className="site-wordmark site-wordmark--footer" to="/">
              NASA
            </Link>
            <div className="footer-links" aria-label="Footer links">
              {footerLinks.map((item) => (
                <a key={item} href="#hero">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-quote">
            <p>
              “De aarde is de wieg van de mensheid,
              <br />
              maar in de wieg kun je niet voor altijd blijven.”
            </p>
            <span>— Konstantin Tsiolkovsky</span>
          </div>
        </div>

        <div className="footer-social-row" aria-label="Social links">
          {socialLinks.map((item) => (
            <FooterSocial
              key={item.label}
              label={item.label}
              short={item.short}
            />
          ))}
        </div>

        <div className="footer-bottom">
          <span>ALGEMENE VOORWAARDEN</span>
          <span>PRIVACYBELEID</span>
          <span>COLOFON</span>
          <span>Adres: 300 E Street SW, Washington DC 20546</span>
        </div>
      </footer>
    </>
  );
}

export default Home;
