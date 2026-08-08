import type { Metadata } from 'next'
import { PORTFOLIO } from '@/lib/constants'
import { skillsData } from '@/data/skills'
import { experienceData } from '@/data/experience'
import { educationData } from '@/data/education'
import Button from '@/components/shared/Button'
import SkillBar from '@/components/shared/SkillBar'
import ExperienceCard from '@/components/shared/ExperienceCard'
import Badge from '@/components/shared/Badge'
import CompanyHighlight from '@/components/sections/CompanyHighlight'
import LearningCallout from '@/components/shared/LearningCallout'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${PORTFOLIO.name} — ${PORTFOLIO.title} based in ${PORTFOLIO.location}.`,
}

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pt-12 lg:pt-20">
        <div className="container-width">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-hero font-black text-text-primary">
              About <span className="brand-text">Me</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              {PORTFOLIO.bio}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-12">
            Technical <span className="brand-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillsData.map((category) => (
              <div key={category.category} className="flex flex-col gap-6">
                <h3 className="text-lg font-bold text-text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-12">
            Work <span className="brand-text">Experience</span>
          </h2>

          <div className="flex flex-col gap-6 max-w-4xl">
            {experienceData.map((exp) => (
              <ExperienceCard
                key={exp.id}
                position={exp.position}
                company={exp.company}
                duration={exp.duration}
                period={exp.period}
                description={exp.description}
                technologies={exp.technologies}
                highlights={exp.highlights}
              />
            ))}
          </div>

          <div className="mt-12 max-w-4xl">
            <LearningCallout />
          </div>
        </div>
      </section>

      <CompanyHighlight />

      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-12">
            <span className="brand-text">Education</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-card-bg border border-border 
                  hover:border-brand-blue/40 transition-all duration-300 group cursor-default"
              >
                <div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-blue transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-brand-blue font-semibold mt-1">
                    {edu.field}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <p className="text-sm font-semibold text-text-primary">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-xs text-text-muted">
                      Associated with {edu.university}
                    </p>
                  )}
                  <p className="text-xs text-text-muted">{edu.location}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border gap-3 flex-wrap">
                  <span className="text-xs text-text-muted">{edu.duration}</span>
                  {edu.cgpa && (
                    <Badge variant="primary" size="sm">
                      CGPA: {edu.cgpa}
                    </Badge>
                  )}
                  {edu.score && (
                    <Badge variant="success" size="sm">
                      {edu.score}
                    </Badge>
                  )}
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2 pt-2">
                    {edu.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-brand-blue shrink-0 mt-0.5 text-xs" aria-hidden="true">
                          →
                        </span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-section font-bold text-text-primary">
              Let&apos;s build something{' '}
              <span className="brand-text">amazing</span>
            </h2>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}