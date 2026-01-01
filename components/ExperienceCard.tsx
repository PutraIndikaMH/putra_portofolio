"use client";

import { Lock, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TechIcon from "./TechIcon";
import { motion } from "framer-motion";
import { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export default function ExperienceCard({
  experience,
  onClick,
}: ExperienceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="w-full text-left cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-border hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
              </div>
              <p className="text-base text-foreground/90 font-semibold">
                {experience.company}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {experience.duration}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {experience.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 6).map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="inline-flex items-center gap-1.5 text-xs"
              >
                <TechIcon name={tech} size={12} />
                <span>{tech}</span>
              </Badge>
            ))}
            {experience.technologies.length > 6 && (
              <Badge
                variant="outline"
                className="text-xs text-muted-foreground"
              >
                +{experience.technologies.length - 6} more
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
