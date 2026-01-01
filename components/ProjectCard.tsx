"use client";

import { ExternalLink, Github, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TechIcon from "./TechIcon";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full text-left cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Card className="group h-full flex flex-col overflow-hidden border-border/50 bg-card hover:border-border hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/80 font-semibold mb-2">
              {project.tagline}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="inline-flex items-center gap-1.5 text-xs"
              >
                <TechIcon name={tech} size={12} />
                <span>{tech}</span>
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge
                variant="outline"
                className="text-muted-foreground text-xs"
              >
                +{project.technologies.length - 5} more
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2">
            {project.github && (
              <Badge variant="outline" className="gap-1 text-xs">
                <Github className="w-3 h-3" />
                GitHub
              </Badge>
            )}
            {project.demo && (
              <Badge variant="outline" className="gap-1 text-xs">
                <ExternalLink className="w-3 h-3" />
                Demo
              </Badge>
            )}
            {project.isPrivate && (
              <Badge
                variant="secondary"
                className="bg-amber-500/10 text-amber-500 border-amber-500/30 gap-1 text-xs"
              >
                <Lock className="w-3 h-3" />
                Private
              </Badge>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              className="px-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
