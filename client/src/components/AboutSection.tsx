import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code2, Palette, Zap, Users } from 'lucide-react';

interface Skill {
  name: string;
  category?: string;
}

interface AboutSectionProps {
  bio?: string;
  skills?: Skill[];
  highlights?: Array<{ icon: typeof Code2; title: string; description: string }>;
}

const defaultHighlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating beautiful interfaces with attention to detail',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams and communicating clearly',
  },
];

const defaultSkills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'REST APIs', category: 'Backend' },
];

export default function AboutSection({
  bio = 'I\'m a passionate full-stack developer with over 5 years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I\'m not coding, you\'ll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.',
  skills = defaultSkills,
  highlights = defaultHighlights,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">{bio}</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1 hover-elevate cursor-default"
                  data-testid={`badge-skill-${index}`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-highlight-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
