import { useEffect, useRef, useState } from 'react';
import { teachingSkills, technicalSkills } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar-wrapper" ref={ref}>
      <div className="skill-bar-header">
        <span>{name}</span>
        <span className="skill-bar-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill${animated ? ' animated' : ''}`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('teaching');

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              A unique combination of pedagogical expertise and technical proficiency
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={100}>
          <div className="skills__tabs">
            <button
              className={`skills__tab${activeTab === 'teaching' ? ' skills__tab--active' : ''}`}
              onClick={() => setActiveTab('teaching')}
            >
              <span className="skills__tab-icon">🎓</span>
              Teaching Skills
            </button>
            <button
              className={`skills__tab${activeTab === 'technical' ? ' skills__tab--active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              <span className="skills__tab-icon">💻</span>
              Technical Skills
            </button>
          </div>
        </ScrollReveal>

        {/* Teaching Skills */}
        {activeTab === 'teaching' && (
          <ScrollReveal>
            <div className="skills__teaching-grid">
              {teachingSkills.map((skill, i) => (
                <div className="skills__teaching-card" key={i} style={{ animationDelay: `${i * 50}ms` }}>
                  <span className="skills__teaching-icon">{skill.icon}</span>
                  <span className="skills__teaching-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Technical Skills */}
        {activeTab === 'technical' && (
          <div className="skills__technical">
            {technicalSkills.map((category, ci) => (
              <ScrollReveal key={ci} delay={ci * 100}>
                <div className="skills__category">
                  <h3 className="skills__category-title">{category.category}</h3>
                  <div className="skills__bars">
                    {category.skills.map((skill, si) => (
                      <SkillBar key={si} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
