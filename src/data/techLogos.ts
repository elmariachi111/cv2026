export interface TechLogo {
  id: string;
  name: string;
  logo?: string;
  colored?: boolean;
  /** text badge when no logo file is available */
  abbr?: string;
}

export const TECH_LOGOS: TechLogo[] = [
  // Languages
  { id: 'python',       name: 'Python',       logo: '/assets/logos/python.svg',       colored: true  },
  { id: 'java',         name: 'Java',         logo: '/assets/logos/java.svg',         colored: true  },
  { id: 'rust',         name: 'Rust',         logo: '/assets/logos/rust.svg'                         },
  { id: 'php',          name: 'PHP',          logo: '/assets/logos/php.svg',          colored: true  },
  { id: 'solidity',     name: 'Solidity',     logo: '/assets/logos/solidity.svg'                     },

  // Databases
  { id: 'postgresql',   name: 'Postgres',     logo: '/assets/logos/postgresql.svg',   colored: true  },
  { id: 'mongodb',      name: 'MongoDB',      logo: '/assets/logos/mongodb.svg',      colored: true  },

  // Distributed / Storage
  { id: 'ipfs',         name: 'IPFS',         logo: '/assets/logos/ipfs.svg',         colored: true  },

  // Blockchain
  { id: 'ethereum',     name: 'Ethereum',     logo: '/assets/logos/ethereum.svg'                     },
  { id: 'base',         name: 'Base',         logo: '/assets/logos/base.svg',         colored: true  },
  { id: 'openzeppelin', name: 'OpenZeppelin', logo: '/assets/logos/openzeppelin.svg', colored: true  },
  { id: 'foundry',      name: 'Foundry',      logo: '/assets/logos/foundry.png',      colored: true  },
  { id: 'thegraph',     name: 'The Graph',    logo: '/assets/logos/thegraph.svg',     colored: true  },
  { id: 'uma',          name: 'UMA',          logo: '/assets/logos/uma.svg',          colored: true  },
  { id: 'safe',         name: 'Safe',         logo: '/assets/logos/safe.svg',         colored: true  },
  { id: 'alchemy',      name: 'Alchemy',      logo: '/assets/logos/alchemy.svg'                      },
  { id: 'tenderly',     name: 'Tenderly',     logo: '/assets/logos/tenderly.svg',     colored: true  },
  { id: 'privy',        name: 'Privy',        logo: '/assets/logos/privy.webp'                       },

  // AI / Agents
  { id: 'claude',       name: 'Claude',       logo: '/assets/logos/claude.svg',       colored: true  },
  { id: 'hermes',       name: 'Hermes Agent', logo: '/assets/logos/hermes-agent.svg'                 },
  { id: 'omp',          name: 'OMP',          logo: '/assets/logos/omp.svg',          colored: true  },
  { id: 'glm',          name: 'GLM',          logo: '/assets/logos/glm.svg'                          },
  { id: 'primeintellect', name: 'Prime Intellect', logo: '/assets/logos/primeintellect.svg'          },
  { id: 'openrouter',   name: 'OpenRouter',   logo: '/assets/logos/openrouter.svg'                   },
  { id: 'langfuse',     name: 'Langfuse',     logo: '/assets/logos/langfuse.svg',     colored: true  },
  { id: 'openclaw',     name: 'OpenClaw'                                                              },

  // Cloud & Infra
  { id: 'aws',          name: 'AWS',          logo: '/assets/logos/aws.svg',          colored: true  },
  { id: 'gcp',          name: 'GCP',          logo: '/assets/logos/gcp.svg',          colored: true  },
  { id: 'digitalocean', name: 'DigitalOcean', logo: '/assets/logos/digitalocean.svg', colored: true  },
  { id: 'vercel',       name: 'Vercel',       logo: '/assets/logos/vercel.svg'                       },
  { id: 'terraform',    name: 'Terraform',    logo: '/assets/logos/terraform.svg',    colored: true  },
  { id: 'ansible',      name: 'Ansible',      logo: '/assets/logos/ansible.svg',      colored: true  },
  { id: 'docker',       name: 'Docker',       logo: '/assets/logos/docker.svg',       colored: true  },
  { id: 'qemu',         name: 'QEMU',         logo: '/assets/logos/qemu.svg',         colored: true  },
  { id: 'grafana',      name: 'Grafana',      logo: '/assets/logos/grafana.svg',      colored: true  },

  // Frameworks
  { id: 'react',        name: 'React',        logo: '/assets/logos/react.svg',        colored: true  },
  { id: 'nextjs',       name: 'Next.js',      logo: '/assets/logos/nextjs.svg'                       },
  { id: 'spring',       name: 'Spring',       logo: '/assets/logos/spring.svg',       colored: true  },
  { id: 'symfony',      name: 'Symfony',      logo: '/assets/logos/symfony.svg'                      },

  // Tools
  { id: 'vscode',       name: 'VS Code',      logo: '/assets/logos/vscode.svg',       colored: true  },
];
