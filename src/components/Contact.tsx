'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, setShowMessage] = useState({ show: false, type: '', message: '' })
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  // Form validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    if (!formData.user_name.trim()) {
      return { isValid: false, message: 'Name is required' }
    }
    if (!formData.user_email.trim()) {
      return { isValid: false, message: 'Email is required' }
    }
    if (!validateEmail(formData.user_email)) {
      return { isValid: false, message: 'Please enter a valid email address' }
    }
    if (!formData.message.trim()) {
      return { isValid: false, message: 'Message is required' }
    }
    return { isValid: true, message: '' }
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear messages when user starts typing
    if (showMessage.show) {
      setShowMessage({ show: false, type: '', message: '' })
    }
  }

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault()
    
    const validation = validateForm()
    if (!validation.isValid) {
      setShowMessage({
        show: true,
        type: 'error',
        message: validation.message
      })
      return
    }

    setIsLoading(true)

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set.')
      }

      if (!form.current) {
        throw new Error('Form reference is not available.');
      }
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )

      console.log('Email sent successfully:', result.text)
      
      // Show success message
      setShowMessage({
        show: true,
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      })

      // Clear form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      })

    } catch (error) {
      console.error('Failed to send email:', error)
      
      // Show error message
      setShowMessage({
        show: true,
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.'
      })
    } finally {
      setIsLoading(false)
    }

    // Auto-hide message after 5 seconds
    setTimeout(() => {
      setShowMessage({ show: false, type: '', message: '' })
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[var(--secondary-bg)] to-[var(--primary-bg)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&#39;d love to hear from you. 
            Send me a message and let&#39;s create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="user_name" className="block text-[var(--text-primary)] font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="user_email" className="block text-[var(--text-primary)] font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[var(--text-primary)] font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Success/Error Messages */}
              {showMessage.show && (
                <div className={`p-4 rounded-xl border-l-4 ${
                  showMessage.type === 'success' 
                    ? 'bg-green-500/10 border-green-500 text-green-400' 
                    : 'bg-red-500/10 border-red-500 text-red-400'
                } transition-all duration-300`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {showMessage.type === 'success' ? (
                        <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{showMessage.message}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  isLoading
                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Alternative Contact Info */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
            <p className="text-[var(--text-secondary)] mb-4">
              Prefer direct contact?
            </p>
            <a 
              href="mailto:rasillaksika24@gmail.com" 
              className="inline-flex items-center text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-medium transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              rasillaksika24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact