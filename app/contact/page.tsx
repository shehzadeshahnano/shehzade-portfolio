import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { PORTFOLIO, SOCIAL_LINKS, CURRENT_COMPANY } from '@/lib/constants'
import ResumeButton from '@/components/sections/ResumeButton'
import ContactForm from '@/components/shared/ContactForm'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/shared/SocialIcons'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${PORTFOLIO.name} for React frontend development opportunities and collaborations.`,
}

export default function ContactPage() {

  const renderIcon = (iconComponent: any) => {
    // If it's already a component, render it directly
    if (typeof iconComponent === 'function') {
      const IconComponent = iconComponent
      return <IconComponent size={18} />
    }
    
    // If it's a string (fallback), map it
    switch (iconComponent) {
      case 'Github':
        return <GithubIcon size={18} />
      case 'Linkedin':
        return <LinkedinIcon size={18} />
      case 'Twitter':
        return <TwitterIcon size={18} />
      case 'Mail':
        return <Mail size={18} />
      default:
        return null
    }
  }

  return (
    <>
      <section className="pt-12 lg:pt-20">
        <div className="container-width">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-hero font-black text-text-primary">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-body-lg text-text-secondary">
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you. Feel free to reach out via email, phone, or
              the contact form below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${PORTFOLIO.email}`}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-card-bg border border-brand-border 
                  hover:border-brand-blue/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/20 w-fit group-hover:bg-brand-blue/20 transition-all">
                  <Mail size={20} className="text-brand-blue" />
                </div>
                <h3 className="text-card-title font-bold text-text-primary">
                  Email
                </h3>
                <p className="text-small text-text-secondary">{PORTFOLIO.email}</p>
                <p className="text-xs text-text-muted">
                  Typical response: 24 hours
                </p>
              </a>

              <a
                href={`tel:${PORTFOLIO.phone.replace(/\s/g, '')}`}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-card-bg border border-brand-border 
                  hover:border-brand-blue/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/20 w-fit group-hover:bg-brand-blue/20 transition-all">
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <h3 className="text-card-title font-bold text-text-primary">
                  Phone
                </h3>
                <p className="text-small text-text-secondary">{PORTFOLIO.phone}</p>
                <p className="text-xs text-text-muted">
                  Everyday, 10am - 10pm IST
                </p>
              </a>

              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-card-bg border border-brand-border">
                <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/20 w-fit">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <h3 className="text-card-title font-bold text-text-primary">
                  Office Location
                </h3>
                <div className="flex flex-col gap-1 text-small text-text-secondary">
                  <p className="font-semibold text-text-primary">
                    {CURRENT_COMPANY.name}
                  </p>
                  <p>{CURRENT_COMPANY.address.street}</p>
                  <p>{CURRENT_COMPANY.address.area}</p>
                  <p className="font-semibold">
                    {CURRENT_COMPANY.address.city},{' '}
                    {CURRENT_COMPANY.address.state}{' '}
                    {CURRENT_COMPANY.address.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-small font-bold text-text-primary">
                  Connect on Social
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {SOCIAL_LINKS.map(({ name, url, icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card-bg border border-brand-border 
                        text-text-secondary hover:text-text-primary
                        hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all cursor-pointer"
                      aria-label={name}
                      title={name}
                    >
                      {renderIcon(icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-card-bg border border-brand-border">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card-bg">
        <div className="container-width">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-section font-bold text-text-primary">
              Or view my <span className="brand-text">resume</span>
            </h2>
            <ResumeButton />
          </div>
        </div>
      </section>
    </>
  )
}
