export interface SkillItem {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yrs: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface HistoryEntry {
  from: string;
  to: string;
  dur: string;
  logo: string;
  logoImage?: string;
  company: string;
  role: string;
  desc: string;
  tech: string[];
  label: string;
  image?: string;
  imagePosition?: string;
}

export interface QualEntry {
  yr: string;
  ttl: string;
  where: string;
  href?: string;
}

export interface ContactEntry {
  k: string;
  v: string;
  href: string;
}

export interface NowEntry {
  name: string;
  role: string;
  href: string;
}

export const CV = {
  name: 'Stefan Adolf',
  handle: 'elmariachi',
  blurb:
    'Principal engineer with two decades of building production systems across web, backends, distributed protocols and on-chain infrastructure. Currently focused on privacy-preserving compute, agentic systems, and biomedical data.',
  roles: ['developer', 'agent charmer', 'environmentalist', 'cyclepunk'],

  now: [
    { name: 'PeptAI', role: 'Agent Ops', href: 'https://peptai.xyz/' },
    { name: 'welshare.health', role: 'Tech Co-founder', href: 'https://welshare.health' },
    { name: 'molecule.xyz', role: 'Contributor', href: 'https://molecule.xyz' },
  ] as NowEntry[],

  skills: [
    {
      id: '01',
      title: 'languages',
      items: [
        { name: 'TypeScript / JavaScript', level: 5, yrs: '15+' },
        { name: 'Solidity', level: 4, yrs: '5+' },
        { name: 'Java', level: 4, yrs: '12+' },
        { name: 'PHP', level: 3, yrs: '10+' },
        { name: 'Python', level: 2, yrs: '3+' },
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
  ] as SkillCategory[],

  history: [
    {
      from: '2026', to: 'now', dur: '~ present',
      logo: 'π', logoImage: '/assets/logos/company/peptai_icon.png', company: 'PeptAI',
      role: 'DevOps · Agent Infrastructure',
      desc: 'Agent Fleet Setup - PeptAI runs biomedical research using fleets of computational enabled AI agents that collaborate and evaluate biomedical science hypotheses. Self-service provisioning tier that spins up agent harnesses (openclaw, hermes) on demand on owned VPS hosts, virtual macOS devices and cloud resources.',
      tech: ['AWS', 'Terraform', 'Docker', 'OpenClaw', 'tart'],
      label: 'peptai.xyz · agent harness rollout',
      image: '/assets/optimized/cambridge.jpg',
      imagePosition: 'center 90%',
    },
    {
      from: '2025', to: 'now', dur: 'present',
      logo: 'W', logoImage: '/assets/logos/company/welshare_logo.jpeg', company: 'welshare.health',
      role: 'Tech Co-founder',
      desc: 'Co-founded welshare.health. Designed and built the Health Profile Matching Protocol (HPMP) that connects agentic researchers and patients to assemble cohorts for clinical trials on wearable and real-world health data. Matching runs inside trusted execution environments via [Nillion](https://nillion.com); patient data is never disclosed to agents.',
      tech: ['TypeScript', 'React', 'FHIR HL7', 'Nillion', 'TEE', 'MCP', 'Cryptography'],
      label: 'welshare.health · HPMP dashboard',
      image: '/assets/optimized/welshare_gang.jpg',
    },
    {
      from: '2022', to: '2024', dur: '2 yrs',
      logo: 'M', logoImage: '/assets/logos/company/molecule_protocol_logo.jpeg', company: 'Molecule',
      role: 'Principal Engineer · On-chain Systems',
      desc: 'Pioneered IP tokenization infrastructure (IPNFTs). Built smart contracts for crowdfunding protocols (bio.xyz, IPT crowdsales) and bonding-curve markets (Catalyst). Production grade Solidity, audited, deployed on mainnet and Base.',
      tech: ['Solidity', 'Foundry', 'Subgraphs', 'ERC-20/721/1155', 'DeFi', 'Tokenization'],
      label: 'molecule.xyz · IPNFT minter',
      imagePosition: 'center 30%',
      image: '/assets/optimized/desci_berlin_23.jpg',
    },
    {
      from: '2020', to: '2022', dur: '~ side',
      logo: 'S', logoImage: '/assets/logos/company/splice_logo.png', company: 'Splice / ETHGlobal',
      role: 'Hackathon Builder',
      desc: 'ETHOnline 2021 finalist ([SPLICE](https://ethglobal.com/showcase/splice-dzc68) - generative on-chain art splitting royalties to NFT communities). Earlier: decentralized EHRs, DID/VC/VP-based certificate validators.',
      tech: ['Solidity', 'DID/VC', 'IPFS', 'React'],
      label: 'splice · finalist demo',
      imagePosition: 'center 60%',
      image: '/assets/optimized/hack_eb2.jpg',
    },
    {
      from: '2018', to: '2022', dur: '4 yrs',
      logo: 'TK', logoImage: '/assets/logos/company/turbinekreuzberg_logo.jpeg', company: 'Turbine Kreuzberg',
      role: 'Developer Ambassador',
      desc: "Developer Ambassador at one of Berlin's most respected dev shops. Organized meetups for coding.earth across Germany and Portugal. Head curator of [code.talks](https://codetalks.com/) 2022. Pre-sales, internal education, technical writing, conference keynotes.",
      tech: ['Node.js', 'Vue', 'React', 'GraphQL', 'AWS'],
      label: 'code.talks 2022 · curator track',
      imagePosition: 'center 60%',
      image: '/assets/optimized/meetup.jpg',
    },
    {
      from: '2015', to: '2018', dur: '3 yrs',
      logo: 'C', logoImage: '/assets/logos/company/mcube_logo.jpg', company: 'M-Cube (Check24 Incubator)',
      role: 'Senior Engineer · Comparison Portals',
      desc: 'Built comparison portals across several Check24 incubator startups. Engines, backends, internal tools, CI/CD, testing infrastructure, growth-hacking & SEO at scale.',
      tech: ['Symfony', 'PHP', 'MongoDB', 'Node.js', 'CI/CD'],
      label: 'augen-lasern-vergleich.de · comparison portal',
      image: '/assets/optimized/alv.jpg',
    },
    {
      from: '2012', to: '2015', dur: '3 yrs',
      logo: 'D', logoImage: '/assets/logos/company/discounto.jpeg', company: 'Discounto',
      role: 'Señor Engineer',
      desc: 'Full-stack work on a product offer search engine - PHP/[Symfony2](https://symfony.com/), performance tuning, build pipelines (Phing), CI setup, backend migration, and frontend templating. End-to-end ownership of a platform with real scaling ambitions.',
      tech: ['PHP', 'Symfony2', 'JavaScript', 'Phing', 'CI/CD', 'FreeBSD'],
      label: 'discounto · search engine',
      image: '/assets/optimized/discounto.jpg',
    },
    {
      from: '2010', to: '2012', dur: '2 yrs',
      logo: 'SDS', logoImage: '/assets/logos/company/samsung_sds_logo.jpeg', company: 'Samsung SDS',
      role: 'Team Lead · Java Enterprise Engineering',
      desc: 'Led a team of 8 engineers building Java EE eCommerce applications. Backend work on Oracle SQL, Spring, and iBATIS. Bonus: built a bada restarurant finder app in C++ (Samsung mobile OS)',
      tech: ['Java EE', 'Spring', 'Oracle SQL', 'iBATIS', 'Weblogic'],
      label: 'samsung sds · ecommerce platform',
      imagePosition: 'center 60%',
      image: '/assets/optimized/sds.png',
    },
    {
      from: '2002', to: '2008', dur: '6 yrs',
      logo: 'AD', logoImage: '/assets/logos/company/areamobile_sq.webp', company: 'AreaDigital AG',
      role: 'Founder · CTO · Editor in Chief',
      desc: 'Founded, grew and exited AreaDigital AG - a digital media house with >30 employees, 4 publications, homegrown digital service business and data APIs. Publishing partners included IDG.',
      tech: ['PHP', 'MySQL', '.NET', 'JavaScript'],
      label: 'areamobile.de · 2007 archive',
      image: '/assets/areamobile_founding_furniture.jpg',
      imagePosition: 'center 60%',
    },
    {
      from: '1999', to: '2002', dur: '3 yrs',
      logo: '?', company: 'Y2K Startups',
      role: 'Student Engineer',
      desc: 'Several engagements at software companies: [Canto](https://www.canto.com/), astromo (Liberal Energy Markets), [ecrypt](https://www.secrypt.de/en/homepage/), [microtool](https://www.microtool.de/). ',
      tech: ['Java', 'C++', 'JavaScript', 'Visual Basic', 'Fractal Compression', 'Cryptography'],
      label: '1999 · build pipeline',
    },
  ] as HistoryEntry[],

  education: [
    { yr: '1998–2002', ttl: 'Diploma in Mathematics (~ M.Sc.)', where: 'TFH Berlin' },
    { yr: '2021', ttl: 'ETHOnline Finalist - SPLICE', where: 'ETHGlobal' },
    { yr: '2022', ttl: 'Head Curator · code.talks', where: 'Hamburg, DE' },
  ] as QualEntry[],

  publications: [
    { yr: '2019', ttl: 'Pump up the JAM with Gatsby', where: 'YouTube', href: 'https://www.youtube.com/watch?v=fwTxNylQhn8' },
    { yr: '2020', ttl: 'After the Meltdown: rethinking event management platforms', where: 'Medium', href: 'https://medium.com/t14g/decentralized-event-management-platforms-d1fce0748a26' },
    { yr: '2021', ttl: 'The Last Introduction to Web3 / Ethereum For Developers', where: 'Medium', href: 'https://medium.com/t14g/the-last-introduction-to-web3-ethereum-for-developers-47cc6578a9b8' },
    { yr: '2021', ttl: 'Enabling NFT Royalties With EIP-2981', where: 'HackerNoon', href: 'https://hackernoon.com/enabling-nft-royalties-with-eip-2981' },
    { yr: '2024', ttl: 'What Is a Proof and Why Do You Need One?', where: 'laconic.com', href: 'https://laconic.com/blog/what-is-a-proof' },
  ] as QualEntry[],

  speaking: [
    { yr: '2017-2022', ttl: 'Conference speaker on web3, decentralization, privacy', where: 'EU / DE' },
    { yr: '2017-2020', ttl: 'Meetup Group President · coding.earth', where: 'Germany / Portugal' },
    { yr: '2018-2022', ttl: 'Press relations, panels & presale support', where: 'Turbine Kreuzberg' },
    { yr: '2017', ttl: 'Best Speaker Award Dev Day 17', where: 'Turbine Kreuzberg'}
  ] as QualEntry[],

  contacts: [
    { k: 'email',     v: 'elmariachi111+cv@proton.me',  href: 'mailto:elmariachi111+cv@proton.me' },
    { k: 'github',    v: '@elmariachi111',               href: 'https://github.com/elmariachi111' },
    { k: 'linkedin',  v: '@stadolf',                    href: 'https://www.linkedin.com/in/stadolf/' },
    { k: 'bluesky',   v: '@stadolf.bsky.social',        href: 'https://bsky.app/profile/stadolf.bsky.social' },
    { k: 'ens',       v: 'stadolf.eth',                 href: 'https://etherscan.io/address/stadolf.eth' },
    { k: 'signal',  v: '@stadolf.11',                 href: 'https://signal.me/#eu/GcSDEor3MIBOMX16K4F0vVTE8ciOsXldtd4Mcm8zGasVqaSz3xtMvK873CqgNAwe' },
    { k: 'telegram',  v: '@stadolf',                    href: 'https://t.me/stadolf' },
    { k: 'discord',   v: 'elmariachi#8789',             href: 'https://discord.com/users/elmariachi' },
    { k: 'twitter',  v: '@stadolf',                 href: 'https://twitter.com/stadolf' },
  
  ] as ContactEntry[],
};

export const BIRTH_YEAR = 1978;
export const CODING_SINCE = 1998;
