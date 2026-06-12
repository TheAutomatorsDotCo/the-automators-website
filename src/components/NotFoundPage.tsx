import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, ArrowRight } from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our case studies or return to the homepage."
        path="/404"
      />
      <StarsCanvas />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-8xl sm:text-9xl font-bold gradient-text mb-6">404</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Page Not Found
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 mb-12 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center space-x-3 btn-secondary px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <BookOpen className="w-5 h-5" />
              <span>View Case Studies</span>
            </Link>
          </div>

          <div className="mt-16 glass rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Popular Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/services" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="text-white/80 group-hover:text-white">Our Services</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80" />
              </Link>
              <Link to="/case-studies" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="text-white/80 group-hover:text-white">Case Studies</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80" />
              </Link>
              <Link to="/pricing" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="text-white/80 group-hover:text-white">Pricing</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80" />
              </Link>
              <Link to="/contact" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="text-white/80 group-hover:text-white">Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
