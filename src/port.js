"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Moon,
  Sun,
  Music,
  Book,
  Feather,
  BookOpen,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ExternalLink,
  Code2,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Lock,
} from "lucide-react"

// Import images directly from assets folder
import riyan from "./assets/riyan.jpg"
import po from "./assets/po.jpg"
import st from "./assets/st.png"
import so from "./assets/so.png"
import no from "./assets/no.png"
import py from "./assets/python.png"
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
import ea5 from "./assets/ea5.png"
import logo from "./assets/logo.png"
import tf1 from "./assets/tf1.png"
import tf2 from "./assets/tf2.png"
import tf3 from "./assets/tf3.png"
import a1 from "./assets/a1.png"
import a2 from "./assets/a2.png"

// Project Card Component with refined animations
function ProjectCard({ project, theme }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1))
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1))
  }, [project.images.length])

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextImage, 3000)
      return () => clearInterval(timer)
    }
  }, [nextImage, isHovered])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`rounded-lg overflow-hidden shadow-lg ${
        theme === "dark"
          ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
          : "bg-white/80 backdrop-blur-sm border border-gray-200"
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images?.[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        <motion.div
          className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold flex items-center ${
            theme === "dark" ? "bg-black/50 text-white backdrop-blur-sm" : "bg-white/50 text-black backdrop-blur-sm"
          }`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.type === "Original" && <Code2 className="mr-1 h-3 w-3" />}
          {project.type === "Clone" && <Briefcase className="mr-1 h-3 w-3" />}
          {project.type}
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-between px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={prevImage}
            className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={nextImage}
            className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Image counter indicator */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {project.images.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 rounded-full ${currentImageIndex === index ? "w-4 bg-yellow-400" : "w-1.5 bg-white/60"}`}
              initial={false}
              animate={{ width: currentImageIndex === index ? 16 : 6 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <motion.h3
          className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className={`text-sm mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
              theme === "dark" ? "bg-zinc-700 text-white hover:bg-zinc-600" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </motion.a>

          <motion.a
            href={project.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Preview
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [activeTab, setActiveTab] = useState("skills")
  const [selectedType, setSelectedType] = useState("All Projects")
  const [selectedOutlet, setSelectedOutlet] = useState(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(70)

  const phrases = ["Full Stack Developer", "Web Designer", "UI/UX Designer", "React Developer"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      // Adjust typing speed
      setTypingSpeed(isDeleting ? 50 : 70)

      if (!isDeleting && text === fullText) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Small pause before typing next word
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  const sections = ["home", "about", "skill", "projects", "portfolio", "creative-outlets", "contact"]
  const sectionRefs = useRef(sections.map(() => React.createRef()))

  // Sample data with real images
  const projects = [
    {
      id: 1,
      title: "MortalMen Online Shop",
      description: "A fully responsive online store with advanced features.",
      type: "Original",
      images: [ea1, ea2],
      githubUrl: "https://github.com/username/online-shop",
      linkedinUrl: "https://example.com/online-shop",
    },
    {
      id: 2,
      title: "Messenger Clone",
      description: "A feature-rich social media platform inspired by Messenger, built with modern web technologies.",
      type: "Clone",
      images: [msm, ms],
      githubUrl: "https://github.com/username/messenger-clone",
      linkedinUrl: "https://example.com/messenger-clone",
    },
    {
      id: 3,
      title: "Online Tiffin Delivery Website",
      description: "A fully responsive online Tiffin Delivering Website with advanced features.",
      type: "Original",
      images: [tf1, tf2, tf3],
      githubUrl: "https://github.com/username/tiffin-delivery",
      linkedinUrl: "https://example.com/tiffin-delivery",
    },
    {
      id: 4,
      title: "E-commerce Admin Dashboard",
      description: "A fully responsive online store Admin Dashboard with advanced features.",
      type: "Original",
      images: [a1, a2, ea5],
      githubUrl: "https://github.com/username/admin-dashboard",
      linkedinUrl: "https://example.com/admin-dashboard",
    },
  ]

  const skills = [
    { name: "JavaScript", icon: ja },
    { name: "Python", icon: py },
    { name: "React", icon: re },
    { name: "Node", icon: node },
    { name: "MongoDB", icon: mo },
  ]

  const tools = [
    { name: "VS Code", icon: vs },
    { name: "Canva", icon: ca },
    { name: "Photoshop", icon: poo },
    { name: "Git", icon: git },
    { name: "Figma", icon: fi },
  ]

  const creativeOutlets = [
    {
      id: "song",
      title: "Song",
      description: "Dive into my songs that fuel and inspire your Music Passion.",
      icon: Music,
      image: so,
    },
    {
      id: "poetry",
      title: "Poem",
      description: "Collection of verses that capture emotions, reflection.",
      icon: Feather,
      image: po,
    },
    {
      id: "story",
      title: "Story",
      description: "Collection of stories that blend reality with imagination.",
      icon: Book,
      image: st,
    },
    {
      id: "novel",
      title: "Novel",
      description: "Delve into the realms of thought-provoking novels.",
      icon: BookOpen,
      image: no,
    },
  ]

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      return newTheme
    })
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }, [])

  const handlePrivateClick = useCallback((id) => {
    setSelectedOutlet(id)
    setPassword("")
    setError("")
  }, [])

  const handlePasswordSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (password === "sisan0011") {
        setSelectedOutlet(null)
        setPassword("")
        setError("")
        alert(`${selectedOutlet?.charAt(0).toUpperCase()}${selectedOutlet?.slice(1)} content unlocked!`)
      } else {
        setError("You are not selected for this. Please try again.")
      }
    },
    [password, selectedOutlet],
  )

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX || 0, y: e.clientY || 0 })
  }, [])

  useEffect(() => {
    // Initialize dark mode on first render
    document.documentElement.classList.toggle("dark", theme === "dark")

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const currentScrollPos = window.scrollY
      let activeIndex = 0

      sections.forEach((section, index) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop } = element
          if (currentScrollPos >= offsetTop - 100) {
            activeIndex = index
          }
        }
      })

      setActiveSection(sections[activeIndex])
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Call handleScroll once to set initial active section
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove, theme, sections])

  const filteredProjects =
    selectedType === "All Projects" ? projects : projects.filter((project) => project.type === selectedType)

  const projectTypes = ["All Projects", "Original", "Clone"]

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.")
      return
    }

    setIsSubmitting(true)
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Here you would typically handle the actual form submission
    alert("Form submitted successfully!")
    form.reset()
  }, [])

  // Enhanced animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ease-in-out ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor follower */}
      <div
        className="fixed pointer-events-none z-0 w-64 h-64 rounded-full opacity-20 blur-3xl transition-all duration-300"
        style={{
          background:
            theme === "dark"
              ? `radial-gradient(circle at center, rgba(234, 179, 8, 0.3) 0%, rgba(0, 0, 0, 0) 70%)`
              : `radial-gradient(circle at center, rgba(234, 179, 8, 0.2) 0%, rgba(255, 255, 255, 0) 70%)`,
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      />

      <motion.header
        className={`fixed w-full z-20 transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/50"
              : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
            : "bg-transparent"
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div className="relative w-10 h-10 overflow-hidden rounded-full z-50" whileTap={{ scale: 0.9 }}>
            <img src={logo || "/placeholder.svg"} alt="SISAN Logo" className="w-full h-full object-cover" />
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section}>
                  <motion.button
                    onClick={() => scrollToSection(section)}
                    className={`relative px-2 py-1 text-sm lg:text-base transition-colors ${
                      activeSection === section
                        ? theme === "dark"
                          ? "text-yellow-400"
                          : "text-yellow-600"
                        : theme === "dark"
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative container mx-auto px-4 py-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={20} />
              </motion.button>

              <motion.nav className="flex flex-col items-center justify-center h-full">
                <motion.ul
                  className="flex flex-col space-y-6 text-center"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {sections.map((section) => (
                    <motion.li key={section} variants={itemVariants}>
                      <motion.button
                        onClick={() => scrollToSection(section)}
                        className={`text-2xl font-medium transition-colors ${
                          activeSection === section ? "text-yellow-400" : "text-gray-300 hover:text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="mt-12 flex space-x-6"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </motion.a>
                </motion.div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" variants={itemVariants}>
              Hi, I'm <span className="text-yellow-400">Sisan</span>
            </motion.h1>
            <motion.div className="text-xl md:text-2xl mb-6 h-10" variants={itemVariants}>
              <span>I'm a </span>
              <span className="text-yellow-400">{text}</span>
              <span className="text-yellow-400 animate-pulse">|</span>
            </motion.div>
            <motion.p
              className={`mb-8 max-w-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Passionate about creating beautiful, functional, and user-friendly digital experiences. Let's bring your
              ideas to life with modern web technologies.
            </motion.p>
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-yellow-400 text-black rounded-md font-medium flex items-center hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className={`px-6 py-3 rounded-md font-medium border flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                  theme === "dark"
                    ? "border-zinc-700 text-white hover:border-zinc-600"
                    : "border-gray-300 text-gray-800 hover:border-gray-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Projects
                <ChevronDown className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={riyan || "/placeholder.svg"} alt="Sisan" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <p className={`text-sm mb-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Scroll Down</p>
          <ChevronDown className={theme === "dark" ? "text-gray-400" : "text-gray-600"} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${theme === "dark" ? "bg-zinc-900/50" : "bg-gray-100/50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              About <span className="text-yellow-400">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Get to know more about me, my background, and what drives my passion for web development.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className={`rounded-lg p-6 ${
                theme === "dark"
                  ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }`}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-4 mx-auto">
                <Code2 size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Web Development</h3>
              <p className={`text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                I specialize in building modern, responsive websites and web applications using the latest technologies
                and best practices.
              </p>
            </motion.div>

            <motion.div
              className={`rounded-lg p-6 ${
                theme === "dark"
                  ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }`}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-4 mx-auto">
                <Briefcase size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">UI/UX Design</h3>
              <p className={`text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                I create intuitive and visually appealing user interfaces that provide excellent user experiences across
                all devices.
              </p>
            </motion.div>

            <motion.div
              className={`rounded-lg p-6 ${
                theme === "dark"
                  ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }`}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-4 mx-auto">
                <BookOpen size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Continuous Learning</h3>
              <p className={`text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                I'm constantly learning new technologies and techniques to stay at the forefront of web development.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">
                My <span className="text-yellow-400">Journey</span>
              </h3>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                I started my journey in web development 5 years ago, driven by a passion for creating digital
                experiences that are both beautiful and functional. Since then, I've worked on a variety of projects,
                from small business websites to complex web applications.
              </p>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                My approach combines technical expertise with creative problem-solving, allowing me to build solutions
                that not only meet but exceed client expectations. I believe in writing clean, maintainable code and
                creating intuitive user interfaces.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">
                My <span className="text-yellow-400">Skills</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frontend Development</span>
                    <span>90%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === "dark" ? "bg-zinc-700" : "bg-gray-200"}`}>
                    <motion.div
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Backend Development</span>
                    <span>85%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === "dark" ? "bg-zinc-700" : "bg-gray-200"}`}>
                    <motion.div
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">UI/UX Design</span>
                    <span>80%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === "dark" ? "bg-zinc-700" : "bg-gray-200"}`}>
                    <motion.div
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              My <span className="text-yellow-400">Skills</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Here are the technologies and tools I work with to bring ideas to life.
            </motion.p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div
              className={`inline-flex p-1 rounded-lg ${
                theme === "dark"
                  ? "bg-zinc-800/80 border border-zinc-700/50"
                  : "bg-gray-200/80 border border-gray-300/50"
              }`}
            >
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeTab === "skills"
                    ? "bg-yellow-400 text-black"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                }`}
              >
                Technologies
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeTab === "tools"
                    ? "bg-yellow-400 text-black"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "skills" ? (
              <motion.div
                key="skills"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`flex flex-col items-center p-6 rounded-lg ${
                      theme === "dark"
                        ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                        : "bg-white/80 backdrop-blur-sm border border-gray-200"
                    }`}
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-16 h-16 mb-4" />
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="tools"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className={`flex flex-col items-center p-6 rounded-lg ${
                      theme === "dark"
                        ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                        : "bg-white/80 backdrop-blur-sm border border-gray-200"
                    }`}
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-16 h-16 mb-4" />
                    <h3 className="text-lg font-medium">{tool.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${theme === "dark" ? "bg-zinc-900/50" : "bg-gray-100/50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              My <span className="text-yellow-400">Projects</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Check out some of my recent work and personal projects.
            </motion.p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div
              className={`inline-flex p-1 rounded-lg ${
                theme === "dark"
                  ? "bg-zinc-800/80 border border-zinc-700/50"
                  : "bg-gray-200/80 border border-gray-300/50"
              }`}
            >
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    selectedType === type
                      ? "bg-yellow-400 text-black"
                      : theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-black"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} theme={theme} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Outlets Section */}
      <section id="creative-outlets" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              Creative <span className="text-yellow-400">Outlets</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Beyond coding, I express my creativity through various artistic outlets.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeOutlets.map((outlet) => (
              <motion.div
                key={outlet.id}
                className={`rounded-lg overflow-hidden ${
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={outlet.image || "/placeholder.svg"}
                    alt={outlet.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <outlet.icon className="text-white h-12 w-12" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{outlet.title}</h3>
                  <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {outlet.description}
                  </p>
                  <motion.button
                    onClick={() => handlePrivateClick(outlet.id)}
                    className="flex items-center justify-center w-full px-4 py-2 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    View Content
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${theme === "dark" ? "bg-zinc-900/50" : "bg-gray-100/50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              Contact <span className="text-yellow-400">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              variants={itemVariants}
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
                    }`}
                  >
                    <Mail className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
                    }`}
                  >
                    <Phone className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
                    }`}
                  >
                    <MapPin className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>New York, NY, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white hover:bg-zinc-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white hover:bg-zinc-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white hover:bg-zinc-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-zinc-800 text-white hover:bg-zinc-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  className={`p-6 rounded-lg ${
                    theme === "dark"
                      ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-1 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                          theme === "dark"
                            ? "bg-zinc-700 border-zinc-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } border`}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-1 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                          theme === "dark"
                            ? "bg-zinc-700 border-zinc-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } border`}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-1 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                          theme === "dark"
                            ? "bg-zinc-700 border-zinc-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } border`}
                        required
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 bg-yellow-400 text-black rounded-md font-medium flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 ${theme === "dark" ? "bg-black border-t border-zinc-800" : "bg-white border-t border-gray-200"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logo || "/placeholder.svg"} alt="SISAN Logo" className="w-10 h-10 rounded-full" />
            </div>
            <div className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              &copy; {new Date().getFullYear()} Sisan. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <motion.a
                href="#"
                className={theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className={theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Password Modal */}
      <AnimatePresence>
        {selectedOutlet && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedOutlet(null)}
          >
            <motion.div
              className={`w-full max-w-md p-6 rounded-lg ${
                theme === "dark" ? "bg-zinc-800 border border-zinc-700" : "bg-white border border-gray-200"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Password Required</h3>
                <motion.button
                  onClick={() => setSelectedOutlet(null)}
                  className={`p-1 rounded-full ${theme === "dark" ? "hover:bg-zinc-700" : "hover:bg-gray-200"}`}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                This content is password protected. Please enter the password to view it.
              </p>
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      theme === "dark"
                        ? "bg-zinc-700 border-zinc-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } border`}
                    placeholder="Enter password"
                    required
                  />
                </div>
                {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
                <motion.button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Missing imports for the Contact section
function Mail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function Phone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

