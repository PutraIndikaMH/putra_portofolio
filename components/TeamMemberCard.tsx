"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "@/lib/data";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="group cursor-default h-full"
    >
      <div className="bg-dark-surface border border-dark-border rounded-xl p-6 text-center transition-all hover:border-white/30 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
        {/* Avatar with image */}
        <div className="relative mx-auto mb-4 w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-dark-border group-hover:ring-white/30 transition-all">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 leading-tight min-h-[3rem] flex items-center justify-center">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-xs md:text-sm text-muted-foreground mb-4 min-h-[2.5rem] flex items-center justify-center">
          {member.role}
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 mt-auto pt-4 border-t border-dark-border/50 min-h-[3.5rem]">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-bg hover:bg-white/10 rounded-lg transition-all hover:scale-110"
              aria-label={`${member.name}'s LinkedIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-bg hover:bg-white/10 rounded-lg transition-all hover:scale-110"
              aria-label={`${member.name}'s GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
