/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Nav } from '@/components/nav'

export default function Skills() {
    const skills = [
        "JavaScript(React, Next.js, Express.js): Utilized for building dynamic web applications and server - side development.​",

        "C#: Employed in developing robust applications, including those with WinForms interfaces.",

        "Python: Applied in various projects, demonstrating versatility in programming languages.",

        "HTML / CSS: Used for structuring and styling web pages.",

        "MongoDB: Implemented as a NoSQL database solution in your projects.",

        "MySQL: Utilized for relational database management in your applications.",

        "Figma: Engaged in designing user interfaces and prototypes.",

        "Git: Employed for version control, ensuring collaborative and efficient development.",

        "Laravel: Applied in developing web applications, showcasing your proficiency in PHP frameworks.​"
    ]

    return (
        <main className="bg-black min-h-screen text-white p-8">
            <Nav />
            <h1 className="text-3xl font-bold mb-8">My Skills</h1>
            {/* Glowing deep dark green circle */}
            <div className="absolute top-1/4 right-[-10px] w-[800px] h-[500px] rounded-full bg-[#4b0082] opacity-30 blur-3xl z-0"></div>

            <div className="max-w-screen-lg mx-auto">
                <p className="text-xmdmb-8">
                    As a full-stack developer, I've acquired a diverse set of skills that allow me to handle both frontend and backend development with ease. Here are some of the key technologies and skills I work with:
                </p>
                <ul className="grid grid-cols-1 mt-10 gap-4 mb-8">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-lgsm">
                            • {skill}
                        </li>
                    ))}
                </ul>
                <Link href="/" className="text-xl underline hover:text-gray-300 transition-colors">
                    Back to Home
                </Link>
            </div>
        </main>
    )
}