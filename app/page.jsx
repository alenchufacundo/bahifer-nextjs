import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Info } from "./components/Info";
import WhatsAppButton from "./components/common/WhatsAppButon";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Info />
      <WhatsAppButton />
    </main>
  );
}
