import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

interface WorkSample {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

const workSamples: WorkSample[] = [
  {
    id: "1",
    title: "Mobile Banking Redesign",
    description: "Complete visual redesign of mobile banking app with focus on accessibility and modern aesthetics",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTAxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UI Design", "Mobile", "Fintech"]
  },
  {
    id: "2",
    title: "Data Visualization Components",
    description: "Library of reusable chart and graph components for enterprise analytics platform",
    category: "Component Design",
    image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzcyODk0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Components", "Data Viz", "Design System"]
  },
  {
    id: "3",
    title: "User Research Workshop",
    description: "Facilitated design thinking workshop with cross-functional stakeholders",
    category: "Facilitation",
    image: "https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjkyNTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Research", "Facilitation", "Strategy"]
  },
  {
    id: "4",
    title: "Healthcare Dashboard Prototype",
    description: "Interactive prototype for patient monitoring dashboard with real-time data",
    category: "Prototyping",
    image: "https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc3MjkyNTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Prototyping", "Healthcare", "Dashboard"]
  },
  {
    id: "5",
    title: "Design System Documentation",
    description: "Comprehensive documentation site for enterprise design system",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI4Njc3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Design System", "Documentation", "Web"]
  },
  {
    id: "6",
    title: "User Interview Synthesis",
    description: "Affinity mapping and insights from 25 user interviews across 3 personas",
    category: "Research",
    image: "https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjkyNTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Research", "Synthesis", "UX"]
  }
];

export function WorkSamples() {
  const categories = ["All", "UI Design", "Component Design", "Prototyping", "Research", "Design Systems"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredSamples = activeCategory === "All"
    ? workSamples
    : workSamples.filter((s) => s.category === activeCategory);

  const allImages = filteredSamples.map(sample => ({
    src: sample.image,
    alt: sample.title
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => Math.min(prev + 1, allImages.length - 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl mb-8">Work Samples</h1>
          <p className="text-xl text-neutral-600">
            A curated collection of UI designs, prototypes, research artifacts, and design
            system work from various projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16 pb-8 border-b border-neutral-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                category === activeCategory
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Samples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSamples.map((sample, index) => (
            <div
              key={sample.id}
              className="group cursor-pointer"
            >
              <div 
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-4"
                onClick={() => openLightbox(index)}
              >
                <ImageWithFallback
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="inline-block px-4 py-2 bg-neutral-100 text-sm mb-4 rounded-full">
                {sample.category}
              </div>
              <h3 className="text-xl mb-2 group-hover:text-neutral-600 transition-colors">
                {sample.title}
              </h3>
              <p className="text-neutral-600 mb-4">{sample.description}</p>
              <div className="flex flex-wrap gap-2">
                {sample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-500 border border-neutral-300 px-2 py-2 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Note */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl text-center">
          <ExternalLink className="mx-auto mb-4 text-neutral-600" size={32} />
          <h3 className="text-2xl mb-4">More work available upon request</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Due to confidentiality agreements, some projects cannot be displayed publicly.
            I'm happy to share additional work samples and discuss specific projects in more detail.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
}