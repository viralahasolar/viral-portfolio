import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Sun, Moon, ChevronDown, Send } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [inquiry, setInquiry] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleInquiryChange = (field: string, value: string) => {
    setInquiry(prev => ({ ...prev, [field]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*HR Inquiry from Portfolio*%0A%0A` +
      `*Name:* ${inquiry.name}%0A` +
      `*Mobile:* ${inquiry.mobile}%0A` +
      `*Email:* ${inquiry.email}%0A` +
      `*Company:* ${inquiry.companyName}%0A` +
      `*Message:* ${inquiry.message}`
    );
    window.open(`https://wa.me/919737569817?text=${text}`, "_blank");
  };

  const skills = {
    backend: ["Node.js", "Express.js", "Laravel", "CakePHP"],
    database: ["PostgreSQL", "MySQL"],
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    tools: ["RESTful API", "JSON", "Postman", "Github", "Docker"],
  };

  const experience = [
    {
      role: "Software Developer",
      company: "AhaSolar Technologies Ltd.",
      period: "Aug 2023 - Current",
      location: "Ahmedabad, India",
      highlights: [
        "Designed and maintained modular, reusable backend features in Laravel",
        "Integrated critical third-party APIs (payment gateways, messaging services)",
        "Developed robust backend services for AhaSolar 2.0 using Node.js",
        "Optimized MySQL stored procedures improving system performance",
      ],
    },
    {
      role: "Laravel Developer",
      company: "Kanhasoft",
      period: "Mar 2023 - Jul 2023",
      location: "Ahmedabad, India",
      highlights: [
        "Handled complete backend architecture for Misuma App (task management)",
        "Designed and implemented secure, high-performance APIs",
        "Improved API response times with asynchronous processing and caching",
      ],
    },
    {
      role: "Laravel Developer",
      company: "Multiqos Technologies",
      period: "Jan 2022 - Feb 2023",
      location: "Ahmedabad, India",
      highlights: [
        "Developed mobile APIs and admin panels for client projects",
        "Implemented secure APIs for content and lead management systems",
        "Collaborated with frontend and QA teams for seamless delivery",
      ],
    },
    {
      role: "PHP Developer",
      company: "Xceptive Solutions",
      period: "Oct 2020 - Dec 2021",
      location: "Ahmedabad, India",
      highlights: [
        "Developed internal web applications (attendance, forex trading modules)",
        "Gained experience across full development lifecycle",
      ],
    },
  ];

  const projects = [
    {
      name: "AhaSolar 2.0",
      tech: ["Node.js", "MySQL", "REST APIs"],
      description: "Built backend services for solar management platform with scalable APIs for mobile and web apps.",
    },
    {
      name: "AhaSolar",
      tech: ["CakePHP", "Laravel", "MySQL"],
      description: "Developed and maintained backend modules with optimized database queries and integrated RESTful APIs.",
    },
    {
      name: "SolarYan",
      tech: ["Laravel", "MySQL", "REST API"],
      description: "Built backend APIs and handled database management with focus on feature development and performance.",
    },
    {
      name: "Misuma App",
      tech: ["Laravel", "MySQL"],
      description: "Designed backend architecture for productivity and task management application with secure APIs.",
    },
    {
      name: "BITNEX",
      tech: ["Node.js", "PostgreSQL"],
      description: "Developed Inventory Management module for plumbing ERP system with stock management and warehouse tracking.",
    },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-grid -z-30" />
      <div className="fixed top-1/4 -left-32 w-96 h-96 glow-orb bg-blue-500/10" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 glow-orb bg-purple-500/10" />

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="dark:glass-light border-b border-border/50 bg-white/80 dark:bg-transparent dark:border-0 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-2xl font-bold dark:gradient-text text-primary">Viral Patel</span>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-8">
                {["about", "experience", "skills", "projects", "contact"].map((s) => (
                  <button
                    key={s}
                    onClick={() => scrollTo(s)}
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors capitalize"
                  >
                    {s}
                  </button>
                ))}
              </div>
              {toggleTheme && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-20" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="dark:gradient-text text-primary">Full-Stack</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Specialized in backend development with expertise in Laravel, Node.js, and database optimization.
              I build scalable, secure APIs and robust backend systems for modern applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base rounded-full"
                onClick={() => scrollTo("projects")}
              >
                View My Work
                <ChevronDown size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 px-8 py-6 text-base rounded-full"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Viral_Patel_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </section>

      <section id="about" className="relative py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 dark:gradient-text text-primary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software developer with 4+ years of experience building robust backend systems and APIs.
                My journey in tech has been driven by a commitment to writing clean, maintainable code and solving complex problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at AhaSolar Technologies, I specialize in designing scalable backend architectures,
                integrating third-party services, and optimizing database performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies and contributing to open-source projects.
              </p>
            </div>
            <div className="animate-slide-in-right flex flex-col items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40 group-hover:opacity-70 blur-lg transition-opacity duration-500" />
                <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-accent/30 relative">
                  <img
                    src="/image.png"
                    alt="Viral Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-lg animate-glow">
                  4+ Yrs
                </div>
              </div>
              <div className="dark:glass-light bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/10 w-full card-hover">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">Location</h3>
                    <p className="text-foreground flex items-center gap-2">
                      <MapPin size={18} className="text-accent" />
                      Himatnagar, India
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">Education</h3>
                    <p className="text-foreground">Bachelor of Computer Applications</p>
                    <p className="text-sm text-muted-foreground">Hemchandracharya North Gujarat University</p>
                    <p className="text-sm text-muted-foreground">CGPA: 8.2/10</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">Languages</h3>
                    <p className="text-foreground">Gujarati, English, Hindi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 dark:gradient-text text-primary">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="dark:glass-light bg-white p-8 border-l-4 border-l-accent card-hover">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                      <p className="text-accent font-semibold">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground shrink-0">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 dark:gradient-text text-primary">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="dark:glass-light bg-white p-6 card-hover h-full">
                  <h3 className="text-lg font-bold text-foreground mb-4 capitalize flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 dark:gradient-text text-primary">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="dark:glass-light bg-white p-8 card-hover h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="dark:bg-secondary/50 bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-28">
        <div className="absolute inset-0 hero-gradient -z-20" />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:gradient-text text-primary text-center">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto text-center">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out or send an inquiry!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="glass-light p-8 card-hover flex flex-col items-center justify-center text-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
                  <div className="space-y-6">
                    <a
                      href="mailto:patelviral2904@gmail.com"
                      className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group justify-center"
                    >
                      <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Mail size={20} className="text-accent" />
                      </div>
                      <span className="font-medium">patelviral2904@gmail.com</span>
                    </a>
                    <a
                      href="tel:+919737569817"
                      className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group justify-center"
                    >
                      <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Phone size={20} className="text-accent" />
                      </div>
                      <span className="font-medium">+91 9737569817</span>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 border-border hover:border-accent hover:text-accent hover:bg-accent/10"
                  >
                    <Github size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 border-border hover:border-accent hover:text-accent hover:bg-accent/10"
                  >
                    <Linkedin size={20} />
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="glass-light p-8 card-hover">
              <h3 className="text-xl font-bold text-foreground mb-6">HR Inquiry</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={inquiry.name}
                    onChange={(e) => handleInquiryChange("name", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground">Mobile</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={inquiry.mobile}
                    onChange={(e) => handleInquiryChange("mobile", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={inquiry.email}
                    onChange={(e) => handleInquiryChange("email", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-foreground">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your company"
                    value={inquiry.companyName}
                    onChange={(e) => handleInquiryChange("companyName", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message <span className="text-muted-foreground text-sm">(optional)</span></Label>
                  <Textarea
                    id="message"
                    placeholder="Any additional details..."
                    value={inquiry.message}
                    onChange={(e) => handleInquiryChange("message", e.target.value)}
                    className="min-h-[80px] bg-background border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 text-base rounded-full"
                >
                  <Send size={18} className="mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 dark:glass-light bg-primary dark:bg-transparent text-muted-foreground py-8 text-center">
        <p>&copy; 2026 Viral Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}
