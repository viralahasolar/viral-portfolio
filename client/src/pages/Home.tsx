import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

/**
 * Modern Minimalist Portfolio Design
 * Design Philosophy: Clean, spacious layouts with geometric accents
 * Color Scheme: Deep Navy (#0F172A) + Vibrant Teal (#06B6D4)
 * Typography: Playfair Display (headings) + Inter (body) + Courier Prime (code)
 */

export default function Home() {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Viral Patel</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663674749772/YL7k2TPns2XUD4w8vA3hpf/hero-background-RpjgeuisRQptvbhbxnJhXj.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Full-Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Specialized in backend development with expertise in Laravel, Node.js, and database optimization. 
              I build scalable, secure APIs and robust backend systems for modern applications.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Viral_Patel_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate software developer with 4+ years of experience building robust backend systems and APIs. 
                My journey in tech has been driven by a commitment to writing clean, maintainable code and solving complex problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Currently working at AhaSolar Technologies, I specialize in designing scalable backend architectures, 
                integrating third-party services, and optimizing database performance. I'm proficient in modern frameworks 
                and best practices for API development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies and contributing to open-source projects.
              </p>
            </div>
            <div className="animate-slide-in-right flex flex-col items-center gap-8">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                  <img 
                    src="/manus-storage/viral-profile_1e730119.png"
                    alt="Viral Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-lg">
                  4+ Yrs
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-8 border border-accent/20 w-full">
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-8 border-l-4 border-l-accent hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{job.role}</h3>
                    <p className="text-accent font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
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
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-bold text-primary mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{project.name}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <a href="mailto:patelviral2904@gmail.com" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
              <Mail size={24} />
              <span>patelviral2904@gmail.com</span>
            </a>
            <a href="tel:+919737569817" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
              <Phone size={24} />
              <span>+91 9737569817</span>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Github size={20} />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Linkedin size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/60 py-8 text-center">
        <p>&copy; 2026 Viral Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}
