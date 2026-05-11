import { motion } from 'motion/react';

/**
 * Social Media Preview Card Component
 * 
 * This component creates shareable social media cards.
 * To use: Take a screenshot at specific viewport sizes
 * 
 * Recommended sizes:
 * - Instagram Square: 1080x1080px
 * - Instagram Story: 1080x1920px
 * - LinkedIn: 1200x627px
 * - Twitter/X: 1200x675px
 */

interface SocialPreviewCardProps {
  title: string;
  subtitle: string;
  tags?: string[];
  variant?: 'square' | 'story' | 'landscape';
}

export function SocialPreviewCard({ 
  title, 
  subtitle, 
  tags = [],
  variant = 'square'
}: SocialPreviewCardProps) {
  const isSquare = variant === 'square';
  const isStory = variant === 'story';
  const isLandscape = variant === 'landscape';

  return (
    <div 
      className="relative flex items-center justify-center p-12 overflow-hidden"
      style={{
        backgroundColor: '#0a0a0f',
        aspectRatio: isSquare ? '1/1' : isStory ? '9/16' : '1.91/1',
        minHeight: isSquare ? '1080px' : isStory ? '1920px' : '627px',
        width: isSquare ? '1080px' : isStory ? '1080px' : '1200px',
      }}
    >
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: isStory ? '96px' : isSquare ? '80px' : '72px',
              lineHeight: '1.2',
              color: 'var(--neon-cyan)',
              textShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
            }}
          >
            {title}
          </h1>

          <p 
            className="mb-12"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: isStory ? '42px' : isSquare ? '36px' : '32px',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {subtitle}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 rounded-full border-2"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: isStory ? '28px' : '24px',
                    borderColor: 'var(--neon-magenta)',
                    color: 'var(--neon-magenta)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Geometric accent */}
        <div 
          className="absolute bottom-12 right-12 w-32 h-32 border-4 rotate-45 opacity-30"
          style={{ borderColor: 'var(--neon-yellow)' }}
        />
        <div 
          className="absolute top-12 left-12 w-24 h-24 border-4 opacity-30"
          style={{ borderColor: 'var(--neon-green)' }}
        />
      </div>
    </div>
  );
}

// Example usage for different platforms
export function InstagramSquareCard() {
  return (
    <SocialPreviewCard
      variant="square"
      title="BUILDING THE FUTURE"
      subtitle="20 years in Software, Startups & Technical Environments"
      tags={['AI', 'Decentralization', 'Cloud']}
    />
  );
}

export function InstagramStoryCard() {
  return (
    <SocialPreviewCard
      variant="story"
      title="CYPHERPUNK VALUES"
      subtitle="Decentralized • Permissionless • Built to Last"
      tags={['Activist', 'Builder']}
    />
  );
}

export function LinkedInCard() {
  return (
    <SocialPreviewCard
      variant="landscape"
      title="TECH FOR CHANGE"
      subtitle="Senior Engineer • Startup Advisor • Environmentalist"
      tags={['Hiring', 'Open to Collaborate']}
    />
  );
}
