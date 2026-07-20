import { experience } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional journey across education and technology
            </p>
          </div>
        </ScrollReveal>

        <div className="exp__timeline">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120} className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
              <div className={`exp__item${i % 2 !== 0 ? ' exp__item--right' : ''}`}>
                <div className="exp__dot">
                  <span>{item.type === 'teaching' ? '🎓' : '💻'}</span>
                </div>

                <div className="exp__card glass-card">
                  <div className="exp__card-header">
                    <div>
                      <h3 className="exp__role">{item.role}</h3>
                      <p className="exp__institution">{item.institution}</p>
                    </div>
                    <span className={`badge ${item.type === 'teaching' ? 'badge-gold' : 'badge-teal'}`}>
                      {item.dates}
                    </span>
                  </div>

                  <ul className="exp__bullets">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="exp__bullet">
                        <span className="exp__bullet-dot" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="exp__type-tag">
                    {item.type === 'teaching' ? '🎓 Teaching' : '💻 Technology'}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
