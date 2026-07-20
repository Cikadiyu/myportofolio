import React from 'react'

export default function Navbar() {
  return (
    <div>
    <header className="bg-[#0c053b] border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm font-medium text-slate-200">
        <a href="#" className="text-cyan-300 font-semibold tracking-[0.28em]">
          NEXUS_07
        </a>

        <div className="hidden items-center space-x-8 lg:flex">
          <a href="#intro" className="hover:text-white transition-colors">
            INTRO
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            PROJECTS
          </a>
          <a href="#certificates" className="hover:text-white transition-colors">
            CERTIFICATES
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            SKILLS
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            TESTIMONIALS
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </div>

        <a
          href="#admin"
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-pink-300 transition-colors hover:bg-pink-500/20 hover:text-pink-100"
        >
          ADMIN
        </a>
      </nav>
    </header>
    </div>
  )
}
