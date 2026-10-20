import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { ContactBand, CVLink, ProjectRow } from '@/components/portfolio'
import { projects } from '@/lib/portfolio'
export const metadata = { alternates: { canonical: '/' } }
export default function Home() {
  return <main id="main-content">
    <section className="hero wrap"><div className="hero-topline"><p className="eyebrow"><span className="status-dot" /> SENIOR FULL-STACK SOFTWARE ENGINEER</p><span className="location">BASED IN GHANA · WORKING ACROSS BORDERS</span></div><div className="hero-grid"><h1>Complex problems.<br />Useful <span className="serif accent">software.</span></h1><div className="hero-intro"><p>I’m Bright. I turn business problems into products people can use, from the interface to the systems behind it.</p><p className="muted">7+ years across enterprise software, web platforms, and the everyday realities of running a business.</p><CVLink /></div></div><div className="hero-bottom"><a href="#selected-work" className="scroll-link">Explore selected work <ArrowDownRight size={20} aria-hidden="true" /></a><p>Product thinking. Technical depth. End-to-end delivery.</p></div></section>
    <section id="selected-work" className="work-section wrap"><div className="section-heading"><p className="eyebrow">01 / SELECTED WORK</p><p>Built for a purpose.<br /><span className="muted">From local discovery to business operations.</span></p></div>{projects.slice(0, 3).map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}<div className="section-end"><Link href="/projects" className="text-link">More work & open source <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    <section className="about-strip"><div className="wrap about-grid"><div><p className="eyebrow">02 / HOW I WORK</p><h2>From the interface<br /><span className="serif">to the operation.</span></h2></div><div><p className="large-copy">Good software starts with understanding the work it needs to do.</p><p className="muted">My background spans software engineering and business operations. I bring both to decisions about workflows, data, permissions, and delivery, then follow the implementation through to production.</p><div className="stats"><div><strong>7+</strong><span>Years of experience</span></div><div><strong>28+</strong><span>Production applications</span></div></div><Link href="/about" className="text-link">More about my approach <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section>
    <ContactBand />
  </main>
}
