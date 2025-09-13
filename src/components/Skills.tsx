'use client'

import React, { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = {
    'Programming Languages': {
      color: 'from-blue-500 to-purple-600',
      icon: '💻',
      skills: [
        { name: 'Java', level: 'expert', color: 'bg-orange-500' },
        { name: 'JavaScript', level: 'expert', color: 'bg-yellow-500' },
        { name: 'C', level: 'expert', color: 'bg-blue-600' },
        { name: 'PHP', level: 'intermediate', color: 'bg-purple-600' },
        { name: 'Python', level: 'learning', color: 'bg-green-500' },
        { name: 'Dart', level: 'expert', color: 'bg-cyan-500' }
      ]
    },
    'Frontend Development': {
      color: 'from-pink-500 to-rose-600',
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 'expert', color: 'bg-orange-600' },
        { name: 'CSS', level: 'expert', color: 'bg-blue-500' },
        { name: 'React.js', level: 'expert', color: 'bg-cyan-400' },
        { name: 'Next.js', level: 'learning', color: 'bg-gray-800' },
        { name: 'Bootstrap', level: 'expert', color: 'bg-purple-600' }
      ]
    },
    'Backend Development': {
      color: 'from-green-500 to-emerald-600',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 'expert', color: 'bg-green-600' },
        { name: 'Express.js', level: 'expert', color: 'bg-gray-700' },
        { name: 'PHP', level: 'intermediate', color: 'bg-indigo-600' }
      ]
    },
    'Databases': {
      color: 'from-indigo-500 to-blue-600',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 'expert', color: 'bg-blue-600' },
        { name: 'MongoDB', level: 'expert', color: 'bg-green-600' },
        { name: 'SQL Server', level: 'expert', color: 'bg-red-600' }
      ]
    },
    'Tools & Technologies': {
      color: 'from-purple-500 to-violet-600',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 'expert', color: 'bg-orange-600' },
        { name: 'Postman', level: 'expert', color: 'bg-orange-500' },
        { name: 'Flutter', level: 'intermediate', color: 'bg-blue-400' },
        { name: 'Streamlit', level: 'expert', color: 'bg-red-500' }
      ]
    },
    'Currently Learning': {
      color: 'from-yellow-500 to-orange-600',
      icon: '📚',
      skills: [
        { name: 'AWS', level: 'learning', color: 'bg-yellow-600' },
        { name: 'AI/ML', level: 'learning', color: 'bg-purple-500' },
        { name: 'CI/CD', level: 'learning', color: 'bg-blue-500' }
      ]
    }
  }

  const certificates = [
    {
      name: 'Certificate of Completion in Computer Literacy',
      institution: 'The Open University of Sri Lanka',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Diploma in English',
      institution: 'British Way English Academy',
      icon: '🗣️',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  interface LevelBadge {
    text: string;
    color: string;
  }

  type SkillLevel = 'expert' | 'intermediate' | 'learning' | 'beginner';

  const getLevelBadge = (level: SkillLevel): LevelBadge => {
    switch(level) {
      case 'expert':
        return { text: 'Expert', color: 'bg-green-500/20 text-green-400 border-green-400/30' }
      case 'intermediate':
        return { text: 'Intermediate', color: 'bg-blue-500/20 text-blue-400 border-blue-400/30' }
      case 'learning':
        return { text: 'Learning', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30' }
      default:
        return { text: 'Beginner', color: 'bg-gray-500/20 text-gray-400 border-gray-400/30' }
    }
  }

  const filteredCategories = activeCategory === 'all' 
    ? Object.entries(skillCategories) 
    : Object.entries(skillCategories).filter(([key]) => 
        key.toLowerCase().replace(/[^a-z]/g, '') === activeCategory
      )

  const categoryFilters = [
    { key: 'all', label: 'All Skills', icon: '🌟' },
    { key: 'programminglanguages', label: 'Programming', icon: '💻' },
    { key: 'frontenddevelopment', label: 'Frontend', icon: '🎨' },
    { key: 'backenddevelopment', label: 'Backend', icon: '⚙️' },
    { key: 'databases', label: 'Databases', icon: '🗄️' },
    { key: 'toolstechnologies', label: 'Tools', icon: '🛠️' },
    { key: 'currentlylearning', label: 'Learning', icon: '📚' }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[var(--secondary-bg)] to-[var(--primary-bg)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveCategory(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === filter.key
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                  : 'glass-effect text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {filteredCategories.map(([categoryName, categoryData], index) => (
            <div key={categoryName} className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryData.color} flex items-center justify-center text-2xl mr-4`}>
                  {categoryData.icon}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{categoryName}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group relative">
                    {/* Skill Badge */}
                    <div className="glass-effect rounded-xl p-4 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div className={`w-8 h-8 ${skill.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-sm font-bold`}>
                        {skill.name.charAt(0)}
                      </div>
                      <h4 className="text-[var(--text-primary)] font-medium mb-2">{skill.name}</h4>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getLevelBadge(skill.level as SkillLevel).color}`}>
                        {getLevelBadge(skill.level as SkillLevel).text}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center">
              <span className="text-3xl mr-3">🏆</span>
              Certifications
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[var(--text-primary)] font-bold mb-2">{cert.name}</h4>
                    <p className="text-[var(--text-secondary)] text-sm">{cert.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4">Continuous Learning Journey</h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              As a passionate software engineer, I&#39;m committed to staying updated with the latest technologies and best practices. 
              Currently expanding my expertise in <span className="text-[var(--accent-primary)] font-semibold">cloud computing</span>, 
              <span className="text-[var(--accent-secondary)] font-semibold"> artificial intelligence</span>, and 
              <span className="gradient-text font-semibold"> modern development practices</span> to build more efficient and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills