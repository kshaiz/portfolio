import { Download, Mail, Linkedin, Globe } from "lucide-react";
import profilePic from "../../assets/profile-pic.jpg";

export function Resume() {
  const experience = [
    {
      title: "Senior Principal Designer",
      company: "Tech Company Inc.",
      period: "2021 - Present",
      description: "Leading design strategy for enterprise products serving 5M+ users. Established and scaled design systems practice. Mentoring team of 12 designers.",
      achievements: [
        "Built design system adopted across 15+ products",
        "Led redesign that increased user satisfaction by 40%",
        "Established UX research practice from scratch"
      ]
    },
    {
      title: "Principal Product Designer",
      company: "Startup Co.",
      period: "2018 - 2021",
      description: "Led product design for B2B SaaS platform. Grew design team from 2 to 8 people. Defined design process and culture.",
      achievements: [
        "Designed features that drove 200% growth in ARR",
        "Reduced user onboarding time by 65%",
        "Conducted 100+ user interviews and usability tests"
      ]
    },
    {
      title: "Senior UX Designer",
      company: "Digital Agency",
      period: "2015 - 2018",
      description: "Designed web and mobile experiences for Fortune 500 clients across healthcare, finance, and retail industries.",
      achievements: [
        "Led UX for projects with budgets up to $5M",
        "Managed client relationships and presentations",
        "Won industry awards for mobile health app design"
      ]
    },
    {
      title: "UX Designer",
      company: "Consulting Firm",
      period: "2012 - 2015",
      description: "Worked on diverse projects from e-commerce to enterprise software. Conducted user research and created design solutions.",
      achievements: [
        "Delivered 20+ successful client projects",
        "Specialized in accessibility and inclusive design",
        "Developed expertise in design thinking facilitation"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Human-Computer Interaction",
      school: "Carnegie Mellon University",
      year: "2012"
    },
    {
      degree: "Bachelor of Fine Arts, Graphic Design",
      school: "Rhode Island School of Design",
      year: "2010"
    }
  ];

  const skills = {
    "Design": ["User Research", "Information Architecture", "Interaction Design", "Visual Design", "Prototyping", "Usability Testing"],
    "Strategy": ["Product Strategy", "Design Leadership", "Stakeholder Management", "Workshop Facilitation", "Roadmap Planning"],
    "Tools": ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "ProtoPie", "Miro", "Dovetail"],
    "Development": ["HTML/CSS", "React Basics", "Design Systems", "Git/GitHub"]
  };

  const speaking = [
    {
      title: "Building Design Systems that Scale",
      event: "Config 2024",
      year: "2024"
    },
    {
      title: "Research-Driven Design in Healthcare",
      event: "UX Healthcare Summit",
      year: "2023"
    },
    {
      title: "The Future of Enterprise UX",
      event: "Design Leadership Forum",
      year: "2022"
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
            <h1 className="text-5xl mb-4">Your Name</h1>
            <p className="text-2xl text-neutral-600 mb-6">Senior Principal Designer</p>
            <p className="text-lg text-neutral-700 mb-6 max-w-3xl">
              Passionate about creating accessible, user-centered experiences that solve real
              problems. 15+ years designing digital products across healthcare, fintech, and
              enterprise software. Proven leader in building and scaling design teams and systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Mail size={20} />
                your.email@example.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Globe size={20} />
                Portfolio
              </a>
            </div>
          </div>
          <button className="flex-shrink-0 inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Experience</h2>
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <h3 className="text-2xl">{job.title}</h3>
                  <span className="text-lg text-neutral-600">{job.company}</span>
                  <span className="text-neutral-500">{job.period}</span>
                </div>
                <p className="text-neutral-700 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-neutral-700">
                      <span className="text-neutral-400">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
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
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm"
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
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl mb-1">{edu.degree}</h3>
                <div className="flex flex-wrap gap-4 text-neutral-600">
                  <span>{edu.school}</span>
                  <span>•</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking */}
        <section className="mb-16 py-16 border-y border-neutral-200">
          <h2 className="text-3xl mb-8">Speaking & Publications</h2>
          <div className="space-y-4">
            {speaking.map((talk, index) => (
              <div key={index} className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg mb-1">{talk.title}</h3>
                  <p className="text-neutral-600">{talk.event}</p>
                </div>
                <span className="text-neutral-500 flex-shrink-0">{talk.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <h2 className="text-3xl mb-8">Awards & Recognition</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700">Webby Award for Best Mobile Health App (2023)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700">Featured in "Design Systems That Scale" by InVision (2022)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700">UX Design Awards - Gold Winner, Enterprise Software (2021)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700">AIGA Design Excellence Award (2019)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}