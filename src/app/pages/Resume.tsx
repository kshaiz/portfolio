import { useState } from 'react'
import { Download, Mail, Loader2, ExternalLink } from 'lucide-react'
import profilePic from '../../assets/profile-pic.jpg'
import resumePdf from '../../assets/shaiz-kunhimohammed-resume.pdf'
import unswLogo from '../../assets/resume/unsw-logo.png'
import iitgLogo from '../../assets/resume/iitg-logo.png'

export function Resume() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => setDownloading(false), 3000)
  }

  const experience = [
    {
      title: 'Sr. Product Designer',
      company: 'BrightEdge',
      url: 'https://www.brightedge.com',
      period: 'Apr 2022 - Present',
      location: 'Toronto, Canada',
      flag: '🇨🇦',
      description:
        'Improved and expanded core platform products, including reporting, content management and map listings management, while introducing AI-powered workflows to support enterprise customers. Collaborated closely with product and engineering to evolve the platform based on real user behavior and feedback.',
      achievements: [
        'Redesigned reporting and listings management experiences, increasing user engagement by <span class="font-bold ">250-400%</span>',
        'Integrated <span class="font-bold ">generative AI</span> into SEO workflows to improve content performance and efficiency',
        'Standardized reusable UI components to improve consistency and scalability across the platform',
        'Principal designer on a feature associated with <span class="font-bold ">10% higher client renewal rates</span>  when enabled',
      ],
    },
    {
      title: 'Lead Product Designer',
      company: 'Arcesium',
      url: 'https://www.arcesium.com',
      period: 'Jul 2015 - Dec 2021',
      location: 'Hyderabad, India',
      flag: '🇮🇳',
      achievements: [
        '<span class="font-bold">Owned the overall design direction</span> at the firm, leading <span class="font-bold">end-to-end product design</span> for platforms used by top-tier financial institutions—including hedge funds, banks, institutional asset managers, and private equity firms.',
        '<span class="font-bold">Built and launched the firm\'s design system</span> to elevate visual quality and ensure consistency in UI patterns and interactions across all applications.',
        '<span class="font-bold">Increased design throughput across the team</span>, directly improving time-to-market for multiple product initiatives.',
      ],
    },
    {
      title: 'Sr. Product Designer',
      company: 'D.E. Shaw India',
      url: 'https://www.deshawindia.com/',
      period: 'Jan 2015 - Jun 2015',
      location: 'Hyderabad, India',
      flag: '🇮🇳',
      achievements: [
        'Took on a foundational design role during the pre-launch phase of Arcesium, focusing on <span class="font-bold">establishing core design frameworks</span> for the company\'s initial suite of applications',
      ],
    },
    {
      title: 'UX Designer',
      company: 'PubMatic [Nasdaq: PUBM]',
      url: 'https://www.pubmatic.com/',
      period: 'Jan 2014 - Jan 2015',
      location: 'Pune, India',
      flag: '🇮🇳',
      achievements: [
        'Partnered with a designer and lead developer to redesign the firm\'s reporting and analytics platform, exploring innovative approaches such as <span class="font-bold">natural language processing (NLP)</span> to enable query-based data exploration.',
        '<span class="font-bold">Led user research efforts</span> to uncover insights that shaped product direction, particularly in refining NLP interactions to support users with varying levels of technical expertise.',
        'Translated research findings into <span class="font-bold">clear interaction and UI improvements</span>, improving feature discoverability and overall usability.',
        'Collaborated with designers and engineers to <span class="font-bold">build a reusable AngularJS UI component library</span>, creating scalable interface components that improved development efficiency and product consistency.',
      ],
    },
    {
      title: 'UX Designer',
      company: 'Mettl (now Mercer Mettl)',
      url: 'https://www.mettl.com/',
      period: 'Mar 2013 - Jan 2014',
      location: 'Gurugram, India',
      flag: '🇮🇳',
    },
    {
      title: 'UX Designer',
      company: 'Kwik Kopy Bondi Junction',
      period: 'Dec 2010 - Jan 2013',
      location: 'Sydney, Australia',
      flag: '🇦🇺',
    },
    {
      title: 'UI Designer',
      company: 'CarbonBlack',
      period: 'Oct 2008 - Nov 2010',
      location: 'Sydney, Australia',
      flag: '🇦🇺',
    },
  ]

  const education = [
    {
      degree: 'Master of Design',
      school: 'College of Fine Arts, University of New South Wales',
      url: 'https://www.unsw.edu.au/arts-design-architecture/our-schools/art-design',
      year: 'Aug 2008 - July 2010',
      logo: unswLogo,
    },
    {
      degree: 'Bachelor of Design',
      school: 'Indian Institute of Technology Guwahati',
      url: 'https://www.iitg.ac.in',
      year: 'Jul 2004 - May 2007',
      logo: iitgLogo,
    },
  ]

  const skills = {
    Design: [
      'User Research',
      'Information Architecture',
      'Interaction Design',
      'Visual Design',
      'Prototyping',
      'Usability Testing',
    ],
    Strategy: [
      'Product Strategy',
      'Design Leadership',
      'Stakeholder Management',
      'Roadmap Planning',
      'Design Systems',
    ],
    Tools: ['Figma', 'Sketch', 'Photoshop', 'Illustrator', 'InDesign'],
    Development: ['HTML/CSS', 'React Basics', 'Git/GitHub'],
  }

  const speaking = [
    {
      title: 'Building Design Systems that Scale',
      event: 'Config 2024',
      year: '2024',
    },
    {
      title: 'Research-Driven Design in Healthcare',
      event: 'UX Healthcare Summit',
      year: '2023',
    },
    {
      title: 'The Future of Enterprise UX',
      event: 'Design Leadership Forum',
      year: '2022',
    },
  ]

  return (
    <div className="py-16 lg:py-32">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 pb-16 border-b border-neutral-200">
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Profile photo"
              className="w-32 h-32 rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl mb-2">Shaiz Kunhimohammed</h1>
            <p className="text-2xl text-neutral-600 mb-8">
              Product Designer <span className="text-neutral-300">|</span>{' '}
              <span className="text-neutral-600">Toronto</span>
            </p>
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl">
              I am a Product Designer with 10+ years of experience designing
              enterprise platforms across fintech, martech, and SaaS analytics.
              I specialize in simplifying complex workflows and building
              scalable systems that help users get work done.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Mail size={20} />
                k.shaiz@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/shaizk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <a
            href={resumePdf}
            download="shaiz-kunhimohammed-resume.pdf"
            onClick={downloading ? (e) => e.preventDefault() : handleDownload}
            className={`inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 transition-colors ${downloading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-pink-700'}`}
          >
            {downloading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download size={20} />
                Download PDF
              </>
            )}
          </a>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex items-start gap-4">
                  {job.flag && (
                    <span className="text-2xl flex-shrink-0 leading-tight">
                      {job.flag}
                    </span>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-2xl">{job.title}</h3>
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-lg text-pink-600 hover:text-pink-700 transition-colors"
                        >
                          {job.company}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-lg text-neutral-600">
                          {job.company}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-neutral-500 mb-4">
                      <span>{job.period}</span>
                      {job.location && (
                        <>
                          <span>|</span>
                          <span>{job.location}</span>
                        </>
                      )}
                    </div>
                    {job.description && (
                      <p
                        className="text-neutral-700 mb-4"
                        dangerouslySetInnerHTML={{ __html: job.description }}
                      />
                    )}
                    {job.achievements && (
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-4 text-neutral-700">
                            <span className="text-neutral-400">•</span>
                            <span
                              dangerouslySetInnerHTML={{ __html: achievement }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16 py-16 border-y border-neutral-200">
          <h2 className="text-3xl mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start gap-4">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-12 h-12 flex-shrink-0 object-contain mt-1"
                  />
                )}
                <div>
                  <h3 className="text-xl mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-4 text-neutral-600">
                    {edu.url ? (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors"
                      >
                        {edu.school}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span>{edu.school}</span>
                    )}
                    <span>•</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
