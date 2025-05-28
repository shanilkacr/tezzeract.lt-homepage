
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Filter } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"
import  PortfolioDetail  from "@/components/portfolio-detail"


// Portfolio data
const portfolioItems = [
  {
    id: "beentouch-app",
    title: "Beentouch Mobile App",
    category: "product-design",
    industry: "technology",
    image: "/mobile-app-interface.png",
    tags: ["UI/UX Design", "Mobile App", "Product Development"],
    featured: true,
    description:
      "A comprehensive redesign of the Beentouch mobile application, focusing on improving user experience and engagement metrics.",
    challenge:
      "Beentouch needed to revamp their mobile application to improve user engagement and retention rates, which had been declining over the previous quarters.",
    solution:
      "We conducted extensive user research and competitive analysis to identify pain points and opportunities. Our team then redesigned the entire user interface with a focus on intuitive navigation, visual hierarchy, and modern aesthetics.",
    results: [
      "42% increase in user engagement",
      "37% reduction in user drop-off",
      "4.8/5 average app store rating (up from 3.6)",
    ],
    testimonial:
      "The Tezzeract team approached our project with a highly collaborative approach, taking the time to fully understand our mission, values, and audience. Through this understanding, they were able to develop a visual identity and communication strategy that perfectly reflects who we are and what we stand for. In addition to their technical expertise, their responsiveness and attention to detail made the entire process smooth and enjoyable.",
    testimonialAuthor: "Gabriele Mirabile",
    testimonialTitle: "Project Manager, Beentouch",
    color: "blue",
  },
  {
    id: "heifer-website",
    title: "Heifer International Website",
    category: "web-development",
    industry: "nonprofit",
    image: "/nonprofit-website-design.png",
    tags: ["Web Development", "UI/UX Design", "Donation Platform"],
    featured: false,
    description:
      "A complete website redesign and development project for Heifer International, focusing on improving donation conversion rates and storytelling.",
    challenge:
      "Heifer International needed to modernize their digital presence and create a more effective donation platform to support their global initiatives.",
    solution:
      "We developed a custom WordPress solution with an intuitive donation system, compelling storytelling components, and robust analytics integration to track performance.",
    results: [
      "68% increase in online donations",
      "52% improvement in page load speed",
      "3.2x increase in average time on site",
    ],
    testimonial:
      "Working with Tezzeract on our regional communications strategy in Asia has been an exceptional experience. Their team consistently delivered high-quality, impactful content, including carousels and videos, tailored to resonate with our diverse audiences. Reliable, responsive, and creative, Tezzeract's thoughtful approach to our mission has significantly enhanced our digital presence.",
    testimonialAuthor: "Gurpreet Bhatia",
    testimonialTitle: "Regional Communications Director - Asia, Heifer International",
    color: "teal",
  },
  {
    id: "panomatics-vr",
    title: "Panomatics VR Experience",
    category: "product-development",
    industry: "real-estate",
    image: "/placeholder.svg?height=400&width=600&query=virtual reality real estate tour",
    tags: ["VR Development", "3D Modeling", "Interactive Experience"],
    featured: false,
    description:
      "An immersive virtual reality platform for real estate property tours, allowing potential buyers to explore properties remotely.",
    challenge:
      "Panomatics needed a high-quality VR solution that would allow real estate agents to showcase properties virtually during the pandemic and beyond.",
    solution:
      "We developed a custom VR platform with photorealistic 3D modeling, interactive hotspots, and seamless navigation that works across multiple VR devices and web browsers.",
    results: [
      "85% reduction in unnecessary in-person viewings",
      "47% faster sales cycle",
      "28% increase in international buyer engagement",
    ],
    testimonial:
      "Tezzeract has been an invaluable partner in optimizing our website performance and developing several projects from scratch. Their team's communication was consistently clear and proactive, ensuring that we were informed and aligned every step of the way. The quality of their deliverables was outstanding, reflecting a high standard of detail and thoroughness.",
    testimonialAuthor: "Marius Fittler",
    testimonialTitle: "Creative Director, Panomatics VR International",
    color: "blue",
  },
  {
    id: "workparadise",
    title: "Workparadise.asia Website Optimization",
    category: "web-development",
    industry: "coworking",
    image: "/placeholder.svg?height=400&width=600&query=coworking space website",
    tags: ["Web Development", "Performance Optimization", "UI/UX Improvements"],
    featured: false,
    description:
      "Comprehensive optimization of a coworking space website with significant performance and user experience improvements.",
    challenge:
      "The initial website had loading and responsive issues with less than 50 on Google Lighthouse speed insights, affecting user experience and conversion rates.",
    solution:
      "We optimized the website speed, fixed layout and UI/UX issues, and implemented responsive design improvements to enhance the overall user experience.",
    results: [
      "Significant improvement in Google Lighthouse score",
      "Enhanced mobile responsiveness",
      "Improved user engagement metrics",
    ],
    testimonial:
      "The Tezzeract team transformed our website from a slow, problematic platform to a high-performing digital asset. Their technical expertise and attention to detail resulted in a significantly improved user experience that has directly impacted our business results.",
    testimonialAuthor: "Client Representative",
    testimonialTitle: "Workparadise.asia",
    color: "teal",
  },
  {
    id: "metathingz",
    title: "Metathingz.xyz Crypto Agency",
    category: "digital-strategy",
    industry: "cryptocurrency",
    image: "/placeholder.svg?height=400&width=600&query=crypto marketing website",
    tags: ["Digital Strategy", "Web Development", "Blockchain Marketing"],
    featured: false,
    description:
      "Development of a comprehensive digital presence for a crypto-digital agency offering marketing and PR solutions for Web 3.0/Blockchain based companies.",
    challenge:
      "Creating a digital platform that effectively communicates complex blockchain marketing services to potential clients in Europe and the United States.",
    solution:
      "We developed a strategic digital presence with clear service offerings, educational content, and conversion-focused user journeys tailored to the blockchain industry.",
    results: [
      "Increased client acquisition from digital channels",
      "Improved understanding of service offerings",
      "Enhanced brand positioning in the blockchain marketing space",
    ],
    testimonial:
      "Tezzeract delivered a digital platform that perfectly captures our unique position in the blockchain marketing space. Their understanding of both the technical aspects of blockchain and effective marketing strategies resulted in a website that truly speaks to our target audience.",
    testimonialAuthor: "Client Representative",
    testimonialTitle: "Metathingz.xyz",
    color: "blue",
  },
  {
    id: "a1m-capital",
    title: "A1M Capital Venture Fund",
    category: "branding",
    industry: "finance",
    image: "/placeholder.svg?height=400&width=600&query=venture capital website design",
    tags: ["Branding", "Web Development", "Digital Strategy"],
    featured: false,
    description:
      "Development of a comprehensive brand identity and digital presence for a venture capital firm focused on innovative startups.",
    challenge:
      "Creating a sophisticated brand identity and digital platform that positions A1M Capital as a forward-thinking venture capital firm dedicated to supporting visionary startups.",
    solution:
      "We developed a complete brand identity system and digital platform that effectively communicates the firm's investment philosophy, portfolio, and value proposition to potential startups and partners.",
    results: [
      "Established clear brand positioning in the venture capital space",
      "Increased quality of startup applications",
      "Enhanced digital presence for investor relations",
    ],
    testimonial:
      "The Tezzeract team delivered a brand identity and digital platform that perfectly captures our vision and values. Their strategic approach to both design and functionality has resulted in a digital presence that effectively communicates our investment philosophy and attracts the right kind of startups to our portfolio.",
    testimonialAuthor: "Client Representative",
    testimonialTitle: "A1M Capital",
    color: "teal",
  },
]

