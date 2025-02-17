"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    {
      title: "Full Stack",
      subtitle: "DEVELOPER",
      description: "Crafting robust and efficient solutions with modern technologies.",
      color: "from-purple-500 to-purple-900",
    },
    {
      title: "Creative",
      subtitle: "PROJECTS",
      description: "Building innovative applications that solve real-world problems.",
      color: "from-red-500 to-red-900",
    },
    {
      title: "Modern",
      subtitle: "SOLUTIONS",
      description: "Leveraging cutting-edge technology for optimal performance.",
      color: "from-blue-500 to-blue-900",
    },
  ]

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <Image
          src="/imgnb.png" // Make sure this path is correct
          alt="Bright Yanchirah"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div className="text-2xl font-bold">BRIGHT.YANCHIRAH</div>
        <div className="flex gap-8 text-sm">
          <a href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </a>
          <a href="/projects" className="hover:text-gray-300 transition-colors">
            PROJECTS
          </a>
          <a href="/skills" className="hover:text-gray-300 transition-colors">
            SKILLS
          </a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen w-full flex items-center relative"
        >
          {/* Background Circle */}
          <motion.div
            className={`absolute right-[-20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${sections[currentSection].color} opacity-80 blur-3xl`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Content */}
          <div className="container mx-auto px-8 flex justify-between items-center">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-4"
              >
                {`${currentSection + 1}/0${sections.length}`}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-7xl font-light mb-2"
              >
                {sections[currentSection].title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-8xl font-bold mb-6"
              >
                {sections[currentSection].subtitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-300 mb-8 max-w-lg"
              >
                {sections[currentSection].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={nextSection}
                className="flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                See More
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Profile Image Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="w-[400px] h-[400px] rounded-full border-2 border-white/20" />
              <div className="w-[380px] h-[380px] rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-8 left-8 w-64 h-[2px] bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </main>
  )
}

