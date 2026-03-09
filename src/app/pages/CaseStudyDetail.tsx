import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl mb-4">Case study not found</h1>
        <Link to="/case-studies" className="text-neutral-600 hover:text-neutral-900">
          Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to case studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <div className="inline-block px-3 py-1 bg-neutral-100 text-sm mb-6 rounded-full">
              {study.category}
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6">{study.title}</h1>
            <p className="text-2xl text-neutral-600">{study.subtitle}</p>
          </div>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 mb-12">
            <ImageWithFallback
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-4 gap-8 py-12 border-y border-neutral-200">
            <div>
              <div className="text-sm text-neutral-600 mb-2">Role</div>
              <div className="text-lg">{study.role}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-600 mb-2">Team</div>
              <div className="text-lg">{study.team}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-600 mb-2">Duration</div>
              <div className="text-lg">{study.duration}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-600 mb-2">Platform</div>
              <div className="text-lg">{study.platform}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-6">Overview</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">{study.overview}</p>
        </div>
      </div>

      {/* Challenge */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-6">The Challenge</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">{study.challenge}</p>
        </div>
      </div>

      {/* Approach */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-6">Approach</h2>
          <ul className="space-y-4">
            {study.approach.map((item, index) => (
              <li key={index} className="flex gap-4">
                <CheckCircle2 className="flex-shrink-0 mt-1 text-neutral-900" size={24} />
                <span className="text-lg text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-4">{study.research.title}</h2>
          <p className="text-lg text-neutral-700 mb-8">{study.research.description}</p>
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl mb-4">Key Findings</h3>
            <ul className="space-y-3">
              {study.research.findings.map((finding, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-4">{study.solution.title}</h2>
          <p className="text-lg text-neutral-700 mb-8">{study.solution.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {study.solution.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <CheckCircle2 className="mb-3 text-neutral-900" size={24} />
                <p className="text-neutral-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl mb-4">Impact</h2>
            <p className="text-lg text-neutral-600">
              The redesign delivered significant improvements across key metrics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {study.impact.map((item, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8">
                <div className="text-4xl lg:text-5xl mb-3">{item.value}</div>
                <div className="text-xl mb-3">{item.metric}</div>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learnings */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl mb-6">Key Learnings</h2>
          <ul className="space-y-6">
            {study.learnings.map((learning, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-neutral-700 pt-1">{learning}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Case Study */}
      <div className="py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            View all case studies
            <ArrowLeft size={20} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}