import Link from 'next/link'
import { Nav } from '@/components/nav'

export default function Contact() {
    return (
        <main className="bg-black min-h-screen text-white relative overflow-hidden">
            <Nav />
            
            {/* Glowing deep dark blue circle */}
            <div className="absolute top-1/4 right-[-100px] md:right-[-10px] w-[300px] h-[300px] md:w-[800px] md:h-[500px] rounded-full bg-[#00008b] opacity-30 blur-3xl z-0"></div>

            <div className="relative z-10 px-4 md:px-8 py-8">
                <div className="max-w-screen-lg mx-auto mt-16 md:mt-20">
                    <h1 className="text-2xl md:text-3xl text-center font-bold mb-6 md:mb-8">Contact Me</h1>
                    
                    <p className="text-sm md:text-base mb-6 md:mb-8 text-gray-300 leading-relaxed text-center">
                        I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
                    </p>
                    
                    <div className="max-w-md mx-auto">
                        <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                            <li className="text-sm md:text-base">
                                <strong>Email:</strong><br className="md:hidden" />
                                <a href="mailto:nanabryte.nb@gmail.com" className="underline hover:text-gray-300 transition-colors md:ml-2">
                                    nanabryte.nb@gmail.com
                                </a>
                            </li>
                            <li className="text-sm md:text-base">
                                <strong>Phone:</strong><br className="md:hidden" />
                                <a href="tel:+23359541016" className="underline hover:text-gray-300 transition-colors md:ml-2">
                                    +233 59 541 016
                                </a>
                            </li>
                            <li className="text-sm md:text-base">
                                <strong>LinkedIn:</strong><br className="md:hidden" />
                                <a 
                                    href="https://www.linkedin.com/in/bright-yanchirah-88a54b123/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="underline hover:text-gray-300 transition-colors md:ml-2"
                                >
                                    Bright Yanchirah
                                </a>
                            </li>
                            <li className="text-sm md:text-base">
                                <strong>GitHub:</strong><br className="md:hidden" />
                                <a 
                                    href="https://github.com/NanaBright" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="underline hover:text-gray-300 transition-colors md:ml-2"
                                >
                                    NanaBright
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="text-center">
                        <Link href="/" className="text-sm md:text-base underline hover:text-gray-300 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
