import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import {
  getProjectBySlug,
  projectsData,
} from '@/data/projects'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import { GithubIcon } from '@/components/shared/SocialIcons'
import AnimatedSection from '@/components/shared/AnimationSection'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2)

  const hasLive = Boolean(project.liveUrl && project.liveUrl !== '#')
  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#')

  return (
    <>
      <section className="pt-6 lg:pt-20 pb-6">
        <div className="container-width">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-small text-brand-blue 
              hover:gap-3 transition-all cursor-pointer mb-6"
          >
            <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
          </Link>
        </div>
      </section>

      <section className="pt-0 pb-12">
        <div className="container-width">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary">{project.category}</Badge>
              <Badge variant="secondary">{project.status}</Badge>
            </div>

            <h1 className="text-hero font-black text-text-primary">
              {project.title}
            </h1>

            <p className="text-body-lg text-text-secondary leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>

            {(hasLive || hasGithub) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {hasLive && (
                  <Button href={project.liveUrl} variant="primary" size="lg">
                    Visit Live Project
                    <ExternalLink size={18} aria-hidden="true" />
                  </Button>
                )}
                {hasGithub && (
                  <Button href={project.githubUrl} variant="outline" size="lg">
                    <GithubIcon size={18} />
                    View on GitHub
                  </Button>
                )}
              </div>
            )}

            {!hasLive && !hasGithub && (
              <p className="text-small text-text-muted pt-2">
                Live demo and source are restricted under NDA.
              </p>
            )}
          </div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-background border border-brand-border">
              <span className="text-xs text-text-muted uppercase font-semibold">
                Duration
              </span>
              <p className="text-card-title font-bold text-text-primary mt-2">
                {project.duration}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-brand-border">
              <span className="text-xs text-text-muted uppercase font-semibold">
                Status
              </span>
              <p className="text-card-title font-bold text-text-primary mt-2">
                {project.status}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-brand-border">
              <span className="text-xs text-text-muted uppercase font-semibold">
                Technologies
              </span>
              <p className="text-card-title font-bold text-text-primary mt-2">
                {project.technologies.length} Tech Stack
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-8">
            Key <span className="gradient-text">Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-card-bg border border-brand-border 
                  hover:border-brand-blue/40 transition-all duration-300 cursor-default"
              >
                <span className="text-brand-blue font-bold mt-1" aria-hidden="true">
                  ✓
                </span>
                <span className="text-small text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-card-bg">
        <div className="container-width">
          <h2 className="text-section font-bold text-text-primary mb-8">
            <span className="gradient-text">Technologies</span> Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {relatedProjects.length > 0 && (
        <AnimatedSection className="section-padding">
          <div className="container-width">
            <h2 className="text-section font-bold text-text-primary mb-8">
              Related <span className="gradient-text">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="block h-full cursor-pointer"
                >
                  <Card hover className="h-full p-6 flex flex-col gap-4 group">
                    <Badge variant="secondary">{relatedProject.category}</Badge>
                    <h3 className="text-card-title font-bold text-text-primary group-hover:gradient-text transition-all">
                      {relatedProject.title}
                    </h3>
                    <p className="text-small text-text-secondary flex-1">
                      {relatedProject.description}
                    </p>
                    <span className="text-xs text-brand-blue font-semibold">
                      View Project →
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-section font-bold text-text-primary">
              Interested in <span className="gradient-text">similar work</span>?
            </h2>
            <p className="text-body-lg text-text-secondary">
              Let&apos;s discuss how I can help with your next project.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
