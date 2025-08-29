import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Direct deploy-ready values (no env vars required)
const SITE_URL = 'https://nb-me.vercel.app'
const OG_IMAGE = 'https://nb-me.vercel.app/nb-me-portfolio.png'
const TWITTER_HANDLE = '@n_skerr'

export const metadata = {
  title: {
    default: 'Bright Yanchirah',
    template: '%s | Bright Yanchirah',
  },
  description: 'Full Stack Developer specializing in Laravel, React, Next.js, and Node.js',
  keywords: [
    'Bright Yanchirah',
    'Full Stack Developer',
    'Laravel',
    'Next.js',
    'React',
    'Node.js',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Bright Yanchirah', url: SITE_URL }],
  publisher: 'Bright Yanchirah',
  alternates: { canonical: SITE_URL },
  icons: {
    icon: '/imgnb.png',
    apple: '/imgnb.png',
    shortcut: '/imgnb.png',
  },
  manifest: `${SITE_URL}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Bright Yanchirah — Full Stack Developer',
    description: 'Full Stack Developer specializing in Laravel, React, Next.js, and Node.js',
    url: SITE_URL,
    siteName: 'Bright Yanchirah',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Bright Yanchirah — Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright Yanchirah — Full Stack Developer',
    description: 'Full Stack Developer specializing in Laravel, React, Next.js, and Node.js',
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bright Yanchirah",
              url: SITE_URL,
              sameAs: [
                "https://github.com/NanaBright",
                "https://www.linkedin.com/in/bright-yanchirah-88a54b123/",
              ],
              jobTitle: "Full Stack Developer",
              image: OG_IMAGE,
            }),
          }}
        />
      </body>
    </html>
  )
}