import { achievements } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Achievements.css';

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Achievements & Extras</h2>
            <p className="section-subtitle">
              Awards, community work, and contributions beyond the classroom and codebase
            </p>
          </div>
        </ScrollReveal>

        <div className="ach__grid">
          {achievements.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80} className="reveal-scale">
              <div className="ach__card">
                <div className="ach__icon-wrapper">
                  <span className="ach__icon">{item.icon}</span>
                </div>
                <h3 className="ach__title">{item.title}</h3>
                <p className="ach__desc">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
