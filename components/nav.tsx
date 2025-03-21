import Image from 'next/image';
import Link from 'next/link'

export const Nav = () => {

    return (        
        // Navigation Bar
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/imgnb.png" // Ensure this path is correct
            alt="Bright Yanchirah"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </Link>
        <div className="text-2xl font-bold">BRIGHT.YANCHIRAH</div>
        <div className="flex gap-8 text-sm">
          <a href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </a>
          <a href="/projects" className="hover:text-gray-300 transition-colors">
            PROJECTS
          </a>
          <a href="/skills" className="hover:text-gray-300 transition-colors">
            SKILLS
          </a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">
            CONTACT
          </a>
        </div>
      </nav>
    )
}