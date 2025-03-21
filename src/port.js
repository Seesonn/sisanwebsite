

"use client"

import React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
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
import Snowfall from "./components/snowfall"
import { cn } from "./utils/cn"

// Import images directly from assets folder
import logo from "./assets/logo.png"
import profile from "./assets/riyan.jpg"
import home from "./assets/home.png"
import web from "./assets/web.jpg"
import ui from "./assets/ui.jpg"
import dev from "./assets/dev.jpg"
import song from "./assets/so.png"
import poem from "./assets/po.jpg"
import story from "./assets/st.png"
import novel from "./assets/no.png"
import javascript from "./assets/javascript.png"
import python from "./assets/py.png"
import react from "./assets/re.png"
import node from "./assets/node.png"
import mongodb from "./assets/mo.png"
import vscode from "./assets/vs.png"
import canva from "./assets/ca.png"
import photoshop from "./assets/poo.png"
import git from "./assets/git.png"
import figma from "./assets/figma.png"

// Import project images
import mortalmen1 from "./assets/ms.png"
import mortalmen2 from "./assets/msm.png"
import messenger1 from "./assets/ea1.png"
import messenger2 from "./assets/ea2.png"
import tiffin1 from "./assets/tf1.png"
import tiffin2 from "./assets/tf2.png"
import tiffin3 from "./assets/tf3.png"
import dashboard1 from "./assets/ea3.png"
import dashboard2 from "./assets/ea4.png"
import dashboard3 from "./assets/ea5.png"

// Create images object with imported assets
const images = {
  logo,
  profile,
  home,
  web,
  ui,
  dev,
  song,
  poem,
  story,
  novel,
  javascript,
  python,
  react,
  node,
  mongodb,
  vscode,
  canva,
  photoshop,
  git,
  figma,
}

// Projects data with imported images
const projects = [
  {
    id: 1,
    title: "MortalMen Online shop",
    description: "A fully responsive online store with advanced features.",
    type: "Original",
    images: [mortalmen1, mortalmen2],
    githubUrl: "https://github.com/Seesonn/Edashboard.git",
    linkedinUrl: "https://mensfashion-indol.vercel.app/",
  },
  {
    id: 2,
    title: "Messenger Clone",
    description: "A feature-rich social media platform inspired by Messenger, built with modern web technologies.",
    type: "Clone",
    images: [messenger1, messenger2],
    githubUrl: "https://github.com/username/messenger-clone",
    linkedinUrl: "https://linkedin.com/post/messenger-clone",
  },
  {
    id: 3,
    title: "Online Tiffin Delivery Website",
    description: "A fully responsive online Tiffin Delivering Website with advanced features.",
    type: "Original",
    images: [tiffin1, tiffin2, tiffin3],
    githubUrl: "https://github.com/username/ecommerce-platform",
    linkedinUrl: "https://tiffindelivery.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Admin Dashboard",
    description: "A fully responsive online store Admin Dashboard with advanced features.",
    type: "Original",
    images: [dashboard1, dashboard2, dashboard3],
    githubUrl: "https://github.com/Seesonn/Edashboard.git",
    linkedinUrl: "https://linkedin.com/post/ecommerce-platform",
  },
]

