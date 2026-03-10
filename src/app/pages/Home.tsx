import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Briefcase,
  FileText,
  FolderOpen,
  Users,
  ShieldCheck,
  Layers,
  Eye,
  type LucideIcon,
} from 'lucide-react'
import { Button, Chip } from '@mui/material'
import brokenImage from '../../assets/broken-image.svg'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

function AnimateIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    hover: 'hover:bg-blue-50',
    hoverBorder: 'hover:border-blue-700',
    iconBg: 'bg-blue-100',
    hoverIconBg: 'group-hover:bg-blue-700',
    accent: 'text-blue-700',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'text-violet-600',
    hover: 'hover:bg-violet-50',
    hoverBorder: 'hover:border-violet-700',
    iconBg: 'bg-violet-100',
    hoverIconBg: 'group-hover:bg-violet-700',
    accent: 'text-violet-700',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    hover: 'hover:bg-emerald-50',
    hoverBorder: 'hover:border-emerald-700',
    iconBg: 'bg-emerald-100',
    hoverIconBg: 'group-hover:bg-emerald-700',
    accent: 'text-emerald-700',
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'text-rose-600',
    hover: 'hover:bg-rose-50',
    hoverBorder: 'hover:border-rose-700',
    iconBg: 'bg-rose-100',
    hoverIconBg: 'group-hover:bg-rose-700',
    accent: 'text-rose-700',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    hover: 'hover:bg-amber-50',
    hoverBorder: 'hover:border-amber-700',
    iconBg: 'bg-amber-100',
    hoverIconBg: 'group-hover:bg-amber-700',
    accent: 'text-amber-700',
  },
  sky: {
    bg: 'bg-sky-50',
    icon: 'text-sky-600',
    hover: 'hover:bg-sky-50',
    hoverBorder: 'hover:border-sky-700',
    iconBg: 'bg-sky-100',
    hoverIconBg: 'group-hover:bg-sky-700',
    accent: 'text-sky-700',
  },
  neutral: {
    bg: 'bg-neutral-100',
    icon: 'text-neutral-600',
    hover: 'hover:bg-neutral-50',
    hoverBorder: 'hover:border-neutral-700',
    iconBg: 'bg-neutral-100',
    hoverIconBg: 'group-hover:bg-neutral-700',
    accent: 'text-neutral-700',
  },
} as const

function QuickLinkCard({
  to,
  icon: Icon,
  title,
  description,
  label,
  color = 'neutral',
}: {
  to: string
  icon: LucideIcon
  title: string
  description: string
  label: string
  color?: keyof typeof colorClasses
}) {
  const { hover, hoverBorder, iconBg, hoverIconBg, accent } =
    colorClasses[color] ?? colorClasses.neutral
  return (
    <Link
      to={to}
      className={`group flex flex-col h-full p-8 border border-neutral-200 rounded-2xl transition-colors bg-white ${hover} ${hoverBorder}`}
    >
      <div
        className={`w-12 h-12 ${iconBg} ${hoverIconBg} rounded-lg flex items-center justify-center mb-6 transition-colors`}
      >
        <Icon
          className={`${accent} group-hover:text-white transition-colors`}
          size={24}
        />
      </div>
      <h3 className="text-2xl mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <span className={`inline-flex items-center gap-2 ${accent}`}>
        {label}
        <ArrowRight size={16} />
      </span>
    </Link>
  )
}

