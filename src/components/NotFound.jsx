import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <AlertTriangle className="w-20 h-20 text-primary mb-6 animate-bounce" />

      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-base-content mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
