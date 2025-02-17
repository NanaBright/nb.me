/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function About() {
  return (
    <main className="bg-black min-h-screen text-white p-8">
      <h1 className="text-6xl font-bold mb-8">About Me</h1>
      <div className="max-w-2xl">
        <p className="text-xl mb-4">
          Hi, I'm Bright Yanchirah, a passionate and self-taught full-stack developer with a knack for creating robust and efficient solutions.
        </p>
        <p className="text-xl mb-4">
          My journey in tech began with a transition from university studies to pursue a career in programming. Since then, I've honed my skills in multiple programming languages and frameworks, always striving to stay at the cutting edge of technology.
        </p>
        <p className="text-xl mb-8">
          I specialize in React.js, Next.js, and Node.js, and I'm always excited to take on new challenges and learn new technologies.
        </p>
        <Link href="/" className="text-xl underline hover:text-gray-300 transition-colors">
          Back to Home
        </Link>
      </div>
    </main>
  )
}