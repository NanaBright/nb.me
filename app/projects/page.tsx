import Link from 'next/link'
import { Nav } from '@/components/nav'

interface Project {
    name: string;
    category: string;
    description: string;
    techStack: string[];
    status: string;
    features: string[];
    link: string;
    type: string;
}

export default function Projects() {
    const projects: Project[] = [
        // Development Platform Projects
        {
            name: "Ludwig ⚙️",
            category: "Development Platform",
            description: "A complete modern development platform for Web, Desktop, and Embedded systems. Combines Python-inspired syntax with Laravel power, enabling full-stack web apps, cross-platform desktop software, and IoT firmware - all with unified CLI and zero dependencies.",
            techStack: ["Python", "Laravel", "Arduino", "CLI", "Web Framework", "IoT"],
            status: "Active Development",
            features: ["Native Web Framework", "Cross-platform GUI", "IoT Templates", "Zero Dependencies", "Artisan CLI"],
            link: "https://github.com/NanaBright/ludwig",
            type: "opensource"
        },
        {
            name: "Eldo - Ethereum dApp",
            category: "Blockchain",
            description: "A decentralized application enabling users to send and receive Ethereum transactions with messages and metadata via a user-friendly web interface. Built with React frontend and Solidity smart contracts on Goerli testnet.",
            techStack: ["React", "Solidity", "Hardhat", "Ethers.js", "Tailwind CSS", "MetaMask"],
            status: "Deployed",
            features: ["Wallet Integration", "ETH Transactions", "Message Attachments", "Transaction History", "Smart Contracts"],
            link: "https://eldo-five.vercel.app/",
            type: "blockchain"
        },
        {
            name: "TRYST Platform",
            category: "Event Management",
            description: "A comprehensive event planning platform with standalone polling system, role-based authentication, and super admin dashboard. Features real-time voting, poll sharing, and complete event management.",
            techStack: ["Next.js 14", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS", "Framer Motion"],
            status: "Production Ready",
            features: ["Standalone Polls", "Real-time Voting", "Admin Dashboard", "Payment Integration", "Role-based Access"],
            link: "https://tryst-psi.vercel.app",
            type: "web"
        },
        {
            name: "Slatetnd - Ghana Business Directory",
            category: "Business Directory",
            description: "A modern, mobile-first business directory application for Ghana. Users can search local businesses, call directly, get directions, and book rides - no authentication required for browsing.",
            techStack: ["Next.js 15", "React 19", "PostgreSQL", "Prisma ORM", "Leaflet Maps", "JWT"],
            status: "Development",
            features: ["Verified Businesses", "Direct Actions", "Mobile-First", "Real-time Data", "Location Services"],
            link: "https://vercel.com/nanabrights-projects/slatetnd",
            type: "web"
        },
        
        // Business Applications
        {
            name: "Ghana Tax Management System",
            category: "FinTech",
            description: "A comprehensive platform for computing Ghanaian business taxes including VAT, PAYE, NHIL, GETFund, and COVID levy. Features public calculator and authenticated user dashboard with transaction history.",
            techStack: ["Next.js", "Node.js", "Express", "SQLite", "JWT", "React Context"],
            status: "Fully Operational",
            features: ["Tax Calculations", "Transaction History", "PAYE Calculator", "Report Generation", "Public API"],
            link: "https://tax-api-dashboard.vercel.app",
            type: "fintech"
        },
        {
            name: "FlowStock - Inventory Management",
            category: "Business Management",
            description: "A comprehensive inventory management system built with Laravel for Yanestee Ventures. Features real-time tracking, sales management, low stock alerts, and multi-user support with role-based permissions.",
            techStack: ["Laravel", "PHP", "MySQL", "Hostinger", "Multi-user Auth"],
            status: "Deployed",
            features: ["Real-time Tracking", "Sales Management", "Low Stock Alerts", "Transaction History", "Dashboard Analytics"],
            link: "#",
            type: "business"
        },
        {
            name: "DriveProfit - Driver Income Tracker",
            category: "Mobile App",
            description: "React Native app for Ghanaian ride-hailing drivers to track income, expenses, and daily profits. Features freemium model with basic tracking free and Pro features for ₵50 one-time purchase.",
            techStack: ["React Native", "Expo", "TypeScript", "AsyncStorage", "React Navigation"],
            status: "Production Ready",
            features: ["Trip Tracking", "Profit Analysis", "Smart Directions", "Export Reports", "Monthly Analytics"],
            link: "#",
            type: "mobile"
        },
        
        // Web Applications
        {
            name: "XCRO.io - Risk Mitigation Platform",
            category: "FinTech",
            description: "A platform offering dynamic risk mitigation in business transactions through smart contracts. Beneficial for real estate, private jet charter, M&A, precious metals, and e-commerce with autonomous deposit management.",
            techStack: ["Frontend Development", "Smart Contracts", "Web3", "React"],
            status: "Live",
            features: ["Smart Contracts", "Risk Mitigation", "Autonomous Deposits", "Multi-sector Support"],
            link: "https://xcro.io",
            type: "web"
        },
        {
            name: "WeatherWave",
            category: "Utility App",
            description: "A weather application with integrated music player. Built using Next.js, GEODB Cities API, OpenWeather API, and Audiomack API with personalized user experience.",
            techStack: ["Next.js", "GEODB Cities API", "OpenWeather API", "Audiomack API"],
            status: "Live",
            features: ["Weather Forecasting", "Music Integration", "User Personalization", "API Integration"],
            link: "https://weather-wave-chi.vercel.app",
            type: "web"
        },
        
        // Desktop Applications
        {
            name: "Contact Management CRUD",
            category: "Desktop Application",
            description: "A C# WinForms application for managing contact information with full CRUD operations. Features clean separation between UI and database operations through .dll library architecture.",
            techStack: ["C#", "WinForms", ".NET", "SQL Database", "DLL Architecture"],
            status: "Complete",
            features: ["CRUD Operations", "WinForms UI", "Database Integration", "Service Architecture"],
            link: "https://github.com/NanaBright/ContactCRUD",
            type: "desktop"
        },
        {
            name: "Contact Service Library",
            category: "Backend Service",
            description: "A complementary C# class library providing backend service for contact management. Handles CRUD operations and database communication, demonstrating service-oriented architecture.",
            techStack: ["C#", "Class Library", ".NET", "Service Architecture"],
            status: "Complete",
            features: ["Backend Service", "CRUD Operations", "Database Abstraction", "Library Design"],
            link: "https://github.com/NanaBright/contact-us",
            type: "library"
        }
    ];

    // Group projects by category
    const groupedProjects = projects.reduce((acc, project) => {
        const category = project.category
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push(project)
        return acc
    }, {} as Record<string, Project[]>)

    // Define category order and colors
    const categoryConfig = {
        "Development Platform": { color: "border-purple-500", bgColor: "bg-purple-50 dark:bg-purple-900/20" },
        "Blockchain": { color: "border-blue-500", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
        "Event Management": { color: "border-green-500", bgColor: "bg-green-50 dark:bg-green-900/20" },
        "Business Directory": { color: "border-yellow-500", bgColor: "bg-yellow-50 dark:bg-yellow-900/20" },
        "FinTech": { color: "border-emerald-500", bgColor: "bg-emerald-50 dark:bg-emerald-900/20" },
        "Business Management": { color: "border-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
        "Mobile App": { color: "border-pink-500", bgColor: "bg-pink-50 dark:bg-pink-900/20" },
        "Utility App": { color: "border-cyan-500", bgColor: "bg-cyan-50 dark:bg-cyan-900/20" },
        "Desktop Application": { color: "border-indigo-500", bgColor: "bg-indigo-50 dark:bg-indigo-900/20" },
        "Backend Service": { color: "border-gray-500", bgColor: "bg-gray-50 dark:bg-gray-900/20" }
    }

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'live':
            case 'deployed':
            case 'fully operational':
            case 'production ready':
                return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            case 'active development':
            case 'development':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
            case 'complete':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
        }
    }

    return (
        <main className="bg-black min-h-screen text-white p-8">
            <Nav />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 mt-20">My Projects</h1>
                <p className="text-gray-300 mb-12 text-lg">
                    A showcase of my work across web development, blockchain, mobile apps, and business solutions.
                </p>

                {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                    <div key={category} className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className={`w-1 h-8 ${categoryConfig[category as keyof typeof categoryConfig]?.color.replace('border-', 'bg-')}`}></div>
                            {category}
                            <span className="text-sm font-normal text-gray-400">({categoryProjects.length})</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {categoryProjects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className={`border-2 ${categoryConfig[category as keyof typeof categoryConfig]?.color} rounded-xl p-6 ${categoryConfig[category as keyof typeof categoryConfig]?.bgColor} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-black">{project.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    
                                    <p className="text-black mb-4 leading-relaxed">{project.description}</p>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-black mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.features.map((feature, featureIndex) => (
                                                <span 
                                                    key={featureIndex}
                                                    className="text-xs bg-white/10 text-black px-2 py-1 rounded-md"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-black mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-md border border-gray-600"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {project.link && project.link !== "#" && (
                                        <div className="pt-4 border-t border-gray-600">
                                            <Link 
                                                href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                                                target="_blank"
                                                className="text-blue-400 hover:text-blue-300 underline transition-colors"
                                            >
                                                {project.link.startsWith('http') ? 'View Project' : project.link}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
                    <p className="text-gray-300 mb-8">
                        I&apos;m always working on new exciting projects. Check back regularly for updates.
                    </p>
                    <Link 
                        href="/" 
                        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}