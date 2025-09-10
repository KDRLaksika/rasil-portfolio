'use client'

import React from 'react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-comWeb",
      description: "I built a fully functional E-commerce website using HTML, CSS, Bootstrap, PHP, and MySQL. It was an amazing experience that helped me understand the fundamentals of web development, backend integration, and user interface design.",
      image: "/projects/e-comweb-screenshot.jpg", // Placeholder for your screenshot
      techStack: [
        { name: "HTML", color: "bg-orange-600", icon: "🌐" },
        { name: "CSS", color: "bg-blue-500", icon: "🎨" },
        { name: "Bootstrap", color: "bg-purple-600", icon: "📱" },
        { name: "PHP", color: "bg-indigo-600", icon: "🐘" },
        { name: "MySQL", color: "bg-blue-600", icon: "🗄️" }
      ],
      githubLink: "https://github.com/KDRLaksika/E-comWeb.git",
      type: "single"
    },
    {
      id: 2,
      title: "Hospital Management System App",
      description: "I'm excited to share my web-based Hospital Management System, developed as part of my Advanced Database Management Systems (ADBMS) module at NSBM Green University. This project demonstrates how advanced database functionality can be combined with modern web development to solve real-world healthcare workflow problems.",
      features: [
        "Patient registration and appointment scheduling",
        "Doctor assignment and patient admission tracking", 
        "Lab test and prescription management",
        "Bill generation and real-time revenue reporting",
        "Business Intelligence with monthly billing analysis",
        "Advanced database elements: stored procedures, views, functions, and triggers"
      ],
      image: "/projects/hospital-management-screenshot.jpg", // Placeholder for your screenshot
      techStack: [
        { name: "Python", color: "bg-green-500", icon: "🐍" },
        { name: "Streamlit", color: "bg-red-500", icon: "⚡" },
        { name: "SQL Server", color: "bg-red-600", icon: "🗄️" },
        { name: "pyodbc", color: "bg-blue-700", icon: "🔗" },
        { name: "pandas", color: "bg-blue-600", icon: "📊" },
        { name: "matplotlib", color: "bg-orange-500", icon: "📈" }
      ],
      githubLink: "https://github.com/KDRLaksika/Hospital_Management_System_App.git",
      type: "single"
    },
    {
      id: 3,
      title: "Gemini Clone",
      description: "I'm excited to share that I've successfully completed a Gemini Clone project - an interactive AI-powered chat application that mimics conversational assistants like Google's Gemini and ChatGPT.",
      features: [
        "Real-time responses powered by Google's Gemini API",
        "Fully mobile-responsive design", 
        "Clean and modern UI with intuitive chat experience",
        "Error handling for invalid input or failed API requests",
        "Modular file structure with React Context API for state management"
      ],
      image: "/projects/gemini-clone-screenshot.jpg", // Placeholder for your screenshot
      techStack: [
        { name: "React.js", color: "bg-cyan-400", icon: "⚛️" },
        { name: "Node.js", color: "bg-green-600", icon: "🟢" },
        { name: "Express", color: "bg-gray-700", icon: "🚀" },
        { name: "Google AI", color: "bg-blue-500", icon: "🤖" },
        { name: "Git", color: "bg-orange-600", icon: "📝" }
      ],
      githubLink: "https://github.com/KDRLaksika/gemini-clone.git",
      type: "single"
    },
    {
      id: 4,
      title: "Crystal Beauty",
      description: "This is my MERN stack project. Platform: Engineered a secure user authentication system with JWT for protected routes (profiles, order history). Developed a dynamic product management interface (CRUD, inventory tracking). Implemented a persistent shopping cart using local storage.",
      features: [
        "Secure user authentication system with JWT",
        "Protected routes for profiles and order history",
        "Dynamic product management interface (CRUD operations)",
        "Inventory tracking system",
        "Persistent shopping cart using local storage"
      ],
      image: "/projects/crystal-beauty-screenshot.jpg", // Placeholder for your screenshot
      techStack: [
        { name: "React.js", color: "bg-cyan-400", icon: "⚛️" },
        { name: "Node.js", color: "bg-green-600", icon: "🟢" },
        { name: "Express.js", color: "bg-gray-700", icon: "🚀" },
        { name: "MongoDB", color: "bg-green-600", icon: "🍃" },
        { name: "JWT", color: "bg-purple-600", icon: "🔐" }
      ],
      frontendLink: "https://github.com/KDRLaksika/cbc-frontend.git",
      backendLink: "https://github.com/KDRLaksika/cbc-backend.git",
      type: "split"
    }
  ]

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[var(--primary-bg)] to-[var(--secondary-bg)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A showcase of my personal projects that demonstrate my technical skills and passion for creating practical solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02] transition-all duration-500 group">
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                      📸
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Screenshot Placeholder<br/>
                      <span className="text-xs">Add your project image here</span>
                    </p>
                  </div>
                </div>
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Features (if available) */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-[var(--text-primary)] font-semibold mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-[var(--text-secondary)] text-sm">
                          <span className="text-[var(--accent-primary)] mr-2 mt-1">▸</span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-[var(--accent-secondary)] text-sm ml-4">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-[var(--text-primary)] font-semibold mb-3 text-sm uppercase tracking-wide">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${tech.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                      >
                        <span className="mr-1">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.type === 'single' ? (
                    <button
                      onClick={() => openLink(project.githubLink)}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      View Code
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => openLink(project.frontendLink)}
                        className="flex items-center px-4 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                        Frontend Code
                      </button>
                      <button
                        onClick={() => openLink(project.backendLink)}
                        className="flex items-center px-4 py-3 glass-effect text-[var(--text-primary)] font-semibold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-sm border border-[var(--accent-primary)]/30"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                        Backend Code
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Interested in My Work?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              These projects showcase my journey in software development. I'm always working on new ideas and love to collaborate on interesting projects.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects