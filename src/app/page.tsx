"use client";
import { useState, useEffect } from "react";
import { ScrollLock } from "@/components/ui/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Payments } from "@/components/sections/Payments";
import { Biography } from "@/components/sections/Biography";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!introComplete && <ScrollLock />}
      <Navbar visible={introComplete} />
      <main>
        <Hero onIntroComplete={() => setIntroComplete(true)} />
        <MarqueeBanner />
        <Trust />
        <Services />
        <Portfolio />
        <Technologies />
        <GlobalPresence />
        <Team />
        <Testimonials />
        <Payments />
        <Biography />
        <Contact />
      </main>
      <Footer />
    </>
  );
}