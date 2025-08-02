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
        <main className="bg-black min-h-screen text-white relative overflow-hidden">
            <Nav />
            
            {/* Glowing deep dark purple circle */}
            <div className="absolute top-1/4 right-[-100px] md:right-[-10px] w-[300px] h-[300px] md:w-[800px] md:h-[500px] rounded-full bg-[#4b0082] opacity-30 blur-3xl z-0"></div>

            <div className="relative z-10 px-4 md:px-8 py-8">
                <div className="max-w-screen-lg mx-auto mt-16 md:mt-20">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">My Skills</h1>
                    
                    <p className="text-sm md:text-base mb-6 md:mb-8 text-gray-300 leading-relaxed">
                        As a full-stack developer, I've acquired a diverse set of skills that allow me to handle both frontend and backend development with ease. Here are some of the key technologies and skills I work with:
                    </p>
                    
                    <ul className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-sm md:text-base text-white leading-relaxed">
                                • {skill}
                            </li>
                        ))}
                    </ul>
                    
                    <Link href="/" className="text-sm md:text-base underline hover:text-gray-300 transition-colors">
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}