"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FileCheck, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  image: string;
  date: string;
  description?: string;
}

export default function CertificateCard({
  title,
  issuer,
  image,
  date,
  description,
}: CertificateCardProps) {
  const [showFullImage, setShowFullImage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-border hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
          {/* Certificate Image */}
          <button
            onClick={() => setShowFullImage(true)}
            className="relative w-full aspect-[4/3] overflow-hidden bg-muted"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
              <span className="text-white text-xs font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md">
                Click to enlarge
              </span>
            </div>
          </button>

          <CardContent className="p-4 space-y-3">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                {title}
              </h4>
              <p className="text-xs text-muted-foreground">{issuer}</p>
              <p className="text-xs text-muted-foreground/70">{date}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs h-8 hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setShowDetails(true)}
            >
              <FileCheck className="w-3 h-3 mr-1.5" />
              View Details
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Full Image Dialog */}
      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black/95">
          <div className="relative w-full h-[85vh]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1400px) 100vw, 1200px"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      {description && (
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogContent className="max-w-2xl max-h-[85vh]">
            <DialogHeader>
              <DialogTitle className="text-xl pr-8">{title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[65vh]">
              <div className="space-y-4 pr-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">
                      Issuer:
                    </span>{" "}
                    <span className="text-muted-foreground">{issuer}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Date:</span>{" "}
                    <span className="text-muted-foreground">{date}</span>
                  </p>
                </div>
                <div className="pt-3 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Description
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
