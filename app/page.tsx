import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap, ChevronRight } from 'lucide-react'
import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/shared/SocialIcons'
import { MdEmail } from 'react-icons/md'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import TechStack from '@/components/sections/TechStack'
import { PORTFOLIO, HIGHLIGHTS, CURRENT_COMPANY } from '@/lib/constants'
import { getHighlightedProjects } from '@/data/projects'
import Scene3D from '@/components/canvas/Scene3D'
import { skillsData } from '@/data/skills'
import { experienceData } from '@/data/experience'
import { educationData } from '@/data/education'
import AchievementsPreview from '@/components/sections/AchievementsPreview'

const mainTechs = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Redux' },
  { name: 'Material-UI' },
  { name: 'Next.js' },
  { name: 'JavaScript' },
  { name: 'Tailwind CSS' },
  { name: 'Git' },
  { name: 'MongoDB' },
  { name: 'Express.js' },
  { name: 'HTML5' },
]

const socialLinks = [
  { name: 'LinkedIn', url: PORTFOLIO.socialLinks.linkedin, icon: LinkedinIcon },
  { name: 'Twitter', url: PORTFOLIO.socialLinks.twitter, icon: TwitterIcon },
  { name: 'GitHub', url: PORTFOLIO.socialLinks.github, icon: GithubIcon },
  { name: 'Email', url: `mailto:${PORTFOLIO.email}`, icon: MdEmail },
]

export default function Home() {
  const featuredProjects = getHighlightedProjects()

  return (
    <>
      {/* HERO SECTION */}
      <section className="section-padding pt-12 lg:pt-20">
        <div className="container-width overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 overflow-visible">

            {/* Left: Intro */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* ... all your content ... */}
            </div>

            {/* Right: Image + Social Links */}
            <div className="order-1 lg:order-2 flex flex-col items-center justify-center overflow-visible">
              {/* Image Container */}
              <div className="w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex items-center justify-center relative z-10 overflow-visible">
                <Scene3D />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-0 relative z-50">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-50 flex items-center justify-center w-11 h-11 rounded-xl bg-card-bg border border-border text-text-secondary hover:text-brand-blue hover:border-brand-blue/40 transition-all duration-200 hover:scale-110 shadow-md"
                      style={{
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                      }}
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="p-5 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                    Currently Working
                  </p>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {CURRENT_COMPANY.position}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {CURRENT_COMPANY.name}
                </p>
                <p className="text-xs text-text-muted">
                  {PORTFOLIO.learningStatement}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map(({ label, value, description }) => (
                  <div key={label} className="p-4 rounded-xl bg-card-bg border border-border text-center">
                    <span className="text-2xl font-black brand-text block mb-1">{label}</span>
                    <span className="text-sm font-semibold text-text-primary block">{value}</span>
                    <span className="text-xs text-text-muted">{description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="p-6 rounded-2xl bg-card-bg border border-border h-full">
                <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <GraduationCap size={24} className="text-brand-blue" />
                  Technical Skills
                </h2>
                <TechStack technologies={mainTechs} variant="grid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                About <span className="brand-text">Me</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Passionate Software Developer with 1+ years of experience specializing in building
                client-based dashboard applications. Currently working at Guava Trees Softech Pvt Ltd,
                developing high-performance farm management solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h3 className="text-2xl font-black brand-text mb-1">1+</h3>
                  <p className="text-sm text-text-secondary">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h3 className="text-2xl font-black brand-text mb-1">15+</h3>
                  <p className="text-sm text-text-secondary">Technologies</p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
              >
                Learn More About Me <ChevronRight size={18} />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-lg font-bold text-text-primary mb-4">Core Skills</h3>
              <div className="flex flex-col gap-4">
                {skillsData.slice(0, 3).map((category) => (
                  <div key={category.category} className="p-4 rounded-xl bg-background border border-border">
                    <h4 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 6).map((skill) => (
                        <Badge key={skill.name} variant="secondary" size="sm">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW SECTION */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Work <span className="brand-text">Experience</span>
            </h2>
            <Link
              href="/about"
              className="hidden sm:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
            >
              View All <ChevronRight size={18} />
            </Link>
          </div>

          <div className="max-w-4xl">
            {experienceData.slice(0, 1).map((exp) => (
              <div key={exp.id} className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{exp.position}</h3>
                    <p className="text-brand-blue font-semibold">{exp.company}</p>
                  </div>
                  <Badge variant="primary" size="sm">{exp.duration}</Badge>
                </div>
                <p className="text-text-secondary mb-4 line-clamp-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 9).map((tech) => (
                    <Badge key={tech} variant="secondary" size="xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold"
            >
              View All Experience <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <AchievementsPreview />

      {/* PROJECTS SECTION */}
      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Featured <span className="brand-text">Projects</span>
            </h2>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
            >
              View All Projects <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="block h-full cursor-pointer"
              >
                <Card hover className="flex flex-col gap-4 p-6 h-full group">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="primary" size="sm">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-text-muted font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" size="xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" size="xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-text-muted mt-auto">
                    <span>{project.duration}</span>
                    <span className="text-brand-blue font-semibold">
                      View Project →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold"
            >
              View All Projects <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EDUCATION PREVIEW */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
            <span className="brand-text">Education</span> & Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl bg-card-bg border border-border hover:border-brand-blue/40 transition-all"
              >
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-brand-blue font-semibold mb-2">{edu.field}</p>
                <p className="text-sm text-text-secondary mb-1">{edu.institution}</p>
                {edu.university && (
                  <p className="text-xs text-text-muted mb-3">{edu.university}</p>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-text-muted">{edu.duration}</span>
                  {edu.cgpa && (
                    <Badge variant="primary" size="sm">CGPA: {edu.cgpa}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
            >
              View Full Background <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Ready to work <span className="brand-text">together</span>?
            </h2>
            <p className="text-lg text-text-secondary">
              Let&apos;s discuss your next project or how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}