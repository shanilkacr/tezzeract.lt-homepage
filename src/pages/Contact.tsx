import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";

const BrevoAPI = import.meta.env.VITE_BREVO_API_KEY;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const serviceOptions = [
    { id: "creative", label: "Creative & Design" },
    { id: "digital", label: "Digital Strategy & Marketing" },
    { id: "development", label: "Web & Development" },
    { id: "growth", label: "Business Growth" },
    { id: "automation", label: "Workflow Automation" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormState((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
    if (errors.services && formState.services.length > 0) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.services;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formState.email))
      newErrors.email = "Email is invalid";
    if (formState.services.length === 0)
      newErrors.services = "Please select at least one service";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const senderEmail = "info@tezzeract.net"; // Replace with your verified Brevo sender email
    const adminEmail = "wehan@tezzeract.com";

    // Email to admin
    const emailToAdmin = {
      sender: { name: "Tezzeract Website", email: senderEmail },
      to: [{ email: adminEmail, name: "Admin" }],
      subject: "New Contact Form Submission",
      htmlContent: `
        <html>
          <body>
            <h2>New Submission</h2>
            <p><strong>Name:</strong> ${formState.name}</p>
            <p><strong>Email:</strong> ${formState.email}</p>
            <p><strong>Company:</strong> ${
              formState.company || "Not provided"
            }</p>
            <p><strong>Services:</strong> ${formState.services
              .map((id) => serviceOptions.find((opt) => opt.id === id)?.label)
              .join(", ")}</p>
            <p><strong>Message:</strong> ${formState.message}</p>
          </body>
        </html>
      `,
    };

    // Email to customer
    const emailToCustomer = {
      sender: { name: "Tezzeract Website", email: senderEmail },
      to: [{ email: formState.email, name: formState.name }],
      subject: "Thank You for Your Submission",
      htmlContent: `
        <html>
          <body>
            <h2>Thank You, ${formState.name}!</h2>
            <p>We received your message and will get back to you soon.</p>
            <p><strong>Your Details:</strong></p>
            <p><strong>Email:</strong> ${formState.email}</p>
            <p><strong>Company:</strong> ${
              formState.company || "Not provided"
            }</p>
            <p><strong>Services:</strong> ${formState.services
              .map((id) => serviceOptions.find((opt) => opt.id === id)?.label)
              .join(", ")}</p>
            <p><strong>Message:</strong> ${formState.message}</p>
          </body>
        </html>
      `,
    };

    try {
      // Send email to admin
      await axios.post("https://api.brevo.com/v3/smtp/email", emailToAdmin, {
        headers: {
          accept: "application/json",
          "api-key": BrevoAPI,
          "content-type": "application/json",
        },
      });

      // Send email to customer
      await axios.post("https://api.brevo.com/v3/smtp/email", emailToCustomer, {
        headers: {
          accept: "application/json",
          "api-key": BrevoAPI,
          "content-type": "application/json",
        },
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        services: [],
      });
    } catch (error) {
      console.error("Error sending emails:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        request: error.request,
      });
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        submit:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-[#242424] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="tezzeracth2">Get in Touch</h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white text-base max-w-3xl font-thin mx-auto"
              >
                Ready to transform your digital presence? Let's discuss how we
                can help.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className=""
            >
              {isSubmitted ? (
                <div
                  className="col-span-12 h-[45vh] sm:col-span-10 md:col-span-7 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl 
    p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden "
                >
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-green-900/30 flex items-center justify-center mb-6">
                    <CheckCircle className="h-4 w-4 text-[#00378A] dark:text-green-400" />
                  </div>
                  <h3 className="tezzeracth1 text-4xl md:text-4xl md:text-left leading-[40px]">
                    Message Sent!
                  </h3>
                  <p className="text-1xl font-thin text-left md:text-left text-white">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r mt-5 from-white to-[#D8F4FF] hover:bg-gradient-to-tr hover:from-[#00378AB0] hover:to-[#00A9EE] shadow-[0_0px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_-5px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl text-[#005D8A] font-thin hover:text-white text-base transition-all duration-300 px-8 py-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <form onSubmit={handleSubmit} className="p-8 md:p-12">
                    <h3 className="text-2xl font-thin text-black dark:text-white mb-6">
                      Contact Us
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full px-4 font-thin text-sm py-2 rounded-lg border ${
                            errors.name
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

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
                            errors.email
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                          placeholder="Your email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

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

                      <div>
                        <label className="block text-sm font-thin text-gray-700 dark:text-gray-300 mb-2">
                          Services Interested In *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {serviceOptions.map((service) => (
                            <div key={service.id} className="flex items-center">
                              <input
                                type="checkbox"
                                id={service.id}
                                checked={formState.services.includes(
                                  service.id
                                )}
                                onChange={() => handleServiceToggle(service.id)}
                                className="h-4 w-4 text-[#00C2CB] focus:ring-[#00C2CB] border-gray-300 dark:border-gray-600 rounded"
                              />
                              <label
                                htmlFor={service.id}
                                className="ml-2 text-sm font-thin text-gray-700 dark:text-gray-300"
                              >
                                {service.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.services && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.services}
                          </p>
                        )}
                      </div>

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
                            errors.message
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          } focus:outline-none focus:ring-2 focus:ring-[#00C2CB] dark:focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                          placeholder="Tell us about your project"
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.message}
                          </p>
                        )}
                      </div>

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
                      {errors.submit && (
                        <p className="mt-2 text-sm text-red-500 dark:text-red-400 text-center">
                          {errors.submit}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="col-span-10 mb-8 h-[45vh] md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500">
                <h3 className="text-2xl font-thin text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-thin text-white mb-1">Email</h4>
                      <a
                        href="mailto:info@tezzeract.net"
                        className="text-white/80 text-base max-w-3xl font-thin hover:text-white transition-colors"
                      >
                        info@tezzeract.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-thin text-white mb-1">Phone</h4>
                      <p className="text-white/80 font-thin">
                        <a
                          href="tel:+37060197972"
                          className="hover:text-white transition-colors"
                        >
                          +370 601 97972
                        </a>
                      </p>

                      <p className="text-white/80 font-thin">
                        <a
                          href="tel:+13469998698"
                          className="hover:text-white transition-colors"
                        >
                          +1 (346) 999-8698
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-thin text-white mb-1">Office</h4>
                      <p className="text-white/80 font-thin">
                        <a
                          href="https://www.google.com/maps/dir//Level+9,+Oron+Towers,+No+752+Dr+Danister+De+Silva+Mawatha,+Colombo+00900/@6.9407769,79.796587,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae2593f939f99d9:0x3a35adfc10c2feb5!2m2!1d79.8789923!2d6.940786?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          Level 9, Orion Towers, No 752 Dr Danister De Silva
                          Mawatha, Colombo 00900
                        </a>
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
  );
}
