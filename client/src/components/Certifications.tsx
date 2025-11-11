import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";
import certificateImg from "@assets/I2CSUpdate20250627-28-8wmkhn_page-0001_1762656688863.jpg";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border-card-border hover-elevate h-full">
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      Introduction to Cybersecurity
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Cisco Networking Academy
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Issued: June 27, 2025</span>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Key Competencies:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Understanding cybersecurity fundamentals and online safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Identifying common cyber threats, attacks, and vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Implementing protection strategies for individuals and organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Exploring career opportunities in cybersecurity field</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-md"
                  data-testid="button-view-certificate"
                  onClick={() => window.open(certificateImg, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover-elevate cursor-pointer"
                 onClick={() => window.open(certificateImg, '_blank')}
                 data-testid="image-certificate">
              <img
                src={certificateImg}
                alt="Cisco Cybersecurity Certificate"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
