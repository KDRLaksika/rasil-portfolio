'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['Full-Stack Developer', 'Software Engineer', 'MERN Stack Developer']
  
  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentIndex]
    const timer = setTimeout(() => {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1))
      } else {
        setTimeout(() => {
          setDisplayText('')
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [displayText, currentIndex, texts])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="mb-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-4">
              Hi, I&#39;m{' '}
              <span className="gradient-text">
                Rasil Laksika
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--text-secondary)]">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
            Passionate about creating <span className="text-[var(--accent-primary)] font-semibold">scalable applications</span> that solve real-world problems. 
            Experienced in <span className="text-[var(--accent-secondary)] font-semibold">MERN stack development</span> with a focus on secure, efficient solutions.
            Currently seeking <span className="gradient-text font-semibold">Software Engineering internship</span> opportunities.
          </p>

          {/* Contact Info */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-[var(--text-secondary)]">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rasillaksika24@gmail.com" className="hover:text-[var(--accent-primary)] transition-colors">
                  rasillaksika24@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-[var(--text-secondary)]">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0760722506" className="hover:text-[var(--accent-secondary)] transition-colors">
                  +94 76 072 2506
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-[var(--text-secondary)]">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                <a href="https://github.com/KDRLaksika" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] transition-colors">
                  github.com/KDRLaksika
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-[var(--text-secondary)]">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/rasil-laksika-kottagoda-749516255/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-secondary)] transition-colors">
                  linkedin.com/in/rasil-laksika
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 glass-effect text-[var(--text-primary)] font-semibold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center lg:pr-16">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full glass-effect p-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">                  
                  {
                  <Image
                    src="/profile-photo.jpg"
                    alt="Rasil Laksika"
                    width={400}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                  }
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-10 -right-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--text-secondary)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
