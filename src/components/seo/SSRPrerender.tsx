"use client";
import { useEffect, useState, type ReactNode } from "react";

interface SSRPrerenderProps {
  id: string;
  ariaLabel: string;
  children: ReactNode;
}

export function SSRPrerender({ id, ariaLabel, children }: SSRPrerenderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-seo="true"
      className="sr-only"
      style={
        mounted
          ? {
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: 0,
            }
          : undefined
      }
    >
      {children}
    </section>
  );
}