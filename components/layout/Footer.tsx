'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { PORTFOLIO, SOCIAL_LINKS, NAV_LINKS, CURRENT_COMPANY } from '@/lib/constants'
import Logo from '@/components/shared/Logo'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/shared/SocialIcons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-0 bg-card-bg border-t border-brand-border">
      <div className="container-width py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Logo showText={true} size="md" />
            <p className="text-small text-text-secondary leading-relaxed">
              {PORTFOLIO.bio}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-brand-border
                    text-text-secondary hover:text-text-primary hover:border-brand-blue/40
                    hover:bg-brand-blue/10 transition-all duration-200 cursor-pointer"
                  aria-label={name}
                >
                  {icon === 'Github' && <GithubIcon size={18} />}
                  {icon === 'Linkedin' && <LinkedinIcon size={18} />}
                  {icon === 'Twitter' && <TwitterIcon size={18} />}
                  {icon === 'Mail' && <Mail size={18} />}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-small font-semibold text-text-primary uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-secondary hover:text-text-primary 
                      transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-small font-semibold text-text-primary uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                'Frontend Development',
                'React Development',
                'UI/UX Implementation',
                'Payment Integration',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/projects"
                    className="text-small text-text-secondary hover:text-text-primary 
                      transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-small font-semibold text-text-primary uppercase tracking-wider">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${PORTFOLIO.email}`}
                  className="flex items-center gap-2.5 text-small text-text-secondary 
                    hover:text-text-primary transition-colors cursor-pointer"
                >
                  <Mail size={14} className="text-brand-blue shrink-0" />
                  {PORTFOLIO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PORTFOLIO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-small text-text-secondary 
                    hover:text-text-primary transition-colors cursor-pointer"
                >
                  <Phone size={14} className="text-brand-blue shrink-0" />
                  {PORTFOLIO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-small text-text-secondary">
                <MapPin size={14} className="text-brand-blue shrink-0 mt-0.5" />
                <span>
                  {CURRENT_COMPANY.address.city},{' '}
                  {CURRENT_COMPANY.address.state}{' '}
                  {CURRENT_COMPANY.address.zipCode}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="container-width py-6">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 
            text-xs text-text-muted"
          >
            <p>
              © {currentYear} {PORTFOLIO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hover:text-text-primary transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-text-primary transition-colors cursor-pointer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
