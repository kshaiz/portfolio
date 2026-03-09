import { Link } from "react-router";
import { ArrowRight, Briefcase, FileText, FolderOpen } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-neutral-900 text-white text-sm mb-6 rounded-full">
                Senior Principal Designer
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Creating experiences that matter
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-xl">
                I design human-centered digital experiences that solve complex problems
                and drive business outcomes through research, strategy, and craft.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  View Case Studies
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI4Njc3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design workspace"
                className="rounded-2xl w-full aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/case-studies"
              className="group p-8 border border-neutral-200 rounded-2xl hover:border-neutral-900 transition-colors"
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
                <FolderOpen className="text-neutral-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-2xl mb-3">Case Studies</h3>
              <p className="text-neutral-600 mb-4">
                Deep dives into product strategy, research, and design processes
              </p>
              <span className="inline-flex items-center gap-2 text-neutral-900">
                Explore projects
                <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              to="/work-samples"
              className="group p-8 border border-neutral-200 rounded-2xl hover:border-neutral-900 transition-colors"
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
                <Briefcase className="text-neutral-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-2xl mb-3">Work Samples</h3>
              <p className="text-neutral-600 mb-4">
                A curated selection of UI designs, prototypes, and visual work
              </p>
              <span className="inline-flex items-center gap-2 text-neutral-900">
                View samples
                <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              to="/resume"
              className="group p-8 border border-neutral-200 rounded-2xl hover:border-neutral-900 transition-colors"
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
                <FileText className="text-neutral-900 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-2xl mb-3">Resume</h3>
              <p className="text-neutral-600 mb-4">
                Experience, skills, education, and professional background
              </p>
              <span className="inline-flex items-center gap-2 text-neutral-900">
                Learn more
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-3">Featured Work</h2>
              <p className="text-xl text-neutral-600">
                Recent projects and design solutions
              </p>
            </div>
            <Link
              to="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
            >
              View all projects
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                <h3 className="text-2xl mb-3">FinTech Analytics Dashboard</h3>
                <p className="text-neutral-600">
                  Redesigning a complex financial analytics platform to improve decision-making
                  and reduce cognitive load for enterprise users.
                </p>
              </div>
            </Link>

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
                <h3 className="text-2xl mb-3">Mobile Health Companion</h3>
                <p className="text-neutral-600">
                  Creating an accessible mobile health app that helps users manage chronic
                  conditions with evidence-based interventions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}