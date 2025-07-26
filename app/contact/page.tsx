import Link from 'next/link'
import { Nav } from '@/components/nav'

export default function Contact() {
    return (
        <main className="bg-black min-h-screen text-white p-8">
            <Nav />
            <h1 className="text-2xl mt-10 text-center font-bold mb-8">Contact Me</h1>
            {/* Glowing deep dark green circle */}
            <div className="absolute top-1/4 right-[-10px] w-[800px] h-[500px] rounded-full bg-[#00008b] opacity-30 blur-3xl z-0"></div>

            <div className="max-w-screen-lg mx-auto">
                <p className="text-md mb-8">
                    I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
                </p>
                <ul className="space-y-4 mb-8">
                    <li className="text-sm">
                        <strong>Email:</strong> <a href="mailto:nanabryte.nb@gmail.com" className="underline hover:text-gray-300 transition-colors">nanabryte.nb@gmail.com</a>
                    </li>
                    <li className="text-sm">
                        <strong>Phone:</strong> <a href="tel:+233595410162" className="underline hover:text-gray-300 transition-colors">+233595410162</a>
                    </li>
                    <li className="text-sm">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bright-yanchirah-88a54b123/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Bright Yanchirah</a>
                    </li>
                    <li className="text-sm">
                        <strong>GitHub:</strong> <a href="https://github.com/NanaBright" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">NanaBright</a>
                    </li>
                </ul>
                <Link href="/" className="text-sm underline hover:text-gray-300 transition-colors">
                    Back to Home
                </Link>
            </div>
        </main>
    )
}
