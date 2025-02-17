import Link from 'next/link'

export default function Projects() {
    const projects = [
        {
            name: "NDAuth",
            description: "A secure NDA management system with user authentication using ClerkAuth. Features include NDA creation, status tracking, and timestamp logging."
        },
        {
            name: "WeatherWave",
            description: "A weather app developed using Next.js, GEODB Cities API, and OpenWeather API. Integrated with a music player using Audiomack API and added a user menu for a personalized experience."
        },
        {
            name: "Tryst App",
            description: "A ticketing platform that streamlined event ticket sales and management. I was involved in frontend development and user interface design."
        },
        {
            name: "FlowStock",
            description: "An inventory manager app built for Yaneste Ventures. It's cross-platform, offline-first with Laravel and .NET MAUI integration."
        }
    ]

    return (
        <main className="bg-black min-h-screen text-white p-8">
            <h1 className="text-6xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-white/20 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link href="/" className="text-xl underline hover:text-gray-300 transition-colors">
                    Back to Home
                </Link>
            </div>
        </main>
    )
}