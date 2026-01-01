"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  if (images.length === 0) return null;

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  return (
    <>
      {/* Horizontal gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => handleImageClick(image, index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-border transition-all group"
          >
            <Image
              src={image || "/images/placeholder.png"}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/placeholder.png";
              }}
            />
            {/* Image counter badge */}
            <Badge
              variant="secondary"
              className="absolute bottom-2 right-2 bg-black/60 text-white border-0"
            >
              {index + 1}/{images.length}
            </Badge>
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl h-[90vh] p-0 bg-black border-border">
          <div className="relative w-full h-full flex items-center justify-center p-8">
            {selectedImage && (
              <>
                <Image
                  src={selectedImage || "/images/placeholder.png"}
                  alt={`${alt} - Image ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.png";
                  }}
                />
                {/* Counter badge on zoomed image */}
                <Badge
                  variant="secondary"
                  className="absolute bottom-4 right-4 bg-black/80 text-white border-border z-10"
                >
                  {selectedIndex + 1} / {images.length}
                </Badge>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
