export const profile = {
  name: 'Bright Yanchirah', title: 'Senior Full-Stack Software Engineer',
  email: 'nanabryte.nb@gmail.com', github: 'https://github.com/NanaBright',
  linkedin: 'https://www.linkedin.com/in/bright-yanchirah-88a54b123/',
  cv: '/Bright_Yanchirah_Senior_Full_Stack_Engineer_CV.pdf', site: 'https://nb-me.vercel.app',
}
export type Project = {
  slug: string; name: string; category: string; headline: string; description: string;
  role: string; status: string; stack: string[]; url: string; image?: string; imageAlt?: string;
  context: string; decisions: { title: string; text: string }[]; delivery: string;
}
export const projects: Project[] = [
  {
    slug: 'slatetrends', name: 'Slatetrends', category: 'Product engineering',
    headline: 'Making local businesses easier to find.',
    description: 'A discovery platform connecting people in Ghana with local businesses, with search, maps, direct contact, and tools for the people behind the listings.',
    role: 'Full-stack product development', status: 'Public platform · ongoing development',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    url: 'https://slatetrends.com', image: '/projects/slatetrends.jpg', imageAlt: 'Slatetrends public homepage with business discovery and search',
    context: 'A useful business directory needs more than a list of places. Visitors need relevant results and a clear next step. Business owners need control over their information, and administrators need a way to review changes and resolve reports.',
    decisions: [
      { title: 'Discovery with context', text: 'Built public search and map experiences, with category, location, distance, and opening-hours filters. Calls, directions, and ride-booking links connect discovery to a practical next step.' },
      { title: 'Ownership and trust', text: 'Implemented owner dashboards, business claims, administrative review, and listing reports. Authorization checks keep ownership, verification, and publication decisions with the appropriate roles.' },
      { title: 'Correctness beyond the interface', text: 'Developed regression coverage for API authorization and PostgreSQL search. Checks cover publication status, geographic filtering, opening hours, and pagination, alongside image-management permissions.' },
    ],
    delivery: 'The platform brings public discovery and business management together in one product. Development continues across listing quality, owner workflows, and the experience of finding a useful local service.',
  },
  {
    slug: 'flowstock', name: 'FlowStock', category: 'Business software',
    headline: 'Software that works as hard as the shop.',
    description: 'Inventory and point-of-sale software connecting stock, sales, payments, and reporting, with desktop and offline capabilities in FlowStock Pro.',
    role: 'Full-stack development', status: 'FlowStock deployed · Pro extension developed',
    stack: ['Laravel', 'PHP', 'MySQL', 'Electron', 'Docker'], url: 'https://flowstock.lippty.com',
    context: 'Retail operations bring inventory, sales, and payments together every day. FlowStock turns those connected workflows into a practical application for the people running the business.',
    decisions: [
      { title: 'A connected workflow', text: 'Built inventory tracking, point-of-sale operations, mobile money integration, and reporting, with multi-location support and audit trails.' },
      { title: 'Beyond a browser tab', text: 'Extended the product through FlowStock Pro with an offline-capable Electron desktop application, barcode scanning, thermal receipts, and JWT-secured REST APIs.' },
      { title: 'Repeatable delivery', text: 'Introduced GitHub Actions and Docker workflows for automated builds and deployment across the product’s web and desktop environments.' },
    ],
    delivery: 'FlowStock is deployed and serving active businesses. Its Pro extension expands the product into desktop and offline retail workflows.',
  },
  {
    slug: 'mhub', name: 'M-HUB Technology', category: 'Website development',
    headline: 'A clear front door for a technology company.',
    description: 'A company landing page introducing M-HUB’s technology services and education work, with clear routes to explore the business and get in touch.',
    role: 'Landing page development', status: 'Live website', stack: ['Web development', 'Responsive interfaces'],
    url: 'https://m-hubtechnology.com/', image: '/projects/mhub.jpg', imageAlt: 'M-HUB Technology public landing page introducing technology and education services',
    context: 'M-HUB brings together technology services and education. Its landing page gives visitors an introduction to that work and a starting point for exploring services, products, and the academy.',
    decisions: [
      { title: 'Make the offer understandable', text: 'Created the landing page website, bringing the company’s services and education offering into a cohesive public introduction.' },
      { title: 'Give visitors a next step', text: 'The landing page connects visitors to service information, the academy, and contact options. My contribution here is the company landing page.' },
    ],
    delivery: 'The landing page is live at m-hubtechnology.com and forms part of my ongoing work with M-HUB.',
  },
  {
    slug: 'ludwig', name: 'Ludwig', category: 'Open source',
    headline: 'Exploring the tools behind the tools.',
    description: 'A Python development framework exploring a shared toolkit for web, desktop, and IoT projects, with CLI tools, an ORM, and authentication.',
    role: 'Framework development', status: 'v0.1.0 released', stack: ['Python', 'CLI tooling', 'ORM', 'Authentication'], url: 'https://github.com/NanaBright/ludwig',
    context: 'Ludwig explores how a common development toolkit can support different kinds of applications, from web software to desktop and IoT projects.',
    decisions: [
      { title: 'Reusable foundations', text: 'Built a Python framework with command-line tooling, a built-in ORM, and authentication to support application development.' },
      { title: 'Across platforms', text: 'Included tooling for web and desktop applications alongside IoT firmware templates.' },
    ],
    delivery: 'Version 0.1.0 is released as open source. The repository documents the framework and provides a place to explore the implementation.',
  },
]
export const capabilities = [
  { title: 'Product & architecture', description: 'Translate business workflows into applications, APIs, and data models that fit the people using them.', tools: ['Requirements', 'Application architecture', 'REST APIs', 'GraphQL'] },
  { title: 'Web & mobile', description: 'Build responsive interfaces and connected mobile experiences, from discovery to daily operations.', tools: ['TypeScript', 'React', 'Next.js', 'Vue.js', 'React Native', 'Expo'] },
  { title: 'Backend & data', description: 'Connect business rules, permissions, and integrations to the data behind a product.', tools: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'MySQL', 'Prisma', 'JWT', 'OAuth'] },
  { title: 'Delivery & operations', description: 'Carry implementation through testing and deployment, with experience spanning software development and IT operations.', tools: ['Docker', 'GitHub Actions', 'CI/CD', 'Jest', 'React Testing Library', 'Vercel'] },
]
