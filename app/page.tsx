import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import TechStack from '@/components/sections/TechStack'
import { PORTFOLIO, HIGHLIGHTS, CURRENT_COMPANY } from '@/lib/constants'
import { getHighlightedProjects } from '@/data/projects'
import Scene3D from '@/components/canvas/Scene3D'

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

export default function Home() {
  const featuredProjects = getHighlightedProjects()

  return (
    <>
      <section className="section-padding pt-12 lg:pt-20">
        <div className="container-width">

          {/* HERO GRID: Text + Image side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Left: Intro */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-brand-blue tracking-wide uppercase">
                  {PORTFOLIO.shortBio}
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="brand-text">{PORTFOLIO.name}</span>
                </h1>
                <p className="text-xl lg:text-2xl font-semibold text-text-secondary">
                  {PORTFOLIO.title}
                </p>
              </div>

              <p className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-xl">
                {PORTFOLIO.bio}
              </p>

              {/* Quick Info Row */}
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-blue" />
                  <span>{PORTFOLIO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-green-500" />
                  <span>Currently Working</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button href="/projects" variant="primary" size="lg">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
                <a
                  href="/resume.pdf"
                  download="Shehzade_Shahnano_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  Download Resume
                  <Download size={18} />
                </a>
              </div>
            </div>

            {/* Right: Clean Image */}
            <div className="order-1 lg:order-2 w-full h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
              <Scene3D />
            </div>
          </div>

          {/* INFO GRID: 2 columns on desktop - Left: Current Work, Right: Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left Column: Current Status & Highlights */}
            <div className="lg:col-span-1 flex flex-col gap-6">

              {/* Currently Working Card */}
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

              {/* Highlights Grid */}
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

            {/* Right Column: Tech Stack (spans 2 columns) */}
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

      {/* Projects Section */}
      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                Featured <span className="brand-text">Projects</span>
              </h2>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all cursor-pointer"
              >
                View All <ArrowRight size={18} />
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
              Ready to work <span className="brand-text">together</span>?
            </h2>
            <p className="text-lg text-text-secondary">
              Let&apos;s discuss your next project or how I can help bring your ideas to life.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}