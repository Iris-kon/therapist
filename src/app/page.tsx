'use client'
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Schedule } from "@/components/schedule";
import { Services } from "@/components/services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        event.preventDefault();
        // Adiciona um ajuste para garantir que o título fique visível
        const offset = 80; // Ajuste esse valor conforme necessário
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', handleScroll as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener('click', handleScroll as EventListener);
      });
    };
  }, []);
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Footer />
    </main>
  )
}