function PhilosophyCard({
  title,
  description,
  icon: Icon,
  color = 'neutral',
}: {
  title: string
  description: React.ReactNode
  icon: LucideIcon
  color?: keyof typeof colorClasses
}) {
  const { bg, icon } = colorClasses[color] ?? colorClasses.neutral
  return (
    <div className="group flex items-start gap-6">
      <div
        className={`flex-shrink-0 w-12 h-12 ${bg} rounded-lg flex items-center justify-center`}
      >
        <Icon className={icon} size={24} />
      </div>
      <div>
        <h3 className="text-2xl mb-1">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative mt-8 lg:mt-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 hero-card rounded-t-2xl py-8 lg:py-16">
          <div className="relative flex flex-col items-center text-center">
            {/* Blobs inside card */}
            <div className="card-blob card-blob-1"></div>
            <div className="card-blob card-blob-2"></div>
            <AnimateIn className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl mb-4">Hi, I'm Shaiz,</h1>
              <p className="text-xl mb-8 max-w-xl">
                I transform complex challenges into clear, intuitive experiences
                through research, strategy and collaboration.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 hover:bg-pink-700 transition-colors"
                >
                  View Case Studies
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 border border-slate-700 text-slate-700 px-6 py-3 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-700 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-8 lg:px-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 rounded-b-2xl py-6 lg:py-8 bg-white">
          <div className="grid md:grid-cols-2 gap-12 mb-5 lg:mb-8">
            <AnimateIn>
              <h2 className="text-4xl mb-2">My philosophy</h2>
              <p className="text-xl">
                Principles I use to deliver intuitive and scalable product
                experiences.
              </p>
            </AnimateIn>

            <div className="flex flex-col gap-8">
              <AnimateIn delay={100}>
                <PhilosophyCard
                  icon={Users}
                  color="blue"
                  title="Collaboration"
                  description="Partner early with users, PMs, Engineering, and QA to align on outcomes. Balance user needs with constraints, timelines, and release realities."
                />
              </AnimateIn>
              <AnimateIn delay={200}>
                <PhilosophyCard
                  icon={ShieldCheck}
                  color="emerald"
                  title="Design for trust"
                  description={
                    <>
                      Build transparency, error prevention, and user control
                      into every flow. Clear confirmations and{' '}
                      <em>emergency exits</em> keep users confident in
                      high-stakes actions.
                    </>
                  }
                />
              </AnimateIn>
              <AnimateIn delay={300}>
                <PhilosophyCard
                  icon={Layers}
                  color="violet"
                  title="Systems thinking"
                  description="Create scalable patterns and reusable components - not one-off screens. Consistency and conventions reduce ambiguity and speed adoption."
                />
              </AnimateIn>
              <AnimateIn delay={400}>
                <PhilosophyCard
                  icon={Eye}
                  color="amber"
                  title="Clarity over cleverness"
                  description="Prioritize clarity and usability over novelty to minimize cognitive load. Actions, labels, and options stay visible or easy to retrieve so users don't have to rely on memory."
                />
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="mt-8 lg:mt-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8 rounded-2xl bg-violet-900/5">
          <AnimateIn className="mb-8">
            <h2 className="text-4xl mb-2">Featured work</h2>
            <p className="text-xl">Recent projects and design solutions</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn delay={100}>
              <Link
                to="/case-studies/fintech-dashboard"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzcyODk0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="FinTech Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-neutral-100 text-sm mb-4 rounded-full">
                    Enterprise SaaS
                  </div>
                  <h3 className="text-2xl mb-3">
                    Content Advisor - AI-Powered SEO Workflow
                  </h3>
                  <p className="text-neutral-600">
                    Redesigning a complex SEO content workflow to help marketers
                    create optimized content faster and with greater confidence.
                  </p>
                </div>
              </Link>
            </AnimateIn>

            <AnimateIn delay={200}>
              <Link
                to="/case-studies/mobile-health"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTAxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mobile Health App"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-neutral-100 text-sm mb-4 rounded-full">
                    Healthcare
                  </div>
                  <h3 className="text-2xl mb-3">
                    Competitive Reporting for Local Listings
                  </h3>
                  <p className="text-neutral-600">
                    Designing scalable competitor insights for multi-location
                    brands, by balancing clarity with API cost and trial
                    guardrails.
                  </p>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="my-8 lg:my-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateIn delay={0} className="h-full">
              <QuickLinkCard
                to="/case-studies"
                icon={FolderOpen}
                color="blue"
                title="Case Studies"
                description="Deep dives into product strategy, research and design processes"
                label="Explore projects"
              />
            </AnimateIn>

            <AnimateIn delay={100} className="h-full">
              <QuickLinkCard
                to="/work-samples"
                icon={Briefcase}
                color="violet"
                title="Work Samples"
                description="A curated selection of UI designs, prototypes and visual work"
                label="View samples"
              />
            </AnimateIn>

            <AnimateIn delay={200} className="h-full">
              <QuickLinkCard
                to="/resume"
                icon={FileText}
                color="emerald"
                title="Resume"
                description="Experience, skills, education and professional background"
                label="Learn more"
              />
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  )
}
