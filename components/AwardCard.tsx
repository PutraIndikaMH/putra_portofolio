"use client";

import Image from "next/image";
import { Award as AwardIcon, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface AwardCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  onClick: () => void;
}

export default function AwardCard({
  title,
  issuer,
  date,
  image,
  onClick,
}: AwardCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
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
      <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-border hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
        {/* Award Image - Clean, less obtrusive hover */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Minimal, non-intrusive hover indicator at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-3">
            <span className="text-white text-xs font-medium flex items-center justify-center gap-1.5">
              <Trophy className="w-3 h-3" />
              Click to view details
            </span>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Badge
              variant="secondary"
              className="mt-0.5 p-2 bg-primary/10 border-primary/20"
            >
              <AwardIcon className="w-4 h-4 text-primary" />
            </Badge>
            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-bold text-foreground line-clamp-2 leading-tight">
                {title}
              </h4>
              <p className="text-xs text-muted-foreground">{issuer}</p>
              <p className="text-xs text-foreground/80">{date}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
