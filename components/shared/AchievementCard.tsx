'use client'

import { motion, type Variants } from 'framer-motion'
import { Trophy, Calendar, Award, Download, ChevronRight, Eye } from 'lucide-react'
import Link from 'next/link'
import Badge from '@/components/shared/Badge'
import AwardImage3D from '@/components/canvas/AwardImage3D'
import type { Achievement } from '@/types'
import CertificateButton from '@/components/shared/CertificateButton'

interface AchievementCardProps {
    achievement: Achievement
    index?: number
    variant?: 'default' | 'compact'
}

const fadeUpVariant : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
}

export default function AchievementCard({ achievement, index = 0, variant = 'default' }: AchievementCardProps) {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Technical Excellence':
                return Trophy
            case 'Team Recognition':
                return Award
            default:
                return Award
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Technical Excellence':
                return {
                    text: 'text-yellow-500',
                    border: 'border-yellow-500/30',
                    bg: 'bg-yellow-500/10',
                    badge: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
                }
            case 'Individual Recognition':
                return {
                    text: 'text-brand-blue',
                    border: 'border-brand-blue/30',
                    bg: 'bg-brand-blue/10',
                    badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
                }
            case 'Team Recognition':
                return {
                    text: 'text-purple-500',
                    border: 'border-purple-500/30',
                    bg: 'bg-purple-500/10',
                    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
                }
            default:
                return {
                    text: 'text-brand-blue',
                    border: 'border-brand-blue/30',
                    bg: 'bg-brand-blue/10',
                    badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
                }
        }
    }

    const Icon = getCategoryIcon(achievement.category)
    const colors = getCategoryColor(achievement.category)

    if (variant === 'compact') {
        return (
            <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUpVariant}
                viewport={{ once: true, margin: '-50px' }}
                className="group relative hover:z-20"
            >
                <div
                    className={`
              relative flex flex-col gap-4 p-5 rounded-xl 
              bg-card-bg border ${colors.border}
              hover:scale-[1.02] transition-all duration-300
              shadow-md h-full
            `}
                >
                    {/* Background decoration - now in its own overflow-hidden wrapper */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                        <div
                            className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} blur-2xl -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                        />
                        {/* Bottom accent - moved here too since it needs overflow containment */}
                        <div
                            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${achievement.category === 'Technical Excellence' ? 'via-yellow-500/60' : 'via-brand-blue/60'
                                } to-transparent`}
                        />
                    </div>
    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-3">
                        {/* Icon + Badge */}
                        <div className="flex items-center justify-between">
                            <div
                                className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}
                            >
                                <Icon size={18} className={colors.text} />
                            </div>
                            <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                                <Calendar size={10} />
                                {achievement.year}
                            </span>
                        </div>
    
                        {/* Title */}
                        <div>
                            <h3 className={`text-lg font-bold text-text-primary mb-1 group-hover:${colors.text} transition-colors`}>
                                {achievement.title}
                            </h3>
                            <p className={`text-sm font-semibold ${colors.text}`}>
                                {achievement.event}
                            </p>
                        </div>
    
                        {/* Description - truncated */}
                        <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                            {achievement.description}
                        </p>
    
                        {/* View Details Link */}
                        <Link
                            href={`/achievements/${achievement.slug}`}
                            className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.text} hover:gap-2 transition-all mt-auto`}
                        >
                            View Details
                            <ChevronRight size={14} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        )
    }
    // Full variant for about page
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="group"
        >
            <div
                className={`
          relative flex flex-col gap-6 p-6 rounded-2xl 
          bg-card-bg border-2 ${colors.border}
          hover:scale-[1.02] transition-all duration-300
          shadow-lg overflow-hidden
        `}
            >
                {/* Background decoration */}
                <div
                    className={`absolute top-0 right-0 w-64 h-64 ${colors.bg} blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                />

                {/* Content Grid - TEXT LEFT, IMAGE RIGHT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">

                    {/* LEFT: Info */}
                    <div className="flex flex-col gap-4 order-2 lg:order-1">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-12 h-12 rounded-xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center flex-shrink-0`}
                            >
                                <Icon size={22} className={colors.text} />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}
                                    >
                                        {achievement.category}
                                    </span>
                                    <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                                        <Calendar size={12} />
                                        {achievement.date}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Title & Event */}
                        <div>
                            <h3
                                className={`text-2xl font-bold text-text-primary mb-2 group-hover:${colors.text} transition-colors duration-300`}
                            >
                                {achievement.title}
                            </h3>
                            <p className={`text-base font-semibold ${colors.text} mb-1`}>
                                {achievement.event}
                            </p>
                            <p className="text-sm text-text-muted">{achievement.organization}</p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-text-secondary leading-relaxed">
                            {achievement.description}
                        </p>

                        {/* Highlights */}
                        <div>
                            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                                Key Highlights
                            </p>
                            <ul className="flex flex-col gap-2">
                                {achievement.highlights.slice(0, 4).map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                        <span className={`${colors.text} shrink-0 mt-0.5 text-xs`}>→</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-border mt-auto">
                            {achievement.certificateUrl && (
                                <CertificateButton
                                    certificateUrl={achievement.certificateUrl}
                                    title={achievement.title}
                                    category={achievement.category}
                                    size="sm"
                                    variant="compact"
                                    className={`${colors.bg} border-2 ${colors.border} ${colors.text}`}
                                />
                            )}
                            <Link
                                href={`/achievements/${achievement.slug}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-primary font-semibold text-sm hover:border-brand-blue/40 transition-all"
                            >
                                View Details
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="w-full h-[280px] lg:h-full min-h-[320px] order-1 lg:order-2">
                        <AwardImage3D
                            src={achievement.image}
                            alt={achievement.title}
                            category={achievement.category}
                        />
                    </div>

                </div>

                {/* Bottom accent line */}
                <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${achievement.category === 'Technical Excellence'
                        ? 'via-yellow-500/60'
                        : 'via-brand-blue/60'
                        } to-transparent`}
                />
            </div>
        </motion.div>
    )
}