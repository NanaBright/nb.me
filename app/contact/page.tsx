import Link from 'next/link'

export default function Contact() {
    return (
        <main className="bg-black min-h-screen text-white p-8">
            <h1 className="text-6xl font-bold mb-8">Contact Me</h1>
            <div className="max-w-2xl">
                <p className="text-xl mb-8">
                    I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
                </p>
                <ul className="space-y-4 mb-8">
                    <li className="text-xl">
                        <strong>Email:</strong> <a href="mailto:nanabryte.nb@gmail.com" className="underline hover:text-gray-300 transition-colors">nanabryte.nb@gmail.com</a>
                    </li>
                    <li className="text-xl">
                        <strong>Phone:</strong> <a href="tel:+23359541016" className="underline hover:text-gray-300 transition-colors">+23359541016</a>
                    </li>
                    <li className="text-xl">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bright-yanchirah-88a54b123/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Bright Yanchirah</a>
                    </li>
                    <li className="text-xl">
                        <strong>GitHub:</strong> <a href="https://github.com/NanaBright" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">NanaBright</a>
                    </li>
                </ul>
                <Link href="/" className="text-xl underline hover:text-gray-300 transition-colors">
                    Back to Home
                </Link>
            </div>
        </main>
    )
}