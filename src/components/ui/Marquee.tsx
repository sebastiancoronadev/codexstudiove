"use client";
import { cn } from "@/lib/utils/cn";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = "left", speed = 90, className }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex whitespace-nowrap animate-marquee shrink-0"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-10 font-outfit text-2xl md:text-4xl font-bold text-white/15 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className="flex whitespace-nowrap animate-marquee shrink-0"
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="mx-10 font-outfit text-2xl md:text-4xl font-bold text-white/15 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}