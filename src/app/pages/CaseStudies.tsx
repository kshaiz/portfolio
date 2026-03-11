import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudies() {
  return (
    <div className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl mb-8">Case Studies</h1>
          <p className="text-xl text-neutral-600">
            In-depth explorations of design challenges, research processes, and strategic
            solutions that delivered measurable business impact.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group block"
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                    <ImageWithFallback
                      src={study.heroImage}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-4 py-2 bg-neutral-100 text-sm mb-4 rounded-full">
                    {study.category}
                  </div>
                  <h2 className="text-4xl mb-4 group-hover:text-neutral-600 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-xl text-neutral-600 mb-8">
                    {study.subtitle}
                  </p>
                  <p className="text-neutral-700 mb-8">
                    {study.overview}
                  </p>
                  <div className="flex flex-wrap gap-8 text-sm text-neutral-600 mb-8">
                    <div>
                      <div className="text-neutral-900 font-medium mb-2">Role</div>
                      <div>{study.role}</div>
                    </div>
                    <div>
                      <div className="text-neutral-900 font-medium mb-2">Duration</div>
                      <div>{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-neutral-900 font-medium mb-2">Platform</div>
                      <div>{study.platform}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-neutral-900 group-hover:gap-3 transition-all">
                    Read case study
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}