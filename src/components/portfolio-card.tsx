import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

interface PortfolioCardProps {
  portfolio: Portfolio;
  featured?: boolean;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, featured = false, onClick }) => {
  const colorClasses = {
    blue: {
      tag: 'bg-[#0A1A2F]/10 text-[#0A1A2F] dark:bg-blue-500/20 dark:text-blue-300',
      overlay: 'from-[#0A1A2F]/80 to-[#0A1A2F]/20',
    },
    teal: {
      tag: 'bg-[#00C2CB]/10 text-[#00C2CB] dark:bg-teal-500/20 dark:text-teal-300',
      overlay: 'from-[#00C2CB]/80 to-[#00C2CB]/20',
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

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm cursor-pointer"
      onClick={onClick}
      data-cursor-hover="true"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <img
          src={portfolio.image || '/placeholder.svg?height=400&width=600&query=project'}
          alt={portfolio.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${colorClasses.overlay} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div className="bg-white rounded-full p-3" whileHover={{ scale: 1.1, rotate: 10 }}>
            <ArrowRight className="h-6 w-6 text-gray-800" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.tag}`}>
            {getCategoryLabel(portfolio.category)}
          </span>
          {featured &&
            portfolio.tags.slice(0, 1).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
        </div>

        <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">{portfolio.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{portfolio.description}</p>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">View Project</span>
          <motion.div
            className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 group-hover:bg-[#00C2CB]/10 group-hover:text-[#00C2CB] dark:group-hover:bg-teal-500/20 dark:group-hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;