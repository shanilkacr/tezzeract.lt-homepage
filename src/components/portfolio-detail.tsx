import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Portfolio {
  id: string;
  title: string;
  category: string;
  industry: string;
  image: string;
  tags: string[];
  featured: boolean;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialTitle: string;
  color: string;
}

interface PortfolioDetailProps {
  portfolio: Portfolio;
  onClose: () => void;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ portfolio, onClose }) => {
  const colorClasses = {
    blue: {
      accent: 'text-[#0A1A2F] dark:text-blue-400',
      border: 'border-[#0A1A2F]/20 dark:border-blue-500/20',
      gradient: 'from-[#0A1A2F] to-[#0A1A2F]/80 dark:from-blue-500 dark:to-blue-600',
      tag: 'bg-[#0A1A2F]/10 text-[#0A1A2F] dark:bg-blue-500/20 dark:text-blue-300',
      highlight: 'bg-[#0A1A2F]/5 border-[#0A1A2F]/10 dark:bg-blue-500/10 dark:border-blue-500/20',
      bullet: 'text-[#0A1A2F] dark:text-blue-400',
    },
    teal: {
      accent: 'text-[#00C2CB] dark:text-teal-400',
      border: 'border-[#00C2CB]/20 dark:border-teal-500/20',
      gradient: 'from-[#00C2CB] to-[#00C2CB]/80 dark:from-teal-500 dark:to-teal-600',
      tag: 'bg-[#00C2CB]/10 text-[#00C2CB] dark:bg-teal-500/20 dark:text-teal-300',
      highlight: 'bg-[#00C2CB]/5 border-[#00C2CB]/10 dark:bg-teal-500/10 dark:border-teal-500/20',
      bullet: 'text-[#00C2CB] dark:text-teal-400',
    },
  }[portfolio.color];

  const getCategoryLabel = (category: string): string => {
    const labels: { [key: string]: string } = {
      'ui-ux': 'UI/UX Design',
      'web-development': 'Web Development',
      'product-design': 'Product Design',
      'product-development': 'Product Development',
      ecommerce: 'E-commerce',
    };
    return labels[category] || category;
  };

  const getIndustryLabel = (industry: string): string => {
    const labels: { [key: string]: string } = {
      technology: 'Technology',
      finance: 'Finance',
      healthcare: 'Healthcare',
      retail: 'Retail',
      nonprofit: 'Nonprofit',
      'real-estate': 'Real Estate',
    };
    return labels[industry] || industry;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-80 w-full">
        <img
          src={portfolio.image || '/placeholder.svg?height=400&width=600&query=project'}
          alt={portfolio.title}
          className="object-cover w-full h-full"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.gradient} opacity-70`}></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
              {getCategoryLabel(portfolio.category)}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
              {getIndustryLabel(portfolio.industry)}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-2">{portfolio.title}</h2>
          <p className="text-white/90 max-w-3xl">{portfolio.description}</p>
        </div>

        <motion.button
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {portfolio.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                <span
                  className={`inline-block w-8 h-8 rounded-full ${colorClasses.tag} flex items-center justify-center mr-3`}
                >
                  1
                </span>
                Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{portfolio.challenge}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                <span
                  className={`inline-block w-8 h-8 rounded-full ${colorClasses.tag} flex items-center justify-center mr-3`}
                >
                  2
                </span>
                Our Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{portfolio.solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                <span
                  className={`inline-block w-8 h-8 rounded-full ${colorClasses.tag} flex items-center justify-center mr-3`}
                >
                  3
                </span>
                Results
              </h3>
              <ul className="space-y-2">
                {portfolio.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 ${colorClasses.bullet}`}>•</span>
                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className={`rounded-xl ${colorClasses.highlight} border p-6 mb-8`}>
              <blockquote className="relative">
                <div className="absolute -top-2 -left-2 text-4xl text-gray-300 dark:text-gray-600">"</div>
                <p className="text-gray-700 dark:text-gray-300 italic relative z-10 mb-4">{portfolio.testimonial}</p>
                <footer className="text-gray-800 dark:text-white">
                  <p className="font-medium">{portfolio.testimonialAuthor}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{portfolio.testimonialTitle}</p>
                </footer>
              </blockquote>
            </div>

            <div className="rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 p-6">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Need a Similar Solution?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Let's discuss how we can create a tailored solution for your specific needs.
              </p>
              <Link to="/contact" className="inline-block w-full">
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#0A1A2F] to-[#00C2CB] text-white rounded-full font-medium tracking-wide flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <Link
            to={`/portfolio/${portfolio.id}`}
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
          >
            <span>View Full Case Study</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;