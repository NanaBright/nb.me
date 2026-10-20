'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Menu, X } from 'lucide-react'
import { profile } from '@/lib/portfolio'
const links = [{ href: '/projects', label: 'Work' }, { href: '/about', label: 'About' }, { href: '/skills', label: 'Expertise' }, { href: '/contact', label: 'Contact' }]
export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function escape(event: KeyboardEvent) { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    if (open) document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])
  return <header className="site-header"><nav className="nav wrap" aria-label="Main navigation"><Link href="/" className="wordmark" onClick={() => setOpen(false)}>Bright Yanchirah<span className="accent">.</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button><div id="navigation-links" className={'nav-links ' + (open ? 'is-open' : '')}>{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="nav-cv" href={profile.cv} download onClick={() => setOpen(false)}>CV <ArrowDown size={15} aria-hidden="true" /></a></div></nav></header>
}
