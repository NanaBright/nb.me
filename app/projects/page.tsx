import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { ContactBand, ProjectRow } from '@/components/portfolio'
import { projects as featuredProjects } from '@/lib/portfolio'
import rawCatalogue from '@/lib/project-catalogue.json'

export const metadata = {
  title: 'Complete Project Portfolio | Bright Yanchirah',
  description: '29 production applications, enterprise systems, and developer tools built over 7+ years of software engineering by Bright Yanchirah.',
  alternates: { canonical: '/projects' },
}

interface CatalogueProject {
  slug: string
  name: string
  category: string
  descriptor?: string
  stack: string
  status: string
  bullets: string[]
  url: string | null
  featured?: boolean
}

const catalogue = rawCatalogue as CatalogueProject[]

const groupedCatalogue = [
  {
    group: 'Flagship Platforms & Products',
    slugs: ['slatetrends', 'mhub', 'flowstock-pro', 'flowstock-v2', 'flowstock', 'taxflow', 'chekbuk', 'privyvpn'],
  },
  {
    group: 'Enterprise, FinTech & E-Commerce Systems',
    slugs: ['ghana-api-hub', 'microservices', 'sankofa', 'lippty', '1957autozone', 'graceland'],
  },
  {
    group: 'Mobile, GIS & Distributed Applications',
    slugs: ['driveprofit', 'revu', 'fare-estimator', 'tryst', 'eldo'],
  },
  {
    group: 'Developer Tools, Frameworks & Desktop Systems',
    slugs: [
      'ludwig',
      'ludwig-dashboard',
      'laravel-auth',
      'weatherwave',
      'pymap',
      'games',
      'linkshort',
      'contact-crud',
      'contact-service',
    ],
  },
]

export default function Projects() {
  return (
    <main id="main-content">
      {/* Intro */}
      <section className="page-intro wrap">
        <p className="eyebrow">THE COMPLETE PORTFOLIO</p>
        <h1>
          Engineering with<br />
          <span className="serif accent">proven impact.</span>
        </h1>
        <p className="intro-copy">
          29 production applications, business platforms, and developer frameworks engineered over 7+ years.
          Spanning enterprise SaaS, national business discovery, offline-first desktop systems, fintech, mobile apps, and distributed systems.
        </p>
      </section>

      {/* Flagship Deep Dives */}
      <section className="wrap" aria-label="Featured case studies">
        <div className="section-heading">
          <p className="eyebrow">01 / FEATURED CASE STUDIES</p>
          <p>
            Architectural Deep Dives<br />
            <span className="muted">Detailed breakdowns of technical decisions, trade-offs, and delivery.</span>
          </p>
        </div>
        {featuredProjects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </section>

      {/* Complete Catalogue */}
      <section className="wrap catalogue-container" id="all-projects" aria-label="Complete Project Catalogue">
        <div className="section-heading">
          <p className="eyebrow">02 / COMPLETE CATALOGUE</p>
          <p>
            All 29 Production Systems & Tools<br />
            <span className="muted">A comprehensive inventory of platforms built, deployed, and maintained.</span>
          </p>
        </div>

        {groupedCatalogue.map((group) => {
          const items = catalogue.filter((item) => group.slugs.includes(item.slug))
          return (
            <div key={group.group}>
              <h2 className="catalogue-group-title">{group.group}</h2>
              <div className="catalogue-grid">
                {items.map((item) => (
                  <article key={item.slug} className="catalogue-card">
                    <div>
                      <div className="catalogue-card-header">
                        <h3 className="catalogue-card-title">{item.name}</h3>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                            aria-label={`Visit ${item.name}`}
                            style={{ flexShrink: 0 }}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      {item.descriptor && <p className="catalogue-card-desc">{item.descriptor}</p>}
                      <div className="catalogue-card-status">Status: {item.status}</div>
                      <ul className="catalogue-card-bullets">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="catalogue-card-footer">
                      <ul className="tags" aria-label="Tech stack" style={{ margin: '0 0 12px' }}>
                        {item.stack.split(',').map((t) => (
                          <li key={t.trim()}>{t.trim()}</li>
                        ))}
                      </ul>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          style={{ fontSize: '13px' }}
                        >
                          Visit Live Project <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="muted" style={{ fontSize: '12px' }}>
                          Production Ready / Internal Enterprise
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <ContactBand />
    </main>
  )
}
