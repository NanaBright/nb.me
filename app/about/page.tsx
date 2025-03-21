/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Nav } from "@/components/nav"

export default function About() {
  return (
    <main className="bg-black min-h-screen text-white p-8 relative overflow-hidden">
      
      <Nav />

      {/* Glowing deep dark green circle */}
      <div className="absolute top-1/4 right-[-150px] w-[500px] h-[500px] rounded-full bg-[#004d00] opacity-30 blur-3xl z-0"></div>

      <div className="relative mt-20 max-w-screen-lg mx-auto z-10">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="max-w-2xl">
          <p className="text-md mb-4">
        Hi, I'm Bright Yanchirah, a passionate and self-taught full-stack developer with a knack for creating robust
        and efficient solutions.
          </p>
          <p className="text-md mb-4">
        My journey in tech began with a transition from university studies to pursue a career in programming. Since
        then, I've honed my skills in multiple programming languages and frameworks, always striving to stay at the
        cutting edge of technology.
          </p>
          <p className="text-md mb-8">
        I specialize in React.js, Next.js, Node.js, C#, Python, and Laravel, and I'm always excited to take on new
        challenges and learn new technologies.
          </p>

          <div></div>
          <Link href="/" className="text-sm underline hover:text-gray-300 transition-colors">
        Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

