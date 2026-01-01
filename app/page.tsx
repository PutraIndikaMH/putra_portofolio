"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Download,
  Lock,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Typewriter from "@/components/Typewriter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import AwardCard from "@/components/AwardCard";
import ExperienceCard from "@/components/ExperienceCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImageGallery from "@/components/ImageGallery";
import TechIcon from "@/components/TechIcon";
import { motion, AnimatePresence } from "framer-motion";
import {
  profile,
  experiences,
  projects,
  certificates,
  awards,
  publications,
  services,
  stats,
  teamMembers,
  Award,
  Project,
  Experience,
} from "@/lib/data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [showExperienceImage, setShowExperienceImage] = useState(false);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [showAwardDetails, setShowAwardDetails] = useState(false);

  const experience = experiences[0];
  const selectedProjects = projects.slice(0, 4);
  const selectedCertificates = certificates.slice(0, 6);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="container-custom max-w-5xl mx-auto text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover object-center"
                priority
                sizes="160px"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 font-semibold min-h-[2rem]">
              <Typewriter
                texts={[
                  "Full Stack Developer",
                  "Backend Specialist",
                  "Mobile App Developer",
                ]}
                speed={80}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </p>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              {profile.about}
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-surface hover:bg-white/10 rounded-xl transition-all border border-dark-border hover:border-white/30 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-surface hover:bg-white/10 rounded-xl transition-all border border-dark-border hover:border-white/30 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 bg-dark-surface hover:bg-white/10 rounded-xl transition-all border border-dark-border hover:border-white/30 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-card/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimateOnScroll>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stats.gpa}
                    </div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide">
                      GPA
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stats.projects}
                    </div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide">
                      Projects
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stats.awards}
                    </div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide">
                      Awards
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stats.publications}
                    </div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide">
                      Publications
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Services
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                What I offer to help your projects succeed
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <AnimateOnScroll key={service.id} delay={index * 50}>
                  <Card className="group hover:border-foreground/30 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        {service.icon === "Code" && (
                          <div className="p-2 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                            <Code className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </div>
                        )}
                        {service.icon === "Smartphone" && (
                          <div className="p-2 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                            <Smartphone className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Experience
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                My professional journey and contributions
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <ExperienceCard
                experience={experience}
                onClick={() => setSelectedExperience(experience)}
              />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Team Collaboration Section */}
        <section id="team" className="py-16 px-4 bg-card/30">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Team & Collaboration
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Collaborating with talented individuals to build innovative
                solutions
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <AnimateOnScroll key={member.id} delay={index * 20}>
                  <TeamMemberCard member={member} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 bg-card/30">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Selected Projects
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Showcasing my best work in full-stack development
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedProjects.map((project, index) => (
                <AnimateOnScroll key={project.slug} delay={index * 50}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16 px-4 bg-card/30">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Certificates & Credentials
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Professional certifications and continuous learning
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCertificates.map((cert, index) => (
                <AnimateOnScroll key={cert.id} delay={index * 30}>
                  <div className="h-full">
                    <CertificateCard
                      title={cert.title}
                      issuer={cert.issuer}
                      image={cert.image}
                      date={cert.date}
                      description={cert.description}
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-16 px-4 bg-card/30">
          <div className="container-custom max-w-6xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Awards & Honors
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Recognition for innovation and excellence
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <AnimateOnScroll key={award.id} delay={index * 50}>
                  <AwardCard
                    title={award.title}
                    issuer={award.issuer}
                    date={award.date}
                    image={award.image}
                    onClick={() => {
                      setSelectedAward(award);
                      setShowAwardDetails(false);
                    }}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16 px-4">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Publications & Research
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Contributing to academic knowledge and industry insights
              </p>
            </AnimateOnScroll>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <AnimateOnScroll key={pub.id} delay={index * 50}>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="transition-all hover:border-foreground/30 hover:shadow-lg hover:shadow-white/5 animate-fade-in">
                      <CardContent className="p-6">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-sm text-foreground/70 mb-2">
                            {pub.authors}
                          </p>
                          <p className="text-sm text-foreground/60 mb-3">
                            {pub.journal} • {pub.date}
                          </p>
                          {pub.description && (
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                              {pub.description}
                            </p>
                          )}
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">View on DOI</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="container-custom text-center text-muted-foreground text-sm">
            <p>© 2026 {profile.name}. Built with Next.js & Tailwind CSS.</p>
          </div>
        </footer>

        {/* Project Detail Modal with Image Gallery */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-6xl max-h-[90vh] p-0">
            <ScrollArea className="max-h-[90vh]">
              {selectedProject && (
                <div className="p-8 space-y-8">
                  <DialogHeader>
                    <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-lg text-foreground/80 font-semibold">
                      {selectedProject.tagline}
                    </p>
                  </DialogHeader>

                  {/* Project Images Gallery - Beautiful Animation */}
                  {selectedProject.images.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-3"
                    >
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        Project Gallery
                      </h3>
                      <ImageGallery
                        images={selectedProject.images}
                        alt={selectedProject.title}
                      />
                    </motion.div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.github && (
                      <Button variant="outline" asChild size="sm">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button variant="outline" asChild size="sm">
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Overview */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </motion.div>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Card className="bg-red-500/5 border-red-500/20">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold">
                              ?
                            </span>
                            Problem
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {selectedProject.problem}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Card className="bg-green-500/5 border-green-500/20">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 font-bold">
                              ✓
                            </span>
                            Solution
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {selectedProject.solution}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5"
                          >
                            <TechIcon name={tech} size={14} />
                            <span>{tech}</span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Role */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      My Role & Responsibilities
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.role}
                    </p>
                  </motion.div>

                  {/* Challenges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Challenges & Solutions
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="leading-relaxed text-sm">
                            {challenge}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Outcome */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Outcome & Impact
                    </h3>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.outcome}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>

        {/* Experience Detail Modal */}
        <Dialog
          open={!!selectedExperience}
          onOpenChange={() => setSelectedExperience(null)}
        >
          <DialogContent className="max-w-4xl max-h-[85vh] p-0">
            <ScrollArea className="max-h-[85vh]">
              {selectedExperience && (
                <div className="p-8 space-y-6">
                  <DialogHeader>
                    <div>
                      <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                        {selectedExperience.title}
                      </DialogTitle>
                      <p className="text-lg text-foreground/80 font-semibold">
                        {selectedExperience.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedExperience.duration}
                      </p>
                    </div>
                  </DialogHeader>

                  {/* Company Logo/Image if available - click to view full image */}
                  {selectedExperience.posterImage && (
                    <button
                      onClick={() => setShowExperienceImage(true)}
                      className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden bg-muted group cursor-pointer"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedExperience.posterImage}
                          alt={selectedExperience.company}
                          fill
                          className="object-cover"
                          sizes="(max-width: 896px) 100vw, 896px"
                        />
                      </motion.div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md">
                          Click to view full image
                        </span>
                      </div>
                    </button>
                  )}

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      About the Role
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedExperience.description}
                    </p>
                  </motion.div>

                  {/* Private Repo Notice */}
                  {selectedExperience.isPrivate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30"
                    >
                      <ExternalLink className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-500 font-semibold mb-1">
                          Private Repository
                        </p>
                        <p className="text-xs text-amber-500/80 leading-relaxed">
                          The GitHub repository for this project is private due
                          to client confidentiality and proprietary code.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="inline-flex items-center gap-1.5"
                          >
                            <TechIcon name={tech} size={14} />
                            <span>{tech}</span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>

        {/* Award Full Image Dialog */}
        <Dialog
          open={!!selectedAward && !showAwardDetails}
          onOpenChange={() => setSelectedAward(null)}
        >
          <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black/98">
            <button
              onClick={() => setShowAwardDetails(true)}
              className="relative w-full h-[85vh] bg-black group cursor-pointer"
            >
              {selectedAward && (
                <>
                  <Image
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1400px) 100vw, 1200px"
                  />
                  {/* Minimal, non-obtrusive hover at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-4 px-4">
                    <span className="text-white text-sm font-medium flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Click anywhere to view details
                    </span>
                  </div>
                </>
              )}
            </button>
          </DialogContent>
        </Dialog>

        {/* Experience Full Image Dialog */}
        <Dialog
          open={showExperienceImage}
          onOpenChange={() => setShowExperienceImage(false)}
        >
          <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-black/98">
            <button
              onClick={() => setShowExperienceImage(false)}
              className="relative w-full h-[85vh] bg-black group cursor-pointer"
            >
              {selectedExperience && (
                <>
                  <Image
                    src={selectedExperience.posterImage}
                    alt={selectedExperience.company}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1400px) 100vw, 1200px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-4 px-4">
                    <span className="text-white text-sm font-medium flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Click anywhere to close
                    </span>
                  </div>
                </>
              )}
            </button>
          </DialogContent>
        </Dialog>

        {/* Award Details Dialog */}
        <Dialog
          open={showAwardDetails}
          onOpenChange={() => setShowAwardDetails(false)}
        >
          <DialogContent className="max-w-3xl max-h-[85vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl pr-8">
                {selectedAward?.title}
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[65vh]">
              <div className="space-y-6 pr-4">
                {/* Thumbnail */}
                {selectedAward && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border"
                    >
                      <Image
                        src={selectedAward.image}
                        alt={selectedAward.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 1200px) 100vw, 768px"
                      />
                    </motion.div>

                    {/* Details */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="grid gap-3 p-4 rounded-lg bg-muted/30">
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-foreground min-w-[70px] text-sm">
                            Award:
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {selectedAward.title}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-foreground min-w-[70px] text-sm">
                            Issuer:
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {selectedAward.issuer}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="font-semibold text-foreground min-w-[70px] text-sm">
                            Date:
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {selectedAward.date}
                          </span>
                        </div>
                      </div>

                      {selectedAward.description && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded-full" />
                            Description
                          </h4>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {selectedAward.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