// Filter categories
const filterCategories = {
  category: [
    { id: "all", label: "All Categories" },
    { id: "product-design", label: "Product Design" },
    { id: "web-development", label: "Web Development" },
    { id: "product-development", label: "Product Development" },
    { id: "digital-strategy", label: "Digital Strategy" },
    { id: "branding", label: "Branding" },
  ],
  industry: [
    { id: "all", label: "All Industries" },
    { id: "technology", label: "Technology" },
    { id: "finance", label: "Finance" },
    { id: "nonprofit", label: "Nonprofit" },
    { id: "real-estate", label: "Real Estate" },
    { id: "coworking", label: "Coworking" },
    { id: "cryptocurrency", label: "Cryptocurrency" },
  ],
}

export function PortfolioSection() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<string | null>(null)
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    industry: "all",
  })
  const [activeFilterCategory, setActiveFilterCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(5) // Show featured + 4 initially

  const sectionRef = useRef<HTMLDivElement>(null)

  // Filter portfolio items based on active filters
  const filteredPortfolioItems = portfolioItems.filter((item) => {
    // Check if item matches all active filters
    const matchesCategory = activeFilters.category === "all" || item.category === activeFilters.category
    const matchesIndustry = activeFilters.industry === "all" || item.industry === activeFilters.industry

    return matchesCategory && matchesIndustry
  })

  // Sort portfolio items to ensure featured ones appear first
  const sortedPortfolioItems = [...filteredPortfolioItems].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  // Handle portfolio selection
  const handlePortfolioSelect = (id: string) => {
    setSelectedPortfolio(id)
    // Scroll to section top when a portfolio is selected on mobile
    if (window.innerWidth < 768) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Close portfolio detail view
  const handleCloseDetail = () => {
    setSelectedPortfolio(null)
  }

  // Handle filter change
  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value,
    }))
    setActiveFilterCategory(null) // Close filter dropdown
    setVisibleCount(5) // Reset visible count when filters change
  }

  // Toggle filter category dropdown
  const toggleFilterCategory = (category: string) => {
    setActiveFilterCategory(activeFilterCategory === category ? null : category)
  }

  // Show more portfolio items
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, sortedPortfolioItems.length))
  }

  // Get the selected portfolio item
  const selectedPortfolioItem = portfolioItems.find((item) => item.id === selectedPortfolio)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
           Our Work
          </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base text-black dark:text-gray-300 font-light max-w-3xl mx-auto"
              >
                Explore our portfolio of successful projects across industries
              </motion.p>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="mb-12 sticky top-20 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 px-4 rounded-lg border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(filterCategories).map(([category, options]) => (
                  <div key={category} className="relative">
                    <button
                      onClick={() => toggleFilterCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                        activeFilters[category as keyof typeof activeFilters] !== "all"
                          ? "bg-[#00C2CB]/20 text-[#00C2CB] dark:text-teal-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Filter className="w-4 h-4 mr-1" />
                      <span>
                        {
                          options.find((option) => option.id === activeFilters[category as keyof typeof activeFilters])
                            ?.label
                        }
                      </span>
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeFilterCategory === category && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 mt-2 w-56 rounded-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg"
                        >
                          <div className="py-1">
                            {options.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => handleFilterChange(category, option.id)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                                  activeFilters[category as keyof typeof activeFilters] === option.id
                                    ? "bg-[#00C2CB]/10 text-[#00C2CB] dark:text-teal-400"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <AnimatePresence mode="wait">
            {selectedPortfolio ? (
              // Portfolio Detail View
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {selectedPortfolioItem && (
                  <PortfolioDetail portfolio={selectedPortfolioItem} onClose={handleCloseDetail} />
                )}
              </motion.div>
            ) : (
              // Portfolio Grid
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredPortfolioItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {sortedPortfolioItems.slice(0, visibleCount).map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={
                          index === 0 && item.featured ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4"
                        }
                      >
                        <PortfolioCard
                          portfolio={item}
                          featured={index === 0 && item.featured}
                          onClick={() => handlePortfolioSelect(item.id)}
                        />
                      </motion.div>
                    ))}

                    {/* Show More Button */}
                    {sortedPortfolioItems.length > visibleCount && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="col-span-full flex justify-center mt-8"
                      >
                        <motion.button
                          onClick={handleShowMore}
                          className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View More Projects</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  // No results state
                  <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Filter className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                      <h3 className="text-xl font-display font-light text-gray-800 dark:text-white mb-2">
                        No matching projects found
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your filters</p>
                      <button
                        onClick={() => {
                          setActiveFilters({
                            category: "all",
                            industry: "all",
                          })
                        }}
                        className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-300"
                      >
                        Reset Filters
                      </button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
export default PortfolioSection;