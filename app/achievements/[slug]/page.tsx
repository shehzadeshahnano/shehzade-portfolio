import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Award, Building2, ArrowLeft, CheckCircle, Eye } from 'lucide-react'
import { getAchievementBySlug, achievements } from '@/data/achievements'
import Button from '@/components/shared/Button'
import AwardImage3D from '@/components/canvas/AwardImage3D'
import type { Metadata } from 'next'
import CertificateButton from '@/components/shared/CertificateButton'

interface AchievementPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return achievements.map((achievement) => ({
        slug: achievement.slug,
    }))
}

export async function generateMetadata({ params }: AchievementPageProps): Promise<Metadata> {
    const { slug } = await params
    const achievement = getAchievementBySlug(slug)

    if (!achievement) {
        return { title: 'Achievement Not Found' }
    }

    return {
        title: `${achievement.title} - Achievements`,
        description: achievement.description,
    }
}

export default async function AchievementDetailPage({ params }: AchievementPageProps) {
    const { slug } = await params
    const achievement = getAchievementBySlug(slug)

    if (!achievement) {
        notFound()
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Technical Excellence':
                return {
                    text: 'text-yellow-500',
                    border: 'border-yellow-500/30',
                    bg: 'bg-yellow-500/10',
                    badge: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
                    accent: 'via-yellow-500/60',
                    glow: 'shadow-yellow-500/20',
                }
            case 'Individual Recognition':
                return {
                    text: 'text-brand-blue',
                    border: 'border-brand-blue/30',
                    bg: 'bg-brand-blue/10',
                    badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
                    accent: 'via-brand-blue/60',
                    glow: 'shadow-brand-blue/20',
                }
            case 'Team Recognition':
                return {
                    text: 'text-purple-500',
                    border: 'border-purple-500/30',
                    bg: 'bg-purple-500/10',
                    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
                    accent: 'via-purple-500/60',
                    glow: 'shadow-purple-500/20',
                }
            default:
                return {
                    text: 'text-brand-blue',
                    border: 'border-brand-blue/30',
                    bg: 'bg-brand-blue/10',
                    badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
                    accent: 'via-brand-blue/60',
                    glow: 'shadow-brand-blue/20',
                }
        }
    }

    const colors = getCategoryColor(achievement.category)

    return (
        <>
            {/* Hero Section */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container-width">
                    {/* Back Button */}
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-blue transition-colors mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to About
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Content */}
                        <div className="flex flex-col gap-6">
                            {/* Category Badge + Date */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${colors.badge}`}>
                                    {achievement.category}
                                </span>
                                <span className="text-sm text-text-muted flex items-center gap-2">
                                    <Calendar size={16} />
                                    {achievement.date}
                                </span>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-black text-text-primary mb-4 leading-tight">
                                    {achievement.title}
                                </h1>
                                <p className={`text-xl font-semibold ${colors.text} mb-2`}>
                                    {achievement.event}
                                </p>
                                <p className="text-base text-text-secondary flex items-center gap-2">
                                    <Building2 size={18} />
                                    {achievement.organization}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {achievement.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {achievement.certificateUrl && (
                                    <CertificateButton
                                        certificateUrl={achievement.certificateUrl}
                                        title={achievement.title}
                                        category={achievement.category}
                                        size="md"
                                        className={`${colors.bg} border-2 ${colors.border} ${colors.text}`}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Right: 3D Image */}
                        <div className={`relative w-full h-[400px] lg:h-[500px] rounded-2xl shadow-2xl ${colors.glow}`}>
                            <AwardImage3D
                                src={achievement.image}
                                alt={achievement.title}
                                category={achievement.category}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of your sections remain the same... */}
            <section className="section-padding bg-card-bg">
                <div className="container-width">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Award size={28} className={colors.text} />
                            <h2 className="text-3xl font-bold text-text-primary">
                                Key <span className="brand-text">Highlights</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {achievement.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-4 p-5 rounded-xl bg-background border ${colors.border} hover:scale-105 transition-all duration-300 group`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                    >
                                        <CheckCircle size={18} className={colors.text} />
                                    </div>
                                    <p className="text-base text-text-secondary leading-relaxed">
                                        {highlight}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`mt-12 h-1 w-full bg-gradient-to-r from-transparent ${colors.accent} to-transparent rounded-full`}
                        />
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-card-bg border border-border text-center hover:border-brand-blue/30 transition-colors">
                                <Calendar size={24} className={`${colors.text} mx-auto mb-3`} />
                                <p className="text-2xl font-black brand-text mb-1">{achievement.year}</p>
                                <p className="text-sm text-text-muted">Award Year</p>
                            </div>

                            <div className="p-6 rounded-xl bg-card-bg border border-border text-center hover:border-brand-blue/30 transition-colors">
                                <Award size={24} className={`${colors.text} mx-auto mb-3`} />
                                <p className="text-lg font-bold text-text-primary mb-1">GT Connect</p>
                                <p className="text-sm text-text-muted">Annual Event</p>
                            </div>

                            <div className="p-6 rounded-xl bg-card-bg border border-border text-center hover:border-brand-blue/30 transition-colors">
                                <Building2 size={24} className={`${colors.text} mx-auto mb-3`} />
                                <p className="text-lg font-bold text-text-primary mb-1">Guava Trees</p>
                                <p className="text-sm text-text-muted">Organization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-card-bg">
                <div className="container-width">
                    <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
                            Let&apos;s work <span className="brand-text">together</span>
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Interested in collaborating or learning more about my work?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary" size="lg">
                                Get In Touch
                            </Button>
                            <Button href="/projects" variant="outline" size="lg">
                                View Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}