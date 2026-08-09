import type { Metadata } from 'next'
import Link from 'next/link'
import { projectsData } from '@/data/projects'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my professional React frontend work — responsive dashboard applications built with Material-UI, Redux, and modern web technologies.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-12 lg:pt-20">
        <div className="container-width">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-hero font-black text-text-primary">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-body-lg text-text-secondary">
              A look at my professional work building responsive React
              dashboards and modern web interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding mt-0 pt-0">
        <div className="container-width">
          <div className="grid grid-cols-1 gap-6 max-w-xl">
            {projectsData.map((project) => (
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
                    <h3 className="text-card-title font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-small text-text-secondary">
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

                  <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs text-text-muted mt-auto">
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
      </section>

      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-section font-bold text-text-primary">
              Want to work on a <span className="gradient-text">project</span>?
            </h2>
            <Button href="/contact" variant="primary" size="lg">
              Hire Me
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
