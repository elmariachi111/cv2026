// Stefan Adolf — content
const CV = {
  name: 'Stefan Adolf',
  handle: 'elmariachi',
  tagline: 'Software Builder & Architect. Berlin. Building since Y2K.',
  blurb: 'Principal engineer with two decades of building production systems across web, backends, distributed protocols and on-chain infrastructure. Currently focused on privacy-preserving compute, agentic systems, and biomedical data.',
  location: 'Berlin, DE',
  email: 'elmariachi111+cv@proton.me',
  site: 'stadolf.de',
  roles: ['developer', 'agent charmer', 'environmentalist', 'cyclepunk'],

  now: [
    { name: 'welshare.health', role: 'Tech Co-founder', href: 'https://welshare.health' },
    { name: 'beach.science', role: 'Builder', href: 'https://beach.science' },
    { name: 'molecule.to', role: 'Contributor', href: 'https://molecule.to' },
  ],

  skills: [
    {
      id: '01',
      title: 'languages',
      items: [
        { name: 'TypeScript / JavaScript', level: 5, yrs: '15+' },
        { name: 'Solidity', level: 4, yrs: '5+' },
        { name: 'Java', level: 4, yrs: '12+' },
        { name: 'PHP', level: 3, yrs: '10+' },
        { name: 'Python', level: 3, yrs: '8+' },
        { name: 'Bash / Shell', level: 4, yrs: '20+' },
      ],
    },
    {
      id: '02',
      title: 'web & frameworks',
      items: [
        { name: 'React / Next.js', level: 5, yrs: '10+' },
        { name: 'Node.js', level: 5, yrs: '12+' },
        { name: 'Vue', level: 4, yrs: '6+' },
        { name: 'Symfony', level: 4, yrs: '8+' },
        { name: 'Spring', level: 3, yrs: '6+' },
        { name: 'GraphQL', level: 4, yrs: '7+' },
      ],
    },
    {
      id: '03',
      title: 'on-chain & crypto',
      items: [
        { name: 'Foundry / Hardhat', level: 5, yrs: '5+' },
        { name: 'ERC-20 / 721 / 1155', level: 5, yrs: '5+' },
        { name: 'Subgraphs (The Graph)', level: 4, yrs: '4+' },
        { name: 'DID / VC / VP', level: 4, yrs: '5+' },
        { name: 'Bonding curves / DeFi', level: 4, yrs: '4+' },
        { name: 'Smart contract security', level: 4, yrs: '5+' },
      ],
    },
    {
      id: '04',
      title: 'infra & devops',
      items: [
        { name: 'AWS / EC2 / VPS', level: 4, yrs: '12+' },
        { name: 'Terraform', level: 4, yrs: '6+' },
        { name: 'Docker', level: 5, yrs: '10+' },
        { name: 'CI/CD (GH Actions)', level: 5, yrs: '8+' },
        { name: 'FreeBSD / Linux', level: 4, yrs: '20+' },
        { name: 'Observability', level: 4, yrs: '8+' },
      ],
    },
    {
      id: '05',
      title: 'data & privacy',
      items: [
        { name: 'Nillion / TEE', level: 4, yrs: '2+' },
        { name: 'FHIR HL7', level: 3, yrs: '2+' },
        { name: 'Cryptography', level: 4, yrs: '10+' },
        { name: 'MongoDB / Postgres', level: 5, yrs: '15+' },
        { name: 'Oracle', level: 3, yrs: '8+' },
        { name: 'MCP / Agent harnesses', level: 4, yrs: '2+' },
      ],
    },
    {
      id: '06',
      title: 'practice',
      items: [
        { name: 'System architecture', level: 5, yrs: '20+' },
        { name: 'Technical leadership', level: 5, yrs: '15+' },
        { name: 'Public speaking & writing', level: 5, yrs: '12+' },
        { name: 'Pre-sales & business dev', level: 4, yrs: '10+' },
        { name: 'Curation / event programming', level: 4, yrs: '8+' },
        { name: 'Mentoring', level: 5, yrs: '15+' },
      ],
    },
  ],

  history: [
    {
      from: '2024', to: 'now', dur: 'present',
      logo: 'W', company: 'welshare.health',
      role: 'Tech Co-founder',
      desc: 'Co-founded welshare.health. Designed and built the Health Profile Matching Protocol (HPMP) — connects agentic researchers and patients to assemble cohorts for clinical trials on wearable and real-world health data. Matching runs inside trusted execution environments via Nillion; patient data is never disclosed to agents.',
      tech: ['TypeScript', 'React', 'FHIR HL7', 'Nillion', 'TEE', 'MCP', 'Cryptography'],
      label: 'welshare.health · HPMP dashboard',
    },
    {
      from: '2024', to: 'now', dur: '~ present',
      logo: 'β', company: 'beach.science',
      role: 'Builder · Agent Infrastructure',
      desc: 'Building beach.science — a platform for agentic researchers to share, collaborate and evaluate biomedical science hypotheses. Self-service tier to run agent harnesses (openclaw, hermes) at scale on affordable VPS hosts and EC2.',
      tech: ['AWS', 'Terraform', 'Docker', 'OpenClaw', 'CI/CD'],
      label: 'beach.science · agent harness console',
    },
    {
      from: '2022', to: '2024', dur: '2 yrs',
      logo: 'M', company: 'Molecule',
      role: 'Principal Engineer · On-chain Systems',
      desc: 'Pioneered IP tokenization infrastructure (IPNFTs). Built smart contracts for crowdfunding protocols (bio.xyz, IPT crowdsales) and bonding-curve markets (Catalyst). Production Solidity, audited, deployed on mainnet and Base.',
      tech: ['Solidity', 'Foundry', 'Subgraphs', 'ERC-20/721/1155', 'DeFi', 'Tokenization'],
      label: 'molecule.to · IPNFT minter',
    },
    {
      from: '2018', to: '2022', dur: '4 yrs',
      logo: 'TK', company: 'Turbine Kreuzberg',
      role: 'Developer Ambassador',
      desc: 'Developer ambassador at one of Berlin\'s most respected dev shops. Organized meetups for coding.earth across Germany and Portugal. Head curator of code.talks 2022. Pre-sales, internal education, technical writing, conference keynotes.',
      tech: ['Node.js', 'Vue', 'React', 'GraphQL', 'AWS'],
      label: 'code.talks 2022 · curator track',
    },
    {
      from: '2020', to: '2022', dur: '~ side',
      logo: 'S', company: 'Splice / ETHGlobal',
      role: 'Hackathon Builder',
      desc: 'ETHOnline 2021 finalist (SPLICE — generative on-chain art splitting royalties to NFT communities). Earlier: decentralized EHRs, DID/VC/VP-based certificate validators.',
      tech: ['Solidity', 'DID/VC', 'IPFS', 'React'],
      label: 'splice · finalist demo',
    },
    {
      from: '2015', to: '2018', dur: '3 yrs',
      logo: 'C', company: 'Check24 (Incubator)',
      role: 'Senior Engineer · Comparison Portals',
      desc: 'Built comparison portals across multiple Check24 incubator startups. Engines, backends, internal tools, CI/CD, testing infrastructure, growth-hacking & SEO at scale.',
      tech: ['Symfony', 'PHP', 'MongoDB', 'Node.js', 'CI/CD'],
      label: 'check24 incubator · portal',
    },
    {
      from: '2010', to: '2015', dur: '5 yrs',
      logo: 'SDS', company: 'Samsung SDS / Discounto',
      role: 'Senior Engineer',
      desc: 'Product development and re-platforming legacy code across enterprise and consumer products at Samsung SDS and Discounto.',
      tech: ['Java EE', 'Spring', 'Oracle', 'FreeBSD'],
      label: 'enterprise replatform',
    },
    {
      from: '2002', to: '2008', dur: '6 yrs',
      logo: 'AD', company: 'AreaDigital AG',
      role: 'Founder · CTO · Editor in Chief',
      desc: 'Founded, grew and exited AreaDigital AG — a digital media house up to 30 employees, 4 publications, homegrown digital service business and data APIs. Publishing partners including IDG.',
      tech: ['PHP', 'Java', 'MySQL', '.NET', 'JavaScript'],
      label: 'areamobile.de · 2007 archive',
    },
    {
      from: '1999', to: '2002', dur: '3 yrs',
      logo: 'Y2K', company: 'Y2K Startups',
      role: 'Engineer',
      desc: 'Built early-web products at canto, astromo, ecrypt, microtool. Y2K-era startup engineering — when the web was wild.',
      tech: ['Java', 'C++', 'JavaScript', 'PHP'],
      label: '1999 · build pipeline',
    },
  ],

  education: [
    { yr: '1998–2002', ttl: 'Diploma in Mathematics (~ M.Sc.)', where: 'TFH Berlin' },
    { yr: '2021', ttl: 'ETHOnline Finalist — SPLICE', where: 'ETHGlobal' },
    { yr: '2022', ttl: 'Head Curator · code.talks', where: 'Hamburg, DE' },
  ],

  speaking: [
    { yr: 'ongoing', ttl: 'Conference speaker on web3, privacy, agents', where: 'EU / DE circuit' },
    { yr: 'ongoing', ttl: 'Meetup organizer · coding.earth', where: 'Berlin / Porto' },
    { yr: '2022', ttl: 'Press, panels & technical pre-sales', where: 'Turbine Kreuzberg' },
  ],

  contacts: [
    { k: 'email',     v: 'elmariachi111+cv@proton.me', href: 'mailto:elmariachi111+cv@proton.me' },
    { k: 'github',    v: '@elmariachi111', href: 'https://github.com/elmariachi111' },
    { k: 'linkedin',  v: '@stadolf',       href: 'https://www.linkedin.com/in/stadolf/' },
    { k: 'bluesky',   v: '@stadolf.bsky.social', href: 'https://bsky.app/profile/stadolf.bsky.social' },
    { k: 'farcaster', v: 'elmariachi.eth', href: 'https://warpcast.com/elmariachi.eth' },
    { k: 'ens',       v: 'stadolf.eth',    href: 'https://etherscan.io/address/stadolf.eth' },
    { k: 'telegram',  v: '@stadolf',       href: 'https://t.me/stadolf' },
    { k: 'discord',   v: 'elmariachi#8789', href: 'https://discord.com/users/elmariachi' },
    { k: 'calendar',  v: 'book a chat',    href: 'https://calendly.com/stadolf/chatwithstefan' },
  ],
};

window.CV = CV;
