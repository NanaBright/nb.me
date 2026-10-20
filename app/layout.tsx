import './globals.css'
import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/portfolio'
import { profile } from '@/lib/portfolio'
const description = 'Senior full-stack software engineer with 7+ years of experience. Building web platforms, business software, and useful products from Ghana.'
export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: 'Bright Yanchirah — Senior Full-Stack Software Engineer', template: '%s | Bright Yanchirah' },
  description,
  authors: [{ name: profile.name, url: profile.site }],
  icons: { icon: '/icon.svg', apple: '/imgnb.png' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Bright Yanchirah — Senior Full-Stack Software Engineer', description, url: profile.site, siteName: profile.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Bright Yanchirah — Senior Full-Stack Software Engineer', description },
}
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#111613' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Nav />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, url: profile.site, sameAs: [profile.github, profile.linkedin], jobTitle: profile.title, knowsAbout: ['Full-stack development', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL'] }) }} /></body></html>
}
