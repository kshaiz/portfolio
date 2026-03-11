import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-3xl mb-8">Page not found</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <Home size={20} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
