import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

export function NowSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-0" id="now">
      <div className="relative z-10 max-w-[1800px] mx-auto px-2 md:px-8">
        <motion.div
          className="mt-0 p-6 md:p-16 lg:p-24 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
          }}
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            

            {/* Welshare Section */}
            <div className="mb-16">
              <h4
                className="text-3xl md:text-4xl mb-6 uppercase tracking-tight"
                style={{
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 20px var(--neon-cyan)',
                }}>
                TECH CO-FOUNDER WELSHARE.HEALTH
              </h4>
              <p
                className="text-lg md:text-xl mb-6 leading-relaxed max-w-5xl"
                style={{
                  fontFamily: 'var(--font-primary)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}>
                BUILDING THE HEALTH PROFILE MATCHING PROTOCOL (HPMP) -
                IT CONNECTS AGENTIC SCIENTISTS WITH PATIENTS FOR CLINICAL TRIALS WHILE RETAINING USER DATA AT A SAFE PLACE.
                PATIENT HEALTH DATA IS NEVER DISCLOSED TO CLIENTS; FILTERING, QUERYING, AND MATCHING HAPPENS INSIDE
                TRUSTED EXECUTION ENVIRONMENTS (TEEs) AND A PRIVATE COMPUTE TIER (POWERED BY <a href="https://nillion.com" target="_blank" rel="noopener noreferrer">NILLION</a>).
              </p>
              <div className="flex flex-wrap gap-3">
                {['TYPESCRIPT', 'REACT', 'FHIR', 'NILLION', 'TEE', 'MCP', 'CRYPTOGRAPHY', 'PRIVACY TECH'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 uppercase tracking-wider text-sm"
                    style={{
                      fontFamily: 'var(--font-accent)',
                      color: 'var(--neon-cyan)',
                      backgroundColor: 'rgba(0, 65, 255, 0.08)',
                      boxShadow: '0 0 15px rgba(0, 255, 65, 0.3), inset 0 0 15px rgba(0, 255, 65, 0.1)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://welshare.health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-cyan)',
                    textShadow: '0 0 10px var(--neon-cyan)',
                  }}
                >
                  → WELSHARE.HEALTH
                </a>
              </div>
            </div>

            {/* Infrastructure Section */}
            <div>
              <h4
                className="text-3xl md:text-4xl mb-6 uppercase tracking-tight"
                style={{
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-magenta)',
                  textShadow: '0 0 20px var(--neon-magenta)',
                }}>
                BEACH.SCIENCE: AI SCIENTIST ZOOKEEPER
              </h4>
              <p
                className="text-lg md:text-xl mb-6 leading-relaxed max-w-5xl"
                style={{
                  fontFamily: 'var(--font-primary)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}>
                I PROVISION, SHAPE AND OPERATE CLOUD INFRASTRUCTURE AND BARE METAL TO RUN OPENCLAW / HERMES AGENTS AT SCALE ON AFFORDABLE VPS HOSTS.
                LEVERAGING AWS, TERRAFORM, AND OPENCLAW BEST PRACTICES TO BUILD RESILIENT, COST-EFFECTIVE AGENT
                DEPLOYMENT PIPELINES.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'TERRAFORM', 'OPENCLAW', 'DOCKER', 'VPS', 'DEVOPS', 'AGENT ORCHESTRATION', 'CI/CD'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 uppercase tracking-wider text-sm"
                    style={{
                      fontFamily: 'var(--font-accent)',
                      color: 'var(--neon-magenta)',
                      backgroundColor: 'rgba(255, 0, 255, 0.08)',
                      boxShadow: '0 0 15px rgba(255, 0, 255, 0.3), inset 0 0 15px rgba(255, 0, 255, 0.1)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 gap-12 flex flex-row">
                <a
                  href="https://beach.science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-magenta)',
                    textShadow: '0 0 10px var(--neon-magenta)',
                  }}
                >
                  → BEACH.SCIENCE
                </a>
                <a
                  href="https://molecule.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-magenta)',
                    textShadow: '0 0 10px var(--neon-magenta)',
                  }}
                >
                  → MOLECULE.TO
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
