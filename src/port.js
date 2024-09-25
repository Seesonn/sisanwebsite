'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Moon, Sun, Music, Book, Feather, BookOpen, Linkedin, Facebook, Instagram, Send, Github, ExternalLink, Code2, Briefcase, Palette, ChevronDown, ChevronLeft, ChevronRight, X, Lock } from 'lucide-react'

// Import images
import riyan from "./assets/riyan.jpg"
import home from "./assets/home.png"
import web from "./assets/web.jpg"
import ui from "./assets/ui.jpg"
import dev from "./assets/dev.jpg"
import po from "./assets/po.jpg"
import st from "./assets/st.png"
import so from "./assets/so.png"
import no from "./assets/no.png"
import py from "./assets/py.png"
import ja from "./assets/javascript.png"
import vs from "./assets/vs.png"
import re from "./assets/re.png"
import ca from "./assets/ca.png"
import poo from "./assets/po.png"
import mo from "./assets/mo.png"
import node from "./assets/node.png"
import git from "./assets/git.png"
import fi from "./assets/figma.png"
import ms from "./assets/ms.png"
import msm from "./assets/msm.png"
import ea1 from "./assets/ea1.png"
import ea2 from "./assets/ea2.png"
import ea3 from "./assets/ea3.png"
import ea4 from "./assets/ea4.png"
import ea5 from "./assets/ea5.png"

const projects = [
  {
    id: 1,
    title: "E-commerce Admin Dashboard",
    description: "A fully responsive online store Admin Dashboard with advanced features.",
    type: "Original",
    images: [ea1, ea2, ea3, ea4, ea5],
    githubUrl: "https://github.com/username/ecommerce-platform",
    linkedinUrl: "https://linkedin.com/post/ecommerce-platform"
  },
  {
    id: 2,
    title: "Messenger Clone",
    description: "A feature-rich social media platform inspired by Messenger, built with modern web technologies.",
    type: "Clone",
    images: [ms, msm],
    githubUrl: "https://github.com/username/messenger-clone",
    linkedinUrl: "https://linkedin.com/post/messenger-clone"
  },
  {
    id: 3,
    title: "E-commerce Admin Dashboard",
    description: "A fully responsive online store Admin Dashboard with advanced features.",
    type: "Original",
    images: [ea1, ea2, ea3, ea4, ea5],
    githubUrl: "https://github.com/username/portfolio-website",
    linkedinUrl: "https://linkedin.com/post/portfolio-website"
  }
]

