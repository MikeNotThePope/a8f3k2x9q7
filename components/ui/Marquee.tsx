"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Marquee ─── */

export interface IMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Items to scroll across the marquee */
  items: string[];
  /** Speed of the animation in seconds (default: 20) */
  speed?: number;
  /** Pause on hover (default: false) */
  pauseOnHover?: boolean;
  /** Reverse direction (default: false) */
  reverse?: boolean;
}

const Marquee = React.forwardRef<HTMLDivElement, IMarqueeProps>(
  (
    {
      items,
      speed = 20,
      pauseOnHover = false,
      reverse = false,
      className,
      ...props
    },
    ref,
  ) => {
    const direction = reverse ? "reverse" : "normal";

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full overflow-x-hidden border-y-2 border-border bg-secondary text-secondary-foreground font-sans",
          pauseOnHover && "hover:[&>div]:animation-play-state-paused",
          className,
        )}
        {...props}
      >
        <div
          className="flex whitespace-nowrap py-12 animate-marquee"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction,
          }}
        >
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="mx-4 text-4xl font-head">
              {item}
            </span>
          ))}
        </div>

        <div
          className="flex absolute top-0 whitespace-nowrap py-12 animate-marquee2"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction,
          }}
        >
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="mx-4 text-4xl font-head">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  },
);
Marquee.displayName = "Marquee";

export { Marquee };
