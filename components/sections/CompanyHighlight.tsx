'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar, Globe } from 'lucide-react'
import { CURRENT_COMPANY } from '@/lib/constants'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CompanyHighlight() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="section-padding bg-card-bg"
    >
      <div className="container-width">
        <motion.div
          variants={fadeUpVariant}
          className="p-6 sm:p-8 rounded-2xl border-2 border-brand-blue/30 bg-gradient-to-br 
            from-brand-blue/10 to-purple-500/10 overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 
              border-b border-border">
              <div className="flex flex-col gap-3 min-w-0">
                <div className="flex items-start gap-3">
                  <Building2 size={28} className="text-brand-blue shrink-0 mt-1" />
                  <h2 className="text-2xl sm:text-3xl font-black text-text-primary">
                    {CURRENT_COMPANY.name}
                  </h2>
                </div>
                <p className="text-lg text-text-secondary">
                  Currently working as{' '}
                  <span className="font-semibold text-brand-blue">
                    {CURRENT_COMPANY.position}
                  </span>
                </p>
              </div>
              <Badge variant="primary" size="md">
  On-site in Bhopal
</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">Joined</span>
                </div>
                <p className="text-base font-semibold text-text-primary">
                  {CURRENT_COMPANY.joinDate}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-text-muted">
                  <Building2 size={18} />
                  <span className="text-sm font-semibold">Work Mode</span>
                </div>
                <p className="text-base font-semibold text-text-primary">
                  {CURRENT_COMPANY.workMode}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-text-muted">
                  <Globe size={18} />
                  <span className="text-sm font-semibold">Website</span>
                </div>
                <a
                  href={CURRENT_COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-brand-blue hover:text-brand-blue/80 
                    transition-colors cursor-pointer truncate"
                >
                  guavatrees.com
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <span className="text-sm font-semibold text-text-primary">
                  Office Location
                </span>
              </div>
              <div className="ml-7 flex flex-col gap-1 text-sm text-text-secondary">
                <p>{CURRENT_COMPANY.address.street}</p>
                <p>{CURRENT_COMPANY.address.city}, {CURRENT_COMPANY.address.state}</p>
                <p>{CURRENT_COMPANY.address.country}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 mb-6">
              <span className="text-sm font-semibold text-text-primary">
                Working With Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {CURRENT_COMPANY.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3">
              <Button href={CURRENT_COMPANY.website} variant="primary" size="md">
                Visit Company Website
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}