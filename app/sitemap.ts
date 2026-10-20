import type { MetadataRoute } from 'next'
import { profile, projects } from '@/lib/portfolio'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/projects', '/skills', '/contact', ...projects.map(p => '/projects/' + p.slug)].map(path => ({ url: profile.site + path, changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }))
}
