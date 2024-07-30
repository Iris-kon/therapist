'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const isBrowser = () => typeof window !== 'undefined';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="fixed w-screen flex justify-between items-center px-4 sm:px-14 bg-background-dark z-20">
        <button onClick={scrollToTop} className="border-0">
          <Image src={"/assets/imgs/logo.svg"} className='h-[80px]'  width={244} height={75} alt='My Therapy Logo' />
        </button>

        <div className='flex-row h-full flex gap-6'>
          <button className='lg:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <XIcon /> : <MenuIcon />}
          </button>

          <nav className="gap-4 hidden text--font-poppins lg:flex">
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#about"
            >
              Sobre
              <span className="block max-w-3 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </Link>
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#services"
            >
              serviços
              <span className="block max-w-3 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </Link>
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#contact"
            >
              Contato
              <span className="block max-w-3 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </Link>
            <Link
              className=" cursor-pointer transition ease-in-out p-2 font-semibold flex shadow-md 
            items-center justify-center  rounded-md text-white -mt-8
            bg-highlight-primary duration-300 hover:bg-highlight-secondary hover:scale-110"
              href="#book"
            >
              Agendar
            </Link>
          </nav>
        </div>
      </div>


      <div className={`fixed bg-slate-100 ease-in-out duration-500 lg:hidden h-screen w-64 right-0 z-10 ${isSidebarOpen ? "translate-x-0 " : "translate-x-full"
        }`}>
        <nav className='flex flex-col gap-4 pt-16 px-4'>
        <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#about"
            >
              Sobre
            </Link>
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#services"
            >
              serviços
            </Link>
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#contact"
            >
              Contato
            </Link>
            <Link
              className="group transition text-base duration-300 hover:text-primary"
              href="#book"
            >
              Agendar
            </Link>
        </nav>
      </div>
    </>
  )
}
