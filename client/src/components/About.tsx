import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Shield, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Passionate about network security and protecting digital assets",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating responsive, modern web applications with latest technologies",
    },
    {
      icon: Sparkles,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on cybersecurity and modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 mb-16"
        >
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Hello! I'm Akash Katageri, a dedicated developer with a strong interest in 
            cybersecurity and web development. I completed the Introduction to Cybersecurity 
            course from Cisco Networking Academy, gaining valuable knowledge about online 
            safety, cyber threats, and security best practices.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm passionate about building secure, scalable web applications that deliver 
            exceptional user experiences. My goal is to combine my cybersecurity knowledge 
            with modern web technologies to create solutions that are both powerful and secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-card-border hover-elevate">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
