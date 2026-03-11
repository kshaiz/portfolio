import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LightboxProps {
  images: { src: string; alt: string; title?: string; videoUrl?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrevious }: LightboxProps) {
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10">
        <p className="text-white/60 text-sm">{currentIndex + 1} of {images.length}</p>
      </div>

      {/* Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Next button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Image */}
      <div
        className="flex flex-col items-center max-w-7xl mx-auto px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImage.videoUrl ? (
          <iframe
            src={currentImage.videoUrl}
            className="w-[80vw] max-w-4xl aspect-video rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <ImageWithFallback
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-cover rounded-lg"
          />
        )}
        <div className="mt-3 text-center">
          {currentImage.title && (
            <p className="text-white text-base font-medium">{currentImage.title}</p>
          )}
          {currentImage.alt && (
            <p className="text-white/60 text-sm mt-1" dangerouslySetInnerHTML={{ __html: currentImage.alt }} />
          )}
        </div>
      </div>
    </div>
  );
}
