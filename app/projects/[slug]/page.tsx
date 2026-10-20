import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { ContactBand, ProjectVisual } from '@/components/portfolio'
import { projects } from '@/lib/portfolio'
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  return { title: project?.name ?? 'Project not found', description: project?.description, alternates: { canonical: '/projects/' + slug } }
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()
  return <main id="main-content"><section className="page-intro wrap"><Link href="/projects" className="text-link back-link"><ArrowLeft size={16} aria-hidden="true" /> All work</Link><p className="eyebrow">{project.category}</p><h1>{project.name}<span className="accent">.</span></h1><p className="intro-copy">{project.headline}</p><div className="project-facts"><div><span>CONTRIBUTION</span><p>{project.role}</p></div><div><span>STATUS</span><p>{project.status}</p></div><a href={project.url} className="button secondary" target="_blank" rel="noopener noreferrer">{project.slug === 'ludwig' ? 'Explore the repository' : 'Visit website'} <ArrowUpRight size={17} aria-hidden="true" /></a></div></section><div className="wrap case-visual"><ProjectVisual project={project} priority /></div><section className="wrap case-section"><p className="eyebrow">01 / THE CONTEXT</p><div><h2>{project.headline}</h2><p className="large-copy">{project.context}</p><ul className="tags">{project.stack.map(tool => <li key={tool}>{tool}</li>)}</ul></div></section><section className="wrap case-section"><p className="eyebrow">02 / THE WORK</p><div>{project.decisions.map((decision, index) => <article className="decision" key={decision.title}><span className="index">0{index + 1}</span><div><h3>{decision.title}</h3><p className="muted">{decision.text}</p></div></article>)}</div></section><section className="wrap case-section"><p className="eyebrow">03 / DELIVERY</p><p className="large-copy">{project.delivery}</p></section><ContactBand /></main>
}
