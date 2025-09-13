'use client'

import React from 'react'

const About = () => {
  const stats = [
    { number: '3+', label: 'Years of Study', icon: '📚' },
    { number: '6+', label: 'Major Projects', icon: '💻' },
    { number: '8+', label: 'Technologies', icon: '⚡' },
    { number: '100%', label: 'Commitment', icon: '🎯' }
  ]

  const skills = [
    { name: 'MERN Stack Development', icon: '🚀'},
    { name: 'Database Management', icon: '🗄️'},
    { name: 'API Integration', icon: '🔗'},
    { name: 'Problem Solving', icon: '🧩'},
    { name: 'Project Management', icon: '📋'},
    { name: 'Team Collaboration', icon: '🤝'}
  ]

  const currentLearning = [
    { name: 'Artificial Intelligence & ML', icon: '🤖', color: 'from-blue-400 to-purple-600' },
    { name: 'CI/CD Pipelines', icon: '🔄', color: 'from-green-400 to-blue-500' },
    { name: 'AWS Cloud Services', icon: '☁️', color: 'from-orange-400 to-red-500' }
  ]

  const hobbies = [
    { name: 'Cricket', icon: '🏏', description: 'Strategic gameplay' },
    { name: 'Chess', icon: '♟️', description: 'Logical thinking' },
    { name: 'Movies', icon: '🎬', description: 'Creative inspiration' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[var(--primary-bg)] to-[var(--secondary-bg)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Professional Introduction */}
            <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center">
                <span className="text-2xl mr-3">👨‍💻</span>
                Professional Journey
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I&#39;m a dedicated 3rd-year Software Engineering undergraduate at NSBM Green University with a strong passion for 
                <span className="text-[var(--accent-primary)] font-semibold"> MERN Stack development</span>. My journey in technology 
                is driven by the desire to create scalable, efficient applications that solve real-world problems.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                With expertise in <span className="text-[var(--accent-secondary)] font-semibold">Java, C, PHP, JavaScript, and Python</span>, 
                I bring a diverse technical foundation to every project. My experience spans web development, API integration, and comprehensive 
                database management across multiple platforms.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I&#39;m committed to applying my technical expertise to dynamic software development teams and contributing to innovative solutions 
                that make a meaningful impact.
              </p>
            </div>

            {/* Current Learning */}
            <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                Currently Exploring
              </h3>
              <div className="grid gap-4">
                {currentLearning.map((item, index) => (
                  <div key={index} className="flex items-center p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-xl mr-4`}>
                      {item.icon}
                    </div>
                    <span className="text-[var(--text-primary)] font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-blue-500/10 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-[var(--text-secondary)] text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center py-3">
                <span className="text-2xl mr-3">🎯</span>
                Core Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{skill.icon}</span>
                        <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
                      </div>
                      {/* <span className="text-[var(--accent-primary)] font-semibold">{skill.level}%</span> */}
                    </div>
                    {/* <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="glass-effect rounded-2xl p-8 mb-16 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center flex items-center justify-center">
            <span className="text-2xl mr-3">🌟</span>
            Beyond Technology
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h4 className="text-[var(--text-primary)] font-bold text-lg mb-2">{hobby.name}</h4>
                <p className="text-[var(--text-secondary)] text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals & Vision */}
        <div className="text-center glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center justify-center">
            <span className="text-2xl mr-3">🚀</span>
            Goals & Vision
          </h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mx-auto">
            I&#39;m committed to applying my technical expertise to <span className="gradient-text font-bold">dynamic software development teams</span> where I can 
            contribute to meaningful projects and continue growing as a developer. I&#39;m excited about the future of technology, 
            particularly in <span className="text-[var(--accent-primary)] font-semibold">AI/ML integration</span> and 
            <span className="text-[var(--accent-secondary)] font-semibold"> cloud-native development</span>. My goal is to be part of 
            innovative teams that create solutions making a positive impact on people&#39;s lives.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About