function ProjectCard({ project, theme }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 5000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-400 bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="relative h-48 overflow-hidden group">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute top-2 left-2 px-2 py-1 bg-white bg-opacity-75 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 flex items-center">
          {project.type === 'Original' && <Code2 className="mr-1 h-3 w-3" />}
          {project.type === 'Clone' && <Briefcase className="mr-1 h-3 w-3" />}
          {project.type === 'Creative' && <Palette className="mr-1 h-3 w-3" />}
          {project.type}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4">
          <button onClick={prevImage} className="text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextImage} className="text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </a>
          <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-black hover:bg-yellow-100 bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <ExternalLink className="mr-2 h-4 w-4" />
            Preview
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 })
  const [isScrolling, setIsScrolling] = useState(false)
  const [activeTab, setActiveTab] = useState('skills')
  const [selectedType, setSelectedType] = useState("All Projects")
  const [selectedOutlet, setSelectedOutlet] = useState(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const skills = [
    { name: 'JavaScript', icon: ja },
    { name: 'Python', icon: py },
    { name: 'React', icon: re },
    { name: 'Node', icon: node },
    { name: 'MongoDB', icon: mo },
  ]

  const tools = [
    { name: 'VS Code', icon: vs },
    { name: 'Canva', icon: ca },
    { name: 'Photoshop', icon: poo },
    { name: 'Git', icon: git },
    { name: 'Figma', icon: fi },
  ]

  const creativeOutlets = [
    { id: 'song', title: 'Song', description: 'Dive into my songs that fuel and inspire your Music Passion.', icon: Music, image: so },
    { id: 'poetry', title: 'Poem', description: 'Collection of verses that capture the  emotions.', icon: Feather, image: po },
    { id: 'story', title: 'Story', description: 'Collection of stories that blend reality with imagination.', icon: Book, image: st },
    { id: 'novel', title: 'Novel', description: 'Delve into the realms of thought-provoking novels.', icon: BookOpen, image: no }
  ]

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const handleTouchMove = (e) => {
    const touch = e.touches[0]
    setTouchPosition({ x: touch.clientX, y: touch.clientY })
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handlePrivateClick = (id) => {
    setSelectedOutlet(id)
    setPassword('')
    setError('')
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === 'sisan0011') {
      // Unlock the content
      setSelectedOutlet(null)
      setPassword('')
      setError('')
      // Here you would typically set a state to show the unlocked content
      alert(`${selectedOutlet?.charAt(0).toUpperCase()}${selectedOutlet?.slice(1)} content unlocked!`)
    } else {
      setError('You are not selected for this. Please try again.')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsScrolling(true)
      
      const scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)

      return () => clearTimeout(scrollTimeout)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects = selectedType === "All Projects" 
    ? projects 
    : projects.filter(project => project.type === selectedType)

  const projectTypes = ["All Projects", "Original", "Clone", "Creative"]

  return (
    <div 
      className={`min-h-screen w-full transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      onTouchMove={handleTouchMove}
    >
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">SISAN</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">About</button></li>
              <li><button onClick={() => scrollToSection('skill')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Skill</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Project</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('creative-outlets')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Creative Outlets</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-colors text-sm lg:text-base">Contact</button></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-20 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}></div>
        <div className="relative container mx-auto px-4 py-20">
          <button 
            onClick={toggleMenu}
            className={`absolute top-4 right-4 hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            aria-label="Close menu"
          >
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" />
          </button>
          <ul className="space-y-8 text-2xl">
            <li><button onClick={() => scrollToSection('home')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</button></li>
            <li><button onClick={() => scrollToSection('skill')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Skill</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Project</button></li>
            
            
            <li><button onClick={() => scrollToSection('portfolio')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white': 'text-gray-900'}`}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection('creative-outlets')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Creative Outlets</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`block hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact</button></li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-20">
        <section id="home" className="min-h-screen flex flex-col justify-center py-12 sm:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">I'M SISAN BHATTARAI</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4">Welcome to my website</h3>
              <p className="mb-6 text-sm sm:text-base lg:text-lg">"Dear Visitor, as you navigate through the content of this website, remember that life is a journey filled with twists, turns, and chapters that shape our unique stories. Embrace the highs, learn from the lows, and know that you're not alone. Just like the ever-changing nature of a webpage, your life is a work in progress. Keep scrolling, keep exploring, and find inspiration in every pixel of your personal narrative. Your story matters, and this space is a reminder that, no matter what, there's always a new page waiting to be written.</p>
              <button className="bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm sm:text-base">
                Follow Me <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={home} alt="sisan" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Personal Insights</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 ml:40">
              <img src={riyan} alt="Profile" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-2/3">
              <p className="mb-6 text-sm sm:text-base lg:text-lg">Sisan Bhattarai, born on December 10, 2001, in Nepal.
              Passionate about coding and poetry, I find joy in the intersection of technology and creativity. Exploring the beauty of Nepal while pursuing my interests is what drives me.</p>
            
              <p className="mb-6 text-sm sm:text-base lg:text-lg">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clean, readable, highly performant code matters to me.</p>
              <p className="mb-6 text-sm sm:text-base lg:text-lg">I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.</p>
              
              <h3 className="text-xl font-bold mb-2">Finally, some quick bits about me:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Bachelor in CSIT</li>
                <li>Learning Cyber Security</li>
              </ul>
            </div>
          </div>
        </section>

        <div id="skill" className="md:flex md:items-center md:justify-between py-20">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
              My Programming Arsenal
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Crafting intuitive interfaces that adapt swiftly, empowering users to accomplish tasks with unparalleled ease and efficiency.
            </p>
            <div className="flex space-x-2 mb-6 md:mb-0">
              {['skills', 'tools'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gray-900 bg-yellow-400 hover:bg-yellow-600 shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-200 text-gray-700  hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-xl p-4 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(activeTab === 'skills' ? skills : tools).map((item) => (
                      <div
                        key={item.name}
                        className="bg-gray-200 dark:bg-white-400 p-4 rounded-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full bg-white-200 flex items-center justify-center">
                          <img src={item.icon} className="w-8 h-8 md:w-10 md:h-10" alt={item.name} />
                        </div>
                        <span className="text-sm font-medium dark:text-gray-600">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <section id="projects" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Recent Projects</h2>
          <p className="text-lg md:text-xl mb-6  ">
            Explore our latest web development projects, showcasing our expertise in creating innovative and efficient digital solutions.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="relative inline-block text-left ">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block appearance-none w-full bg-gray-800 text-white border-gray-300 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>


        <section id="portfolio" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={web} alt="Website Designing" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Website Designing</h3>
            </div>
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={ui} alt="UX/UI Graphic Designing" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">UX/UI Designing</h3>
            </div>
            <div className={`p-4 rounded-lg shadow-md overflow-hidden group ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <img src={dev} alt="Web Development" className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Cyber Security</h3>
            </div>
          </div>
        </section>

        <section id="creative-outlets" className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Creative Outlets</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {creativeOutlets.map((outlet) => (
              <div key={outlet.id} className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-400 bg-opacity-10 backdrop-filter backdrop-blur-lg p-4">
                <img src={outlet.image} alt={outlet.title} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{outlet.title}</h3>
                <p className="mb-4 text-sm sm:text-base">{outlet.description}</p>
                <button 
                  onClick={() => handlePrivateClick(outlet.id)}
                  className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm"
                >
                  <outlet.icon className="mr-2" size={16} />
                  Private
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Get in Touch</h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl sm:text-3xl lg:text-4xl hover:text-yellow-400 transition-colors"><Linkedin /></a>
                <a href="#" className="text-2xl sm:text-3xl lg:text-4xl hover:text-yellow-400 transition-colors"><Facebook /></a>
                <a href="#" className="text-2xl sm:text-3xl lg:text-4xl hover:text-yellow-400 transition-colors"><Instagram /></a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                />
               <textarea 
              placeholder="Type your message (max 50 words)" 
              rows={4} 
              maxLength={250} // Optional: Limit character input
              className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
              onInput={(e) => {
              const words = e.target.value.split(/\s+/).filter(word => word.length > 0);
              if (words.length > 50) {
              e.target.value = words.slice(0, 50).join(' ');
                }
                 }}
                style={{ resize: 'none' }} // Prevent stretching
/>

              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-6 sm:py-8 text-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <p className="text-sm sm:text-base">&copy; 2024 SISAN. All rights reserved.</p>
      </footer>

      <div 
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-600 ease-in-out ${isScrolling ? 'opacity-10' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at ${touchPosition.x}px ${touchPosition.y}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)`,
        }}
      ></div>

      {/* Password Pop-up */}
      {selectedOutlet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg shadow-xl max-w-md w-full ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-200'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-280">Enter Password</h3>
              <button onClick={() => setSelectedOutlet(null)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit}>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 text-gray-400 focus:ring-yellow-400"
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {!password && <p className="text-yellow-500 mb-4">Password Required</p>}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold transition-transform hover:scale-105"
                disabled={!password}
              >
                Unlock Content
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}