"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── ImageCard ─── */

export interface IImageCardProps extends React.HTMLAttributes<HTMLElement> {
  /** URL of the image to display */
  imageUrl: string;
  /** Caption text below the image */
  caption: string;
  /** Alt text for the image (defaults to caption) */
  alt?: string;
}

const ImageCard = React.forwardRef<HTMLElement, IImageCardProps>(
  ({ imageUrl, caption, alt, className, ...props }, ref) => (
    <figure
      ref={ref}
      className={cn(
        "w-[250px] overflow-hidden border-2 border-border bg-card text-card-foreground font-sans shadow-md",
        className,
      )}
      {...props}
    >
      <img
        className="w-full aspect-4/3 object-cover"
        src={imageUrl}
        alt={alt ?? caption}
      />
      <figcaption className="border-t-2 border-border p-4 font-head text-sm">
        {caption}
      </figcaption>
    </figure>
  ),
);
ImageCard.displayName = "ImageCard";

export { ImageCard };
