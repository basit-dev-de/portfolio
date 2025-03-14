
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="inline-block w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-5xl font-bold mb-6 animate-float">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Page Not Found</h1>
          <p className="text-foreground/70 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2 mx-auto"
        >
          <ArrowLeft size={16} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
