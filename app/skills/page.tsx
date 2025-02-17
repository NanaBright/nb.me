/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function Skills() {
    const skills = [
        "Python",
        "C",
        "C#",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Git",
        "GitHub",
        "Problem Solving",
        "Debugging"
    ]

    return (
        <main className="bg-black min-h-screen text-white p-8">
            <h1 className="text-6xl font-bold mb-8">My Skills</h1>
            <div className="max-w-2xl">
                <p className="text-xl mb-8">
                    As a full-stack developer, I've acquired a diverse set of skills that allow me to handle both frontend and backend development with ease. Here are some of the key technologies and skills I work with:
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-8">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-lg">
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