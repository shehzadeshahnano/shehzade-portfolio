'use client'

import { motion } from 'framer-motion'
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
import Achievements from '@/components/sections/Achievements'
import AnimatedSection from '@/components/shared/AnimationSection'

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

      <div className="bg-background">
        <div className="container-width">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent rounded-full" />
        </div>
      </div>

      <AnimatedSection className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-section font-bold text-text-primary">
                My <span className="brand-text">Journey</span>
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                I'm a passionate frontend developer with a keen eye for creating seamless user experiences.
                Over the past year, I've specialized in building scalable React applications with modern
                design patterns and best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card-bg border border-border">
                  <p className="text-3xl font-black brand-text mb-1">1+</p>
                  <p className="text-sm text-text-secondary">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-card-bg border border-border">
                  <p className="text-3xl font-black brand-text mb-1">15+</p>
                  <p className="text-sm text-text-secondary">Technologies</p>
                </div>
              </div>
            </div>

            {/* Right: Icon Grid or Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="font-bold text-text-primary mb-1">React Expert</h3>
                <p className="text-xs text-text-secondary">Building modern UIs</p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-bold text-text-primary mb-1">UI/UX Focus</h3>
                <p className="text-xs text-text-secondary">User-centric design</p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-text-primary mb-1">Performance</h3>
                <p className="text-xs text-text-secondary">Optimized solutions</p>
              </div>

              <div className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-bold text-text-primary mb-1">Problem Solving</h3>
                <p className="text-xs text-text-secondary">Creative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-card-bg">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-12">
            Technical <span className="brand-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-bold text-text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                        duration: 0.4
                      }}
                    >
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                        years={skill.years}
                        proficiency={skill.proficiency}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="hero-section bg-card-bg">
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
      </AnimatedSection>

      <CompanyHighlight />

      <AnimatedSection className="py-6 lg:py-8">
        <div className="container-width" />
      </AnimatedSection>

      <Achievements />

      <AnimatedSection className="section-padding">
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
      </AnimatedSection>

      <AnimatedSection className="section-padding">
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
      </AnimatedSection>
    </>
  )
}