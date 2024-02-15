import "./globals.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Info } from "./components/Info";
import WhatsAppButton from "./components/common/WhatsAppButon";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Info />
      <WhatsAppButton />
    </>
  );
}
