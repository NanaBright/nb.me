/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Nav } from "@/components/nav"

export default function About() {
  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">
      
      <Nav />

      {/* Glowing deep dark green circle */}
      <div className="absolute top-1/4 right-[-100px] md:right-[-150px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#004d00] opacity-30 blur-3xl z-0"></div>

      <div className="relative mt-16 md:mt-20 max-w-screen-lg mx-auto z-10 px-4 md:px-8">
        <section className="max-w-3xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="text-white dark:text-white mb-4 text-sm md:text-base leading-relaxed">
            I'm a full-stack developer with experience in building modern web applications
            using Next.js, Laravel, and Node.js. I enjoy solving real-world problems and
            have developed tools for ride-hailing drivers, inventory managers, and
            e-commerce platforms.
          </p>
          <p className="text-white dark:text-white mb-4 text-sm md:text-base leading-relaxed">
            I'm currently seeking remote or hybrid roles where I can contribute to product
            teams, build scalable applications, and grow as a developer. I'm also open to
            freelance collaborations.
          </p>
          <p className="text-white dark:text-white text-sm md:text-base leading-relaxed">
            Outside of coding, I help run my family's business and enjoy learning about
            startups, tech ecosystems, and productivity tools.
          </p>
        </section>
        <div className="px-4 md:px-6">
          <Link href="/" className="text-sm underline hover:text-gray-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
