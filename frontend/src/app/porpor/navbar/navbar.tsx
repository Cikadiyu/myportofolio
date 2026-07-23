'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 text-sm font-medium shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            isTop
              ? 'border-white/10 bg-white/10 text-slate-200'
              : 'border-cyan-400/20 bg-[#050816]/90 text-slate-100 shadow-cyan-500/10'
          }`}
        >
          <a href="#" className="flex items-center gap-3 text-2xl font-semibold text-cyan-300">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-base font-bold">
              D
            </span>
            <span className="text-lg sm:text-xl">Portofolio</span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="#intro" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              ABOUT
            </a>
            <a href="#projects" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              PROJECTS
            </a>
            <a href="#certificates" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              CERTIFICATES
            </a>
            <a href="#skills" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              SKILLS
            </a>
            <a href="#testimonials" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              TESTIMONIALS
            </a>
            <a href="#contact" className="rounded-full px-3 py-2 transition-all hover:bg-white/10 hover:text-white">
              CONTACT
            </a>
          </div>

          <a
            href="#admin"
            className="rounded-full border border-pink-500/30 bg-linear-to-r from-pink-500/20 to-cyan-500/20 px-4 py-2 text-pink-200 transition-all hover:scale-105 hover:border-pink-400/50 hover:text-pink-100"
          >
            ADMIN
          </a>
        </nav>
      </header>
    </div>
  )
}
