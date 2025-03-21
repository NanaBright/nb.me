import Link from 'next/link'
import { Nav } from '@/components/nav'

export default function Projects() {
    const projects = [
        {
            name: "FlowStock - unreleased",
            description: "A secure NDA management system with user authentication using ClerkAuth. Features include NDA creation, status tracking, and timestamp logging."
            
        },
        {
            name: "XCRO.io - frontend",
            description: "is a platform that offers a dynamic system for risk mitigation in various business transactions through the use of smart contracts. It is particularly beneficial for sectors such as real estate, private jet charter, mergers and acquisitions, precious metals and jewelry, and e-commerce. The platform emphasizes security and transparency, ensuring that all deposits are autonomously held without the need for human intervention"
            ,
            link: "https://xcro.io"
        },
        {
            name: "WeatherWave",
            description: "A weather app developed using Next.js, GEODB Cities API, and OpenWeather API. Integrated with a music player using Audiomack API and added a user menu for a personalized experience."
            ,
            link: "weather-wave-chi.vercel.app"
        },
        {
            name: "Tryst App - unreleased",
            description: "A ticketing platform that streamlined event ticket sales and management. I was involved in frontend development and user interface design."
            ,
            link: "tryst-psi.vercel.app"
        },
        {
            name: "Contact Us - CRUD",
            description: "This project contains a C# application designed for managing contact information using CRUD (Create, Read, Update, Delete) operations. The frontend is built with a WinForms interface, which interacts with a backend service through a .dll library. The clear separation between UI and database operations makes this project a solid example of leveraging C# for both user interaction and data management."
            ,
            link: "https://github.com/NanaBright/ContactCRUD"
        },
        {
            name: "Contact Us - Service",
            description: "is a complementary C# class library providing the backend service for managing contact information. It handles CRUD operations and facilitates communication between the WinForms frontend and the database, encapsulating the business logic within a .dll file. The design ensures efficient data storage and retrieval, demonstrating effective use of C# for service-oriented architecture."
            ,
            link: "https://github.com/NanaBright/contact-us"
        }
    ]

    return (
        <main className="bg-black min-h-screen text-white p-8">
            <Nav />
            <h1 className="text-3xl mt-20 font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-white/20 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <Link href="#" className="text-blue-500 hover:underline">
                            {project.link}
                        </Link>
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