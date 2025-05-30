"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react"


export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    services: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const serviceOptions = [
    { id: "creative", label: "Creative & Design" },
    { id: "digital", label: "Digital Strategy & Marketing" },
    { id: "development", label: "Web & Development" },
    { id: "growth", label: "Business Growth" },
    { id: "automation", label: "Workflow Automation" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormState((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId]
      return { ...prev, services }
    })
    // Clear service error if any service is selected
    if (errors.services && formState.services.length > 0) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.services
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = "Email is invalid"
    if (formState.services.length === 0) newErrors.services = "Please select at least one service"
    if (!formState.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        services: [],
      })
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-[#242424] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="tezzeracth2 text-4xl md:text-5xl font-display font-light tracking-wider text-white mb-4">
                Get in Touch
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white text-base max-w-3xl font-thin mx-auto"
              >
                Ready to transform your digital presence? Let's discuss how we can help.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              {isSubmitted ? (
                <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-tezzeract-gradient hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <h3 className="text-2xl font-thin text-black dark:text-white mb-6">Contact Us</h3>

                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 font-thin text-sm py-2 rounded-lg border ${
                          errors.name ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 font-thin text-sm rounded-lg border ${
                          errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                        placeholder="Your email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 font-thin text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    {/* Services Field */}
                    

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 font-thin text-sm rounded-lg border ${
                          errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                        } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                        placeholder="Tell us about your project"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-tezzeract-gradient text-white rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:opacity-90 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2 " />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div               
  initial={{ opacity: 0, x: 30 }}               
  animate={isInView ? { opacity: 1, x: 0 } : {}}               
  transition={{ duration: 0.8, delay: 0.5 }}             
>               
  <div className="col-span-10 mb-8 md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500">                 
    <h3 className="text-2xl font-thin text-white mb-6">Contact Information</h3>                 
    <div className="space-y-6">                   
      <div className="flex items-start">                     
        <Mail className="h-6 w-6 mr-4 mt-1" />                     
        <div>                       
          <h4 className="font-thin  text-white mb-1">Email</h4>                       
          <a href="mailto:info@tezzeract.net" className="text-white/80 text-base max-w-3xl font-thin hover:text-white transition-colors">                         
            info@tezzeract.net                       
          </a>                     
        </div>                   
      </div>                   
      <div className="flex items-start">                     
        <Phone className="h-6 w-6 mr-4 mt-1" />                     
        <div>                       
          <h4 className="font-thin text-white mb-1">Phone</h4>                       
          <p className="text-white/80 font-thin">+94 7765 76488</p>                       
          <p className="text-white/80 font-thin">+1 (346) 999-8698</p>                     
        </div>                   
      </div>                   
      <div className="flex items-start">                     
        <MapPin className="h-6 w-6 mr-4 mt-1" />                     
        <div>                       
          <h4 className="font-thin text-white mb-1">Office</h4>                       
          <p className="text-white/80 font-thin">                         
            Level 9, Oron Towers, No 752 Dr Danister De Silva Mawatha, Colombo 00900                       
          </p>                     
        </div>                   
      </div>                 
    </div>               
  </div>                
             
</motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}