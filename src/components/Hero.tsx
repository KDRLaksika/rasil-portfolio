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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Image Section */}
        <div className="mb-12">
          <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            <div className="w-full h-full rounded-full glass-effect p-1 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl lg:text-6xl font-bold gradient-text">
                    RL
                  </div>
                  
                  <Image
                    src="/profile-photo.jpg"
                    alt="Rasil Laksika"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                 
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-6 -right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">
                Rasil Laksika
              </span>
            </h1>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[var(--text-secondary)]">
                {displayText}
                <span className="animate-pulse text-[var(--accent-primary)]">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-3xl mx-auto">
            Passionate about creating <span className="text-[var(--accent-primary)] font-semibold">scalable applications</span> that solve real-world problems. 
            Experienced in <span className="text-[var(--accent-secondary)] font-semibold">MERN stack development</span> with a focus on secure, efficient solutions.
            Currently seeking <span className="gradient-text font-semibold">Software Engineering internship</span> opportunities.
          </p>

          {/* Contact Info Cards */}
          <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="mailto:rasillaksika24@gmail.com" 
               className="glass-effect px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center space-x-3 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]">
                <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base font-medium">rasillaksika24@gmail.com</span>
              </div>
            </a>

            <a href="tel:0760722506" 
               className="glass-effect px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center space-x-3 text-[var(--text-secondary)] group-hover:text-[var(--accent-secondary)]">
                <svg className="w-5 h-5 text-[var(--accent-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base font-medium">+94 76 072 2506</span>
              </div>
            </a>

            <a href="https://github.com/KDRLaksika" target="_blank" rel="noopener noreferrer"
               className="glass-effect px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center space-x-3 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]">
                <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm sm:text-base font-medium">GitHub Profile</span>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              View My Projects
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 glass-effect text-[var(--text-primary)] font-semibold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Get In Touch
            </button>
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