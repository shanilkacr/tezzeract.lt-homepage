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
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="tezzeracth2">404</h1>
        <p className="text-white text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-2 pb-2 sm:mt-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 ">
          Return to Home
        </a>
      </div>
    </div>

  );
};

export default NotFound;
