import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio'
import { CVLink } from '@/components/portfolio'
import { CopyEmail } from '@/components/copy-email'
export const metadata = { title: 'Contact', description: 'Contact Bright Yanchirah for engineering opportunities, product conversations, and collaborations.', alternates: { canonical: '/contact' } }
export default function Contact() {
  return <main id="main-content"><section className="page-intro wrap"><p className="eyebrow">START A CONVERSATION</p><h1>Good things start<br /><span className="serif accent">with a hello.</span></h1><p className="intro-copy">An engineering opportunity, a product challenge, or a project worth discussing. Tell me what you have in mind.</p></section><section className="wrap contact-details"><div><p className="eyebrow">EMAIL</p><a className="contact-email" href={'mailto:' + profile.email}>{profile.email}<ArrowUpRight aria-hidden="true" /></a><CopyEmail /><p className="muted contact-hint">A little context helps: the role or project, the problem you’re solving, and your timeline.</p></div><div className="contact-aside"><p className="eyebrow">ELSEWHERE</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a><CVLink secondary /><p className="muted">Based in Ghana · GMT / UTC+0</p></div></section></main>
}
