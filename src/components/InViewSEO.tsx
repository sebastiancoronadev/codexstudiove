ï»¿import React, { useRef, useEffect } from 'react';
import React, { useRef, useEffect } from 'react';
import { useInView } from 'motion/react';
import SEO from './SEO';

interface InViewSEOProps {
  title: string;
  description: string;
  keywords: string;
}

export default function InViewSEO({ title, description, keywords }: InViewSEOProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div ref={ref} className="absolute w-full h-px pointer-events-none opacity-0">
      {isInView && <SEO title={title} description={description} keywords={keywords} />}
    </div>
  );
}
