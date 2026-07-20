import { education, certifications } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Education.css';

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              Academic foundation in both education and computer science
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="edu__timeline">
          {education.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150} className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
              <div className={`edu__timeline-item${i % 2 === 0 ? '' : ' edu__timeline-item--right'}`}>
                <div className="edu__timeline-dot">
                  <span>🎓</span>
                </div>
                <div className="edu__card glass-card">
                  <div className="edu__card-header">
                    <h3 className="edu__degree">{item.degree}</h3>
                    <span className="badge badge-teal">{item.years}</span>
                  </div>
                  <p className="edu__institution">{item.institution}</p>
                  {item.honors && <p className="edu__honors">{item.honors}</p>}
                  {item.gpa && <p className="edu__gpa">GPA: {item.gpa}</p>}
                  <p className="edu__description">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={300}>
          <div className="edu__certs">
            <h3 className="edu__certs-title">Certifications & Courses</h3>
            <div className="edu__certs-grid">
              {certifications.map((cert, i) => (
                <div className="edu__cert-badge" key={i}>
                  <span className="edu__cert-icon">📜</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
