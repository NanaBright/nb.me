import Link from 'next/link'
export default function NotFound() {
  return <main id="main-content" className="wrap page-intro"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s get you<br /><span className="serif accent">back to the work.</span></h1><p className="intro-copy">This page doesn’t exist. Explore the selected projects or return to the homepage.</p><div className="tags"><Link className="button" href="/projects">Explore projects</Link><Link className="button secondary" href="/">Go home</Link></div></main>
}