function ProjectCard({ project, theme }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1))
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1))
  }, [project.images.length])

  useEffect(() => {
    const timer = setInterval(nextImage, 3000)
    return () => clearInterval(timer)
  }, [nextImage])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]",
        theme === "dark"
          ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
          : "bg-white/80 backdrop-blur-sm border border-gray-200",
      )}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <motion.div
          className={cn(
            "absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold flex items-center",
            theme === "dark" ? "bg-black/50 text-white backdrop-blur-sm" : "bg-white/50 text-black backdrop-blur-sm",
          )}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.type === "Original" && <Code2 className="mr-1 h-3 w-3" />}
          {project.type === "Clone" && <Briefcase className="mr-1 h-3 w-3" />}
          {project.type}
        </motion.div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4 backdrop-blur-sm">
          <motion.button
            onClick={prevImage}
            className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={nextImage}
            className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
      <div className="p-6">
        <h3 className={cn("text-xl font-bold mb-2", theme === "dark" ? "text-white" : "text-gray-800")}>
          {project.title}
        </h3>
        <p className={cn("text-sm mb-4", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
          {project.description}
        </p>
        <div className="flex space-x-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
              theme === "dark"
                ? "bg-zinc-700 text-white hover:bg-zinc-600"
                : "bg-gray-800 text-white hover:bg-gray-700",
            )}
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Preview
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  // Rest of your component remains the same
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [activeTab, setActiveTab] = useState("skills")
  const [selectedType, setSelectedType] = useState("All Projects")
  const [selectedOutlet, setSelectedOutlet] = useState(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSnowfall, setShowSnowfall] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const sections = ["home", "about", "skill", "projects", "portfolio", "creative-outlets", "contact"]
  const sectionRefs = useRef(sections.map(() => React.createRef()))

  const skills = [
    { name: "JavaScript", icon: images.javascript },
    { name: "Python", icon: images.python },
    { name: "React", icon: images.react },
    { name: "Node", icon: images.node },
    { name: "MongoDB", icon: images.mongodb },
  ]

  const tools = [
    { name: "VS Code", icon: images.vscode },
    { name: "Canva", icon: images.canva },
    { name: "Photoshop", icon: images.photoshop },
    { name: "Git", icon: images.git },
    { name: "Figma", icon: images.figma },
  ]

  const creativeOutlets = [
    {
      id: "song",
      title: "Song",
      description: "Dive into my songs that fuel and inspire your Music Passion.",
      icon: Music,
      image: images.song,
    },
    {
      id: "poetry",
      title: "Poem",
      description: "Collection of verses that capture emotions, reflection.",
      icon: Feather,
      image: images.poem,
    },
    {
      id: "story",
      title: "Story",
      description: "Collection of stories that blend reality with imagination.",
      icon: Book,
      image: images.story,
    },
    {
      id: "novel",
      title: "Novel",
      description: "Delve into the realms of thought-provoking novels.",
      icon: BookOpen,
      image: images.novel,
    },
  ]

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      return newTheme
    })
    setShowSnowfall((prevShow) => !prevShow)
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
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
      const currentScrollPos = window.scrollY
      let activeIndex = 0

      sections.forEach((section, index) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentScrollPos >= offsetTop - 100) {
            activeIndex = index
          }
        }
      })

      setActiveSection(sections[activeIndex])
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

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

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors duration-500 ease-in-out",
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900",
      )}
      onMouseMove={handleMouseMove}
    >
      {showSnowfall && <Snowfall theme={theme} />}

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
        className={cn(
          "fixed w-full z-20 transition-all duration-300",
          isScrolled
            ? theme === "dark"
              ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/50"
              : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
            : "bg-transparent",
        )}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="relative w-10 h-10 overflow-hidden rounded-full z-50"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={images.logo || "/placeholder.svg"} alt="SISAN Logo" className="w-full h-full object-cover" />
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section}>
                  <motion.button
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      "relative px-2 py-1 text-sm lg:text-base transition-colors",
                      activeSection === section
                        ? theme === "dark"
                          ? "text-yellow-400"
                          : "text-yellow-600"
                        : theme === "dark"
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black",
                    )}
                    whileHover={{ scale: 1.05 }}
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
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                theme === "dark"
                  ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300",
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300 ease-out",
                  isMenuOpen ? "rotate-45 translate-y-1.5" : "",
                )}
              />
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1",
                  isMenuOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300 ease-out",
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : "",
                )}
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
              className="relative container mx-auto px-4 py-20"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </motion.button>

              <motion.ul
                className="space-y-8 text-2xl"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {sections.map((section, index) => (
                  <motion.li
                    key={section}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(section)}
                      className={cn(
                        "block text-white hover:text-yellow-400 transition-colors",
                        activeSection === section ? "text-yellow-400" : "",
                      )}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 pt-20">
        <motion.section
          id="home"
          className="min-h-screen flex flex-col justify-center py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                variants={itemVariants}
              >
                I'M SISAN BHATTARAI
              </motion.h2>
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4"
                variants={itemVariants}
              >
                Welcome to my website
              </motion.h3>
              <motion.p className="mb-6 text-sm sm:text-base lg:text-lg" variants={itemVariants}>
                "Dear Visitor, as you navigate through the content of this website, remember that life is a journey
                filled with twists, turns, and chapters that shape our unique stories. Embrace the highs, learn from the
                lows, and know that you're not alone. Just like the ever-changing nature of a webpage, your life is a
                work in progress. Keep scrolling, keep exploring, and find inspiration in every pixel of your personal
                narrative. Your story matters, and this space is a reminder that, no matter what, there's always a new
                page waiting to be written."
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center text-sm sm:text-base shadow-lg hover:shadow-yellow-400/20"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow Me <ArrowRight className="ml-2" size={16} />
              </motion.button>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={images.home || "/placeholder.svg"}
                alt="Sisan"
                className="rounded-lg w-full max-w-md mx-auto shadow-xl"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
            Personal Insights
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div className="md:w-1/3" variants={itemVariants}>
              <img
                src={images.profile || "/placeholder.svg"}
                alt="Profile"
                className="rounded-lg w-full max-w-md mx-auto shadow-lg"
              />
            </motion.div>

            <motion.div className="md:w-2/3" variants={itemVariants}>
              <motion.p className="mb-6 text-sm sm:text-base lg:text-lg" variants={itemVariants}>
                Sisan Bhattarai, born on December 10, 2001, in Nepal. Passionate about coding and poetry, I find joy in
                the intersection of technology and creativity. Exploring the beauty of Nepal while pursuing my interests
                is what drives me.
              </motion.p>

              <motion.p className="mb-6 text-sm sm:text-base lg:text-lg" variants={itemVariants}>
                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js &
                Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to
                life. User experience, pixel perfect design, and writing clean, readable, highly performant code matters
                to me.
              </motion.p>

              <motion.p className="mb-6 text-sm sm:text-base lg:text-lg" variants={itemVariants}>
                I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a
                developer, taking on new challenges and learning the latest technologies along the way.
              </motion.p>

              <motion.h3 className="text-xl font-bold mb-2" variants={itemVariants}>
                Finally, some quick bits about me:
              </motion.h3>

              <motion.ul className="list-disc list-inside mb-4" variants={itemVariants}>
                <li>Bachelor in CSIT</li>
                <li>Learning Cyber Security</li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          id="skill"
          className="md:flex md:items-center md:justify-between py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
              My Programming Arsenal
            </motion.h2>
            <motion.p className="text-lg md:text-xl mb-6" variants={itemVariants}>
              Crafting intuitive interfaces that adapt swiftly, empowering users to accomplish tasks with unparalleled
              ease and efficiency.
            </motion.p>
            <div className="flex space-x-2 mb-6 md:mb-0">
              {["skills", "tools"].map((tab) => (
                <motion.button
                  key={tab}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === tab
                      ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                      : theme === "dark"
                        ? "bg-zinc-800 text-white hover:bg-zinc-700"
                        : "bg-gray-200 text-black hover:bg-gray-300",
                  )}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-xl p-4 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(activeTab === "skills" ? skills : tools).map((item, index) => (
                      <motion.div
                        key={item.name}
                        className={cn(
                          "p-4 rounded-lg flex flex-col items-center justify-center",
                          theme === "dark"
                            ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                            : "bg-white/80 backdrop-blur-sm border border-gray-200",
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.1 },
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            theme === "dark"
                              ? "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
                              : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full bg-white flex items-center justify-center shadow-md">
                          <img
                            src={item.icon || "/placeholder.svg"}
                            className="w-8 h-8 md:w-10 md:h-10"
                            alt={item.name}
                          />
                        </div>
                        <span className={cn("text-sm font-medium", theme === "dark" ? "text-white" : "text-black")}>
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.section
          id="projects"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
            Recent Projects
          </motion.h2>

          <motion.p className="text-lg md:text-xl mb-6" variants={itemVariants}>
            Explore our latest web development projects, showcasing our expertise in creating innovative and efficient
            digital solutions.
          </motion.p>

          <motion.div className="flex justify-center mb-8" variants={itemVariants}>
            <div className="relative inline-block text-left">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={cn(
                  "block appearance-none w-full py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400",
                  theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-white text-black border-gray-300",
                )}
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} theme={theme} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="portfolio"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
            Portfolio
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {[
              { title: "Website Designing", image: images.web },
              { title: "UX/UI Designing", image: images.ui },
              { title: "Cyber Security", image: images.dev },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  "p-4 rounded-lg overflow-hidden group",
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200",
                )}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    theme === "dark" ? "0 20px 25px -5px rgba(0, 0, 0, 0.5)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <h3
                  className={cn(
                    "text-lg sm:text-xl lg:text-2xl font-bold",
                    theme === "dark" ? "text-white" : "text-black",
                  )}
                >
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="creative-outlets"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
            Creative Outlets
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {creativeOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                className={cn(
                  "rounded-lg overflow-hidden transition-all duration-300 p-4",
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200",
                )}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    theme === "dark" ? "0 20px 25px -5px rgba(0, 0, 0, 0.5)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={outlet.image || "/placeholder.svg"}
                    alt={outlet.title}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <h3
                  className={cn(
                    "text-lg sm:text-xl lg:text-2xl font-bold mb-2",
                    theme === "dark" ? "text-white" : "text-black",
                  )}
                >
                  {outlet.title}
                </h3>
                <p className={cn("mb-4 text-sm sm:text-base", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
                  {outlet.description}
                </p>
                <motion.button
                  onClick={() => handlePrivateClick(outlet.id)}
                  className="bg-yellow-400 text-black px-3 py-2 rounded-full font-bold flex items-center text-sm shadow-lg hover:shadow-yellow-400/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <outlet.icon className="mr-2" size={16} />
                  Private
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-12 sm:py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2
              className={cn(
                "text-2xl sm:text-3xl lg:text-4xl font-bold mb-4",
                theme === "dark" ? "text-white" : "text-black",
              )}
            >
              Get in Touch
            </h2>
            <p
              className={cn(
                "max-w-2xl mx-auto text-sm sm:text-base",
                theme === "dark" ? "text-gray-300" : "text-gray-600",
              )}
            >
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing
              together.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div className="lg:w-1/2 space-y-8" variants={itemVariants}>
              <div
                className={cn(
                  "p-6 rounded-xl",
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200",
                )}
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold">Available for Freelance</h3>
                </div>
                <p className={cn("text-sm mb-4", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
                  I'm currently available for remote freelance projects. Let's discuss how I can help bring your ideas
                  to life.
                </p>
                <motion.a
                  href="#contact-form"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl",
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200",
                )}
              >
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <div className="flex space-x-6">
                  {[
                    { icon: Linkedin, url: "https://www.linkedin.com/in/sisan-bhattarai-7006242b2", label: "LinkedIn" },
                    { icon: Facebook, url: "https://www.facebook.com/seeson.777", label: "Facebook" },
                    { icon: Instagram, url: "https://www.instagram.com/see_son_", label: "Instagram" },
                    { icon: Github, url: "https://github.com/Seesonn", label: "GitHub" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex flex-col items-center justify-center transition-colors",
                        theme === "dark" ? "text-white hover:text-yellow-400" : "text-black hover:text-yellow-600",
                      )}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <div
                        className={cn(
                          "p-3 rounded-full mb-2",
                          theme === "dark" ? "bg-zinc-700 hover:bg-zinc-600" : "bg-gray-200 hover:bg-gray-300",
                        )}
                      >
                        <social.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div id="contact-form" className="lg:w-1/2" variants={itemVariants}>
              <div
                className={cn(
                  "p-6 rounded-xl",
                  theme === "dark"
                    ? "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200",
                )}
              >
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={cn(
                          "block text-sm font-medium mb-1",
                          theme === "dark" ? "text-gray-300" : "text-gray-700",
                        )}
                      >
                        Full Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className={cn(
                          "w-full p-3 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none",
                          theme === "dark"
                            ? "bg-zinc-700 text-white border border-zinc-600"
                            : "bg-white text-gray-800 border border-gray-300",
                        )}
                        required
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                    <div>
                      <label
                        className={cn(
                          "block text-sm font-medium mb-1",
                          theme === "dark" ? "text-gray-300" : "text-gray-700",
                        )}
                      >
                        Email
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className={cn(
                          "w-full p-3 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none",
                          theme === "dark"
                            ? "bg-zinc-700 text-white border border-zinc-600"
                            : "bg-white text-gray-800 border border-gray-300",
                        )}
                        required
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </motion.div>

                  <div>
                    <label
                      className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-300" : "text-gray-700",
                      )}
                    >
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      className={cn(
                        "w-full p-3 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none",
                        theme === "dark"
                          ? "bg-zinc-700 text-white border border-zinc-600"
                          : "bg-white text-gray-800 border border-gray-300",
                      )}
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <div>
                    <label
                      className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-300" : "text-gray-700",
                      )}
                    >
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      maxLength={250}
                      className={cn(
                        "w-full p-3 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none",
                        theme === "dark"
                          ? "bg-zinc-700 text-white border border-zinc-600"
                          : "bg-white text-gray-800 border border-gray-300",
                      )}
                      style={{ resize: "none" }}
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                    <p className={cn("text-xs mt-1", theme === "dark" ? "text-gray-400" : "text-gray-500")}>
                      Max 50 words
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    className={cn(
                      "bg-yellow-400 text-black px-6 py-3 rounded-full font-bold w-full transition-all duration-300 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/20 text-sm sm:text-base",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "",
                    )}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className={cn(
          "py-12 sm:py-16",
          theme === "dark" ? "bg-zinc-900 border-t border-zinc-800" : "bg-gray-100 border-t border-gray-200",
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <motion.div
                className="relative w-12 h-12 overflow-hidden rounded-full mr-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={images.logo || "/placeholder.svg"} alt="SISAN Logo" className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <h3 className={cn("text-xl font-bold", theme === "dark" ? "text-white" : "text-gray-800")}>
                  Sisan Bhattarai
                </h3>
                <p className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/sisan-bhattarai-7006242b2" },
                { icon: Facebook, url: "https://www.facebook.com/seeson.777" },
                { icon: Instagram, url: "https://www.instagram.com/see_son_" },
                { icon: Github, url: "https://github.com/Seesonn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    theme === "dark"
                      ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"
                      : "bg-white text-gray-600 hover:bg-gray-200 hover:text-black",
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="border-t border-b py-8 my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className={cn("text-lg font-semibold mb-4", theme === "dark" ? "text-white" : "text-gray-800")}>
                Navigation
              </h4>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section}>
                    <motion.button
                      onClick={() => scrollToSection(section)}
                      className={cn(
                        "text-sm transition-colors",
                        theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black",
                      )}
                      whileHover={{ x: 5 }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={cn("text-lg font-semibold mb-4", theme === "dark" ? "text-white" : "text-gray-800")}>
                Services
              </h4>
              <ul className="space-y-2">
                {["Web Development", "UI/UX Design", "Mobile Development", "Cyber Security", "SEO Optimization"].map(
                  (service, index) => (
                    <li key={index}>
                      <span className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                        {service}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className={cn("text-lg font-semibold mb-4", theme === "dark" ? "text-white" : "text-gray-800")}>
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className={cn("mr-2 mt-1", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    sisan.bhattarai@example.com
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={cn("mr-2 mt-1", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    +977 9800000000
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={cn("mr-2 mt-1", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className={cn("text-sm", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
                    Kathmandu, Nepal
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={cn("text-sm mb-4 md:mb-0", theme === "dark" ? "text-gray-400" : "text-gray-600")}>
              &copy; {new Date().getFullYear()} Sisan Bhattarai. All rights reserved.
            </p>

            <div className="flex items-center">
              <motion.button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-full mr-4 transition-colors",
                  theme === "dark"
                    ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300",
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              <span className={cn("text-xs", theme === "dark" ? "text-gray-500" : "text-gray-400")}>
                Designed with ❤️ by Sisan
              </span>
            </div>
          </div>
        </div>
      </motion.footer>

      <AnimatePresence>
        {selectedOutlet && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={cn(
                "p-6 rounded-lg max-w-md w-full shadow-2xl",
                theme === "dark"
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-white text-gray-800 border border-gray-200",
              )}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Enter Password</h3>
                <motion.button
                  onClick={() => setSelectedOutlet(null)}
                  className="text-yellow-400 hover:text-yellow-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <form onSubmit={handlePasswordSubmit}>
                <div className="relative">
                  <motion.input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className={cn(
                      "w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400",
                      theme === "dark"
                        ? "bg-zinc-700 text-white border-zinc-600"
                        : "bg-white text-gray-800 border-gray-300",
                    )}
                    whileFocus={{ scale: 1.01 }}
                  />
                  <Lock className="absolute right-3 top-3 text-yellow-400" size={20} />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {!password && <p className="text-yellow-500 mb-4">Password Required</p>}
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-4 py-3 rounded-full font-bold transition-transform hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/20"
                  disabled={!password}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Unlock Content
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}






// import React, { useState, useEffect, useCallback } from 'react';
// import { ArrowRight, Moon, Sun, Music, Book, Feather, BookOpen, Linkedin, Facebook, Instagram, Send, Github, ExternalLink, Code2, Briefcase, ChevronDown, ChevronLeft, ChevronRight, X, Lock } from 'lucide-react';
// import Snowfall from './Component/Snowfall';

// // Import images (unchanged)
// import riyan from "./assets/riyan.jpg"
// import home from "./assets/home.png"
// import web from "./assets/web.jpg"
// import ui from "./assets/ui.jpg"
// import dev from "./assets/dev.jpg"
// import po from "./assets/po.jpg"
// import st from "./assets/st.png"
// import so from "./assets/so.png"
// import no from "./assets/no.png"
// import py from "./assets/py.png"
// import ja from "./assets/javascript.png"
// import vs from "./assets/vs.png"
// import re from "./assets/re.png"
// import ca from "./assets/ca.png"
// import poo from "./assets/po.png"
// import mo from "./assets/mo.png"
// import node from "./assets/node.png"
// import git from "./assets/git.png"
// import fi from "./assets/figma.png"
// import ms from "./assets/ms.png"
// import msm from "./assets/msm.png"
// import ea1 from "./assets/ea1.png"
// import ea2 from "./assets/ea2.png"
// import ea3 from "./assets/ea3.png"
// import ea4 from "./assets/ea4.png"
// import ea5 from "./assets/ea5.png"
// import logo from"./assets/logo.png"
// import tf1 from "./assets/tf1.png"
// import tf2 from "./assets/tf2.png"
// import tf3 from "./assets/tf3.png"
// import a1 from "./assets/a1.png"
// import a2 from "./assets/a2.png"

// // Projects data (unchanged)
// const projects = [
//   {
//     id: 1,
//     title: "MortalMen Online shop",
//     description: "A fully responsive online store with advanced features.",
//     type: "Original",
//     images: [a1, a2],
//     githubUrl: "https://github.com/Seesonn/Edashboard.git",
//     linkedinUrl: "https://mensfashion-indol.vercel.app/"
//   },
//   {
//     id: 2,
//     title: "Messenger Clone",
//     description: "A feature-rich social media platform inspired by Messenger, built with modern web technologies.",
//     type: "Clone",
//     images: [ms, msm],
//     githubUrl: "https://github.com/username/messenger-clone",
//     linkedinUrl: "https://linkedin.com/post/messenger-clone"
//   },
//   {
//     id: 3,
//     title: "Online Tiffin Delivery Website",
//     description: "A fully responsive online Tiffin Delivering Website with advanced features.",
//     type: "Original",
//     images: [tf1, tf2, tf3],
//     githubUrl: "https://github.com/username/ecommerce-platform",
//     linkedinUrl: "https://tiffindelivery.vercel.app/"
//   },
//   {
//     id: 4,
//     title: "E-commerce Admin Dashboard",
//     description: "A fully responsive online store Admin Dashboard with advanced features.",
//     type: "Original",
//     images: [ea1, ea2, ea3, ea4, ea5],
//     githubUrl: "https://github.com/Seesonn/Edashboard.git",
//     linkedinUrl: "https://linkedin.com/post/ecommerce-platform"
//   },
// ];

// function ProjectCard({ project, theme }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [project.images.length]);

//   const prevImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
//     );
//   }, [project.images.length]);

//   useEffect(() => {
//     const timer = setInterval(nextImage, 3000);
//     return () => clearInterval(timer);
//   }, [nextImage]);

//   return (
//     <div className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? ' bg-zinc-800' : 'bg-gray-200'}`}>
//       <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
//         <img
//           src={project.images[currentImageIndex]}
//           alt={`${project.title} - Image ${currentImageIndex + 1}`}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />
//         <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold flex items-center ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-black'}`}>
//           {project.type === 'Original' && <Code2 className="mr-1 h-3 w-3" />}
//           {project.type === 'Clone' && <Briefcase className="mr-1 h-3 w-3" />}
//           {project.type}
//         </div>
//         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4">
//           <button
//             onClick={prevImage}
//             className="text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</h3>
//         <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
//         <div className="flex space-x-4">
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${theme === 'dark' ? 'bg-white/80 hover:bg-white/90 ' : 'bg-black/60 text-white hover:bg-black/80'}`}
//           >
//             <Github className="mr-2 h-4 w-4" />
//             Source Code
//           </a>
//           <a
//             href={project.linkedinUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${theme === 'dark' ? 'bg-yellow-300 hover:bg-yellow-400' : 'bg-yellow-300 hover:bg-yellow-400'}`}
//           >
//             <ExternalLink className="mr-2 h-4 w-4" />
//             Preview
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Portfolio() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [theme, setTheme] = useState('dark');
//   const [activeTab, setActiveTab] = useState('skills');
//   const [selectedType, setSelectedType] = useState("All Projects");
//   const [selectedOutlet, setSelectedOutlet] = useState(null);
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSnowfall, setShowSnowfall] = useState(true);

//   const skills = [
//     { name: 'JavaScript', icon: ja },
//     { name: 'Python', icon: py },
//     { name: 'React', icon: re },
//     { name: 'Node', icon: node },
//     { name: 'MongoDB', icon: mo },
//   ];

//   const tools = [
//     { name: 'VS Code', icon: vs },
//     { name: 'Canva', icon: ca },
//     { name: 'Photoshop', icon: poo },
//     { name: 'Git', icon: git },
//     { name: 'Figma', icon: fi },
//   ];

//   const creativeOutlets = [
//     { id: 'song', title: 'Song', description: 'Dive into my songs that fuel and inspire your Music Passion.', icon: Music, image: so },
//     { id: 'poetry', title: 'Poem', description: 'Collection of verses that capture emotions, reflection.', icon: Feather, image: po },
//     { id: 'story', title: 'Story', description: 'Collection of stories that blend reality with imagination.', icon: Book, image: st },
//     { id: 'novel', title: 'Novel', description: 'Delve into the realms of thought-provoking novels.', icon: BookOpen, image: no }
//   ];

//   const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
//   const toggleTheme = useCallback(() => {
//     setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
//     setShowSnowfall(prevShow => !prevShow);
//   }, []);

//   const scrollToSection = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   }, []);

//   const handlePrivateClick = useCallback((id) => {
//     setSelectedOutlet(id);
//     setPassword('');
//     setError('');
//   }, []);

//   const handlePasswordSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (password === 'sisan0011') {
//       setSelectedOutlet(null);
//       setPassword('');
//       setError('');
//       alert(`${selectedOutlet?.charAt(0).toUpperCase()}${selectedOutlet?.slice(1)} content unlocked!`);
//     } else {
//       setError('You are not selected for this. Please try again.');
//     }
//   }, [password, selectedOutlet]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const filteredProjects = selectedType === "All Projects" 
//     ? projects 
//     : projects.filter(project => project.type === selectedType);

//   const projectTypes = ["All Projects", "Original", "Clone"];

//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const message = formData.get('message');

//     if (!name || !email || !message) {
//       alert('Please fill in all fields before submitting.');
//       return;
//     }

//     setIsSubmitting(true);
//     // Simulating form submission
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     setIsSubmitting(false);
//     // Here you would typically handle the actual form submission
//     alert('Form submitted successfully!');
//     form.reset();
//   }, []);

//   return (
//     <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
//       {showSnowfall && <Snowfall theme={theme} />}
//       <header className={`fixed w-full z-20 ${isScrolled ? (theme === 'dark' ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-90') : 'bg-transparent'}`}>
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full z-50">
//             <img
//               src={logo}
//               alt="SISAN Logo"
//               className="w-full h-full object-cover"
//               priority
//             />
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex space-x-4 lg:space-x-6">
//               {['home', 'about', 'skill', 'projects', 'portfolio', 'creative-outlets', 'contact'].map((section) => (
//                 <li key={section}>
//                   <button
//                     onClick={() => scrollToSection(section)}
//                     className={`hover:text-yellow-400 transition-colors text-sm lg:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
//                   >
//                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleTheme}
//               className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
//             >
//               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button
//               onClick={toggleMenu}
//               className="md:hidden w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
//               <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
//               <span className={`w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {isMenuOpen && (
//         <div className="fixed inset-0 z-30 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-center">
//           <div className="relative container mx-auto px-4 py-20">
//             <button 
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-white transition-colors"
//               aria-label="Close menu"
//             >
//               <span className="sr-only">Close</span>
//               <X className="h-6 w-6" />
//             </button>
//             <ul className="space-y-8 text-2xl">
//               {['home', 'about', 'skill', 'projects', 'portfolio', 'creative-outlets', 'contact'].map((section) => (
//                 <li key={section}>
//                   <button
//                     onClick={() => scrollToSection(section)}
//                     className="block text-white hover:text-yellow-400 transition-colors"
//                   >
//                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       <main className="container mx-auto px-4 pt-20">
//         <section id="home" className="min-h-screen flex flex-col justify-center py-20">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//                 I'M SISAN BHATTARAI
//               </h2>
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4">
//                 Welcome to my website
//               </h3>
//               <p className="mb-6 text-sm sm:text-base lg:text-lg">
//                 "Dear Visitor, as you navigate through the content of this website, remember that life is a journey filled with twists, turns, and chapters that shape our unique stories. Embrace the highs, learn from the lows, and know that you're not alone. Just like the ever-changing nature of a webpage, your life is a work in progress. Keep scrolling, keep exploring, and find inspiration in every pixel of your personal narrative. Your story matters, and this space is a reminder that, no matter what, there's always a new page waiting to be written."
//               </p>
//               <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full font-bold flex items-center text-sm sm:text-base">
//                 Follow Me <ArrowRight className="ml-2" size={16} />
//               </button>
//             </div>
//             <div className="md:w-1/2">
//               <img src={home} alt="sisan" className="rounded-lg w-full max-w-md mx-auto" />
//             </div>
//           </div>
//         </section>

//         <section id="about" className="py-20">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
//             Personal Insights
//           </h2>
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="md:w-1/3">
//               <img src={riyan} alt="Profile" className="rounded-lg w-full max-w-md mx-auto" />
//             </div>
//             <div className="md:w-2/3">
//               <p className="mb-6 text-sm sm:text-base lg:text-lg">Sisan Bhattarai, born on December 10, 2001, in Nepal.
//               Passionate about coding and poetry, I find joy in the intersection of technology and creativity. Exploring the beauty of Nepal while pursuing my interests is what drives me.</p>
            
//               <p className="mb-6 text-sm sm:text-base lg:text-lg">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clean, readable, highly performant code matters to me.</p>
//               <p className="mb-6 text-sm sm:text-base lg:text-lg">I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.</p>
              
//               <h3 className="text-xl font-bold mb-2">Finally, some quick bits about me:</h3>
//               <ul className="list-disc list-inside mb-4">
//                 <li>Bachelor in CSIT</li>
//                 <li>Learning Cyber Security</li>
//               </ul>
//             </div>
//           </div>
//         </section>
        
//         <div id="skill" className="md:flex md:items-center md:justify-between py-20">
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
//               My Programming Arsenal
//             </h2>
//             <p className="text-lg md:text-xl mb-6">
//               Crafting intuitive interfaces that adapt swiftly, empowering users to accomplish tasks with unparalleled ease and efficiency.
//             </p>
//             <div className="flex space-x-2 mb-6 md:mb-0">
//               {['skills', 'tools'].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeTab === tab
//                       ? 'bg-yellow-400 text-black'
//                       : theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-gray-200 text-black'
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="overflow-hidden rounded-xl p-4 min-h-[280px]">
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {(activeTab === 'skills' ? skills : tools).map((item) => (
//                   <div
//                     key={item.name}
//                     className={`p-4 rounded-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 ${theme === 'dark' ? ' bg-zinc-800' : 'bg-gray-200'}`}
//                   >
//                     <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full bg-white flex items-center justify-center">
//                       <img src={item.icon} className="w-8 h-8 md:w-10 md:h-10" alt={item.name} />
//                     </div>
//                     <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
     
//         <section id="projects" className="py-20">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
//             Recent Projects
//           </h2>
//           <p className="text-lg md:text-xl mb-6">
//             Explore our latest web development projects, showcasing our expertise in creating innovative and efficient digital solutions.
//           </p>
          
//           <div className="flex justify-center mb-8">
//             <div className="relative inline-block text-left">
//               <select
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//                 className={`block appearance-none w-full py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
//                   theme === 'dark'
//                     ? 'bg-zinc-800 text-white border-gray-700'
//                     : 'bg-gray-200 text-black border-gray-300'
//                 }`}
//               >
//                 {projectTypes.map((type) => (
//                   <option key={type} value={type}>{type}</option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
//                 <ChevronDown className="h-4 w-4" />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <ProjectCard key={project.id} project={project} theme={theme} />
//             ))}
//           </div>
//         </section>

//         <section id="portfolio" className="py-20">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
//             Portfolio
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               { title: "Website Designing", image: web },
//               { title: "UX/UI Designing", image: ui },
//               { title: "Cyber Security", image: dev }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`p-4 rounded-lg overflow-hidden group ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}`}
//               >
//                 <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
//                 <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </section>
            
//         <section id="creative-outlets" className="py-20">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
//             Creative Outlets
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {creativeOutlets.map((outlet) => (
//               <div
//                 key={outlet.id}
//                 className={`rounded-lg overflow-hidden transition-all duration-300 hover:bg-opacity-80 p-4 ${
//                   theme === 'dark' ? ' bg-zinc-800' : 'bg-gray-200'
//                 }`}
//               >
//                 <img src={outlet.image} alt={outlet.title} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4" />
//                 <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{outlet.title}</h3>
//                 <p className={`mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{outlet.description}</p>
//                 <button 
//                   onClick={() => handlePrivateClick(outlet.id)}
//                   className="bg-yellow-400 text-black px-3 py-2 rounded-full font-bold flex items-center transition-transform hover:scale-105 text-sm"
//                 >
//                   <outlet.icon className="mr-2" size={16} />
//                   Private
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="contact" className="py-12 sm:py-20">
//           <div className="flex flex-col lg:flex-row gap-8">
//             <div className="lg:w-1/2">
//               <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get in Touch</h2>
//               <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Social Media</h3>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: Linkedin, url: "https://www.linkedin.com/in/sisan-bhattarai-7006242b2" },
//                   { icon: Facebook, url: "https://www.facebook.com/seeson.777" },
//                   { icon: Instagram, url: "https://www.instagram.com/see_son_" }
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     className={`text-2xl sm:text-3xl lg:text-4xl hover:text-yellow-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}
//                   >
//                     <social.icon />
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <input type="hidden" name="access_key" value="c95b3f68-9430-43a9-9661-5abef6c872b6" />
//                 <input 
//                   type="text" 
//                   name="name"
//                   placeholder="Full Name" 
//                   className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-gray-200 text-gray-800'}`}
//                   required
//                 />
//                 <input 
//                   type="email" 
//                   name="email"
//                   placeholder="Email" 
//                   className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-gray-200 text-gray-800'}`}
//                   required
//                 />
//                 <textarea 
//                   name="message"
//                   placeholder="Type your message (max 50 words)" 
//                   rows={4} 
//                   maxLength={250}
//                   className={`w-full p-2 rounded transition-colors duration-300 ${theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-gray-200 text-gray-800'}`}
//                   onInput={(e) => {
//                     const words = e.target.value.split(/\s+/).filter(word => word.length > 0);
//                     if (words.length > 50) {
//                       e.target.value = words.slice(0, 50).join(' ');
//                     }
//                   }}
//                   style={{ resize: 'none' }}
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className={`bg-yellow-400 text-black px-4 py-2 rounded-full font-bold w-full transition-all duration-300 hover:bg-yellow-500 hover:scale-105 text-sm sm:text-base ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit'}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className={`py-6 sm:py-8 text-center ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}>
//         <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>&copy; 2024 SISAN. All rights reserved.</p>
//       </footer>

//       {selectedOutlet && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
//           <div className={`p-6 rounded-lg max-w-md w-full ${theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">Enter Password</h3>
//               <button
//                 onClick={() => setSelectedOutlet(null)}
//                 className="text-yellow-400 hover:text-yellow-500"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <form onSubmit={handlePasswordSubmit}>
//               <div className="relative">
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter password"
//                   className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
//                     theme === 'dark' ? ' bg-zinc-800 text-white' : 'bg-white text-gray-800'
//                   }`}
//                 />
//                 <Lock className="absolute right-3 top-2.5 text-yellow-400" size={20} />
//               </div>
//               {error && <p className="text-red-500 mb-4">{error}</p>}
//               {!password && <p className="text-yellow-500 mb-4">Password Required</p>}
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-400 text-black px-4 py-2 rounded-full font-bold transition-transform hover:scale-105"
//                 disabled={!password}
//               >
//                 Unlock Content
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





