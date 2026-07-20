import { personal, stats } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A passionate educator who codes — and a developer who teaches
            </p>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal className="reveal-left">
            <div className="about__photo-col">
              <div className="about__photo-card">
                <div className="about__photo-placeholder">
                  <span>{personal.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="about__photo-decor" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div className="about__text-col">
              <h3 className="about__hello">
                Hello! I'm <span className="about__name-accent">{personal.name}</span>
              </h3>
              <p className="about__bio">{personal.bio}</p>

              <div className="about__info-grid">
                <div className="about__info-item">
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">{personal.location}</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Email</span>
                  <a href={`mailto:${personal.email}`} className="about__info-value about__info-link">
                    {personal.email}
                  </a>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Phone</span>
                  <span className="about__info-value">{personal.phone}</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Availability</span>
                  <span className="about__info-value about__info-available">
                    <span className="about__dot" /> Open to Opportunities
                  </span>
                </div>
              </div>

              <div className="about__cta">
                <a href={personal.resumeFile} className="btn btn-primary" download>
                  Download Resume
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="about__stats">
            {stats.map((stat, i) => (
              <div className="about__stat-card" key={i}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
