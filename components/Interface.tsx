"use client"

import { useState, JSX } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Interface() {
  // Define a type for the section keys
  type SectionKey = 'about' | 'projects' | 'skills';

  // Set the state with the correct type
  const [activeSection, setActiveSection] = useState<SectionKey>('about');

  const sections: Record<SectionKey, { title: string; content: JSX.Element | string }> = {
    about: {
      title: "About Me",
      content:
        "Highly motivated and self-taught full-stack developer with a passion for building robust and efficient solutions. I have a strong foundation in front-end and back-end development, utilizing technologies such as React.js, Next.js, Node.js, and more.",
    },
    projects: {
      title: "Projects",
      content: (
        <ul className="list-disc list-inside">
          <li>NDAuth: Secure NDA management system with user authentication using ClerkAuth.</li>
          <li>WeatherWave: Weather app using Next.js, GEODB Cities API, and OpenWeather API.</li>
          <li>Tryst App: Ticketing platform for streamlined event ticket sales and management.</li>
          <li>FlowStock: Inventory manager app built for Yaneste Ventures.</li>
        </ul>
      ),
    },
    skills: {
      title: "Skills",
      content: (
        <ul className="list-disc list-inside">
          <li>Programming Languages: Python, C, C#, HTML, CSS, JavaScript</li>
          <li>Frameworks and Libraries: React.js, Next.js, Node.js</li>
          <li>Full-Stack Development</li>
          <li>Version Control: Git, GitHub</li>
          <li>Problem Solving & Debugging</li>
        </ul>
      ),
    },
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {Object.keys(sections).map((section) => (
          <Button
            key={section}
            variant="ghost"
            className="text-white hover:text-gray-200 pointer-events-auto backdrop-blur-sm bg-white/10"
            onClick={() => setActiveSection(section as SectionKey)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </nav>
      <motion.div
        className="absolute bottom-4 left-4 right-4 pointer-events-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-black/40 backdrop-blur-md border-white/20 text-white">
          <CardHeader>
            <CardTitle>{sections[activeSection].title}</CardTitle>
          </CardHeader>
          <CardContent>{sections[activeSection].content}</CardContent>
        </Card>
      </motion.div>
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gray-200 pointer-events-auto backdrop-blur-sm bg-white/10"
        >
          <a href="https://github.com/NanaBright" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gray-200 pointer-events-auto backdrop-blur-sm bg-white/10"
        >
          <a href="https://www.linkedin.com/in/bright-yanchirah-88a54b123/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gray-200 pointer-events-auto backdrop-blur-sm bg-white/10"
        >
          <a href="mailto:nanabryte.nb@gmail.com">
            <Mail />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gray-200 pointer-events-auto backdrop-blur-sm bg-white/10"
        >
          <a href="tel:+23359541016">
            <Phone />
          </a>
        </Button>
      </div>
    </div>
  )
}
