import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  profileImage?: string;
  onContactClick?: () => void;
  onProjectsClick?: () => void;
}

export default function HeroSection({
  name = 'Your Name',
  title = 'Full Stack Developer',
  description = 'Passionate about creating beautiful, functional web applications that solve real-world problems.',
  profileImage,
  onContactClick,
  onProjectsClick,
}: HeroSectionProps) {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectsClick = () => {
    if (onProjectsClick) {
      onProjectsClick();
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-purple-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {profileImage && (
            <div className="relative group" data-testid="img-profile">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <img
                src={profileImage}
                alt={name}
                className="relative w-48 h-48 rounded-full object-cover ring-4 ring-purple-400/30"
              />
            </div>
          )}

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-600 to-purple-800 bg-clip-text text-transparent">
              {name}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              {title}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90"
              data-testid="button-contact"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleProjectsClick}
              data-testid="button-projects"
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover-elevate"
              data-testid="button-github"
              onClick={() => console.log('GitHub clicked')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-elevate"
              data-testid="button-linkedin"
              onClick={() => console.log('LinkedIn clicked')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-elevate"
              data-testid="button-download-resume"
              onClick={() => console.log('Download resume clicked')}
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
