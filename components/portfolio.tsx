import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile, type Project } from '@/lib/portfolio'

export function CVLink({ secondary = false }: { secondary?: boolean }) {
  return <a className={secondary ? 'button secondary' : 'button'} href={profile.cv} download>Download CV <ArrowDown size={17} aria-hidden="true" /></a>
}
export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) return <div className={'project-image ' + project.slug}><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{new URL(project.url).hostname}</span></div><Image src={project.image} alt={project.imageAlt!} width={1440} height={1000} priority={priority} sizes="(max-width: 760px) 100vw, 65vw" /></div>
  return <div className={'project-art ' + project.slug} aria-label={project.name + ' project illustration'}>
    <span className="art-caption">{project.slug === 'flowstock' ? 'THE EVERYDAY, CONNECTED.' : 'AN OPEN-SOURCE EXPLORATION'}</span>
    <strong>{project.name}<span className="accent">{project.slug === 'ludwig' ? '_' : '.'}</span></strong>
    {project.slug === 'flowstock' ? <div className="workflow"><span>Inventory</span><span aria-hidden="true">→</span><span>Sales</span><span aria-hidden="true">→</span><span>Reports</span></div> : <div className="code-line"><span>$</span> ludwig <span>→</span> web / desktop / IoT</div>}
    <span className="art-bottom">{project.slug === 'flowstock' ? 'Built around real business operations' : 'Python · CLI · ORM · Authentication'}</span>
  </div>
}
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return <article className="project-row">
    <Link href={'/projects/' + project.slug} className="visual-link" aria-label={'Explore ' + project.name}><ProjectVisual project={project} priority={index === 0} /></Link>
    <div className="project-copy"><p className="eyebrow"><span className="index">0{index + 1}</span> {project.category}</p><h3><Link href={'/projects/' + project.slug}>{project.name}</Link></h3><p className="project-headline">{project.headline}</p><p className="muted">{project.description}</p><ul className="tags" aria-label="Technologies">{project.stack.map(tool => <li key={tool}>{tool}</li>)}</ul><Link href={'/projects/' + project.slug} className="text-link">Explore the project <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
  </article>
}
export function ContactBand() {
  return <section className="contact-band wrap"><p className="eyebrow">LET’S TALK</p><div><h2>Have something<br />worth building?</h2><a href={'mailto:' + profile.email} className="round-link" aria-label="Email Bright Yanchirah"><ArrowUpRight size={44} strokeWidth={1.3} aria-hidden="true" /></a></div><p>For engineering opportunities, product conversations, and thoughtful collaborations.</p><a className="email-link" href={'mailto:' + profile.email}>{profile.email}</a></section>
}
export function Footer() {
  return <footer className="footer wrap"><Link href="/" className="wordmark">Bright Yanchirah<span className="accent">.</span></Link><p>Building from Ghana. Thinking beyond borders.</p><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
}
