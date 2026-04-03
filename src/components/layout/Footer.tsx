import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <Brain className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-lg font-bold text-gray-900 tracking-tight">MCAT Journey</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
            <Link to="/about" className="hover:text-gray-900">About</Link>
            <Link to="/study-plan" className="hover:text-gray-900">Study Plan</Link>
            <Link to="/resources" className="hover:text-gray-900">Resources</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} MCAT Journey Blog. All rights reserved.
          </p>
          <p className="mt-4 text-center text-sm text-gray-400 md:mt-0 md:text-right">
            Not affiliated with the AAMC.
          </p>
        </div>
      </div>
    </footer>
  );
}
