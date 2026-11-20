import Art from './components/Art.jsx'
import CursorEffects from './components/CursorEffects.jsx'
import EmailButton from './components/EmailButton.jsx'
import { profile, studies, projects, moreWork, experience, skills, about } from './data.js'

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__logo">Yami Naik</a>
        <nav aria-label="Main">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
         
          {profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>}
           <a href="#contact" className="nav__cta">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__kicker">Software engineer, NYU MS Computer Engineering</p>
          <h1 className="hero__name">Yami Naik</h1>
          <p className="hero__pitch">
            I build software at every layer: firmware that reads sensors in real time, neural networks that learn from images, and web apps that people use every day.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#work">See my projects</a>
            <EmailButton email={profile.email} className="btn--ghost" />
          </div>
          <p className="hero__now"><span className="dot" />Software Engineer at Gainfront. Open to new roles and freelance work.</p>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <img className="about__photo" src={about.photo} alt="Yami Naik" />
        <div>
          <h2 className="h2">About me</h2>
          {about.paragraphs.map((p) => <p key={p} className="about__text">{p}</p>)}
        </div>
      </div>
    </section>
  )
}

function Studies() {
  return (
    <section className="section" id="studies">
      <div className="wrap">
        <h2 className="h2">What I focused on at NYU</h2>
        <p className="lede">Master of Science in Computer Engineering, 2024, GPA 3.9. Four areas, each with a project you can look at.</p>
        <div className="studies">
          {studies.map((s) => (
            <a key={s.id} href={s.href} className={`study glow study--${s.id}`}>
              <StudyIcon id={s.id} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="study__proj">See {s.project}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function StudyIcon({ id }) {
  const paths = {
    rtes: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
    dl: <><circle cx="5" cy="7" r="2" /><circle cx="5" cy="17" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="19" cy="12" r="2" /><path d="M7 7l3-1.5M7 7l3 4.5M7 17l3-4.5M7 17l3 1.5M14 5l3 6M14 12h3M14 19l3-6" /></>,
    ml: <><path d="M3 20h18" /><path d="M5 16l4-5 4 3 6-8" /><circle cx="19" cy="6" r="1.5" /></>,
    se: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  }
  return <svg className="study__icon" viewBox="0 0 24 24" aria-hidden="true">{paths[id]}</svg>
}

function Project({ p, flip }) {
  return (
    <article className={`project glow ${flip ? 'project--flip' : ''}`} id={p.id}>
      <Art kind={p.art} />
      <div className="project__body">
        <p className="project__meta"><span className="tag">{p.area}</span><span>{p.context}</span></p>
        <h3 className="project__title">{p.title}</h3>
        <p className="project__tagline">{p.tagline}</p>
        <p className="project__summary">{p.summary}</p>
        <ul className="project__points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        {p.note && <p className="project__note">{p.note}</p>}
        {p.links.length > 0 && (
          <div className="project__links">
            {p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </div>
        )}
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="section section--tint" id="work">
      <div className="wrap">
        <h2 className="h2">Projects</h2>
        <p className="lede">Embedded hardware, deep learning and full-stack products. I worked solo on some and in teams on others, and each one says which.</p>
        <div className="projects">
          {projects.map((p, i) => <Project key={p.id} p={p} flip={i % 2 === 1} />)}
        </div>
        <div className="more" id="more">
          <h3>Machine learning, earlier work</h3>
          <div className="more__grid">
            {moreWork.map((m) => (
              <a key={m.title} href={m.href} target="_blank" rel="noopener noreferrer" className="more__item glow">
                <b>{m.title}</b>
                <span>{m.text}</span>
                <small>{m.stack}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap exp">
        <div>
          <h2 className="h2">Experience</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <div className="chips chips--plain">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company + e.when} className={`${e.current ? 'is-current' : ''} ${e.school ? 'is-school' : ''}`}>
              <span className="timeline__when">{e.when}</span>
              <h3>{e.role} <span>at {e.company}</span></h3>
              <span className="timeline__where">{e.where}</span>
              <p>{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Let's build something.</h2>
        <p>I'm open to software engineering roles, especially in ML and healthcare tech, and to freelance web projects.</p>
        <div className="hero__ctas">
          <EmailButton email={profile.email} className="btn--primary" />
          <a className="btn btn--light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn--light" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.resume && <a className="btn btn--light" href={profile.resume}>Resume</a>}
        </div>
      </div>
      <footer className="wrap footer">© {new Date().getFullYear()} {profile.fullName}</footer>
    </section>
  )
}

export default function App() {
  return (
    <>
      <CursorEffects />
      <a className="skip" href="#work">Skip to projects</a>
      <Nav />
      <main>
        <Hero />
         <About />
        <Studies />
        <Work />
        <Experience />
      </main>
      <Contact />
    </>
  )
}