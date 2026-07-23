import React from 'react'
import { animate } from 'animejs';
import { splitText } from 'animejs/text';



export default function HeroPage() {
  return (
    
    <main className="relative isolate overflow-hidden py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 lg:px-8">
        <section className="max-w-2xl space-y-6 text-slate-100">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] text-pink-300">
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-pink-400 text-[0.6rem] leading-none">
              ↯
            </span>
            SYSTEM ONLINE
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-100 sm:text-6xl">
              Hello,
            </h1>
            <h2 className="text-5xl font-semibold tracking-[-0.06em] text-slate-100 sm:text-6xl">
               <span className="text-cyan-300">Daniel Abraham</span>
            </h2>
            <p className="text-lg text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold text-fuchsia-300 transition hover:border-fuchsia-300 hover:bg-fuchsia-500/20 hover:text-white"
            >
              DOWNLOAD CV
            </a>
          </div>
        </section>

        <aside className="relative hidden h-130 w-130 rounded-4xl  border border-cyan-500/20 bg-slate-950/40 p-10 shadow-[0_0_80px_rgba(56,189,248,0.16)] backdrop-blur-xl lg:block">
          <div className="absolute inset-0 rounded-4xl border border-cyan-500/20" />
          <div className="relative z-10 mx-auto flex h-full w-full items-center justify-center text-center">
            <div className="space-y-8 text-slate-100">
              <div className="mx-auto w-28 rounded-3xl border border-cyan-500/30 bg-cyan-500/5 p-6 text-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.24)]">
                <div className="mx-auto h-14 w-14 rounded-2xl border border-cyan-400/40 bg-slate-950/70" />
              </div>

              <div className="space-y-4 text-left text-sm text-slate-300">
                <div className="grid grid-cols-[1fr_auto] gap-x-4">
                  <span className="uppercase text-xs tracking-[0.24em] text-slate-500">status</span>
                  <span className="text-cyan-300">ACTIVE</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-4">
                  <span className="uppercase text-xs tracking-[0.24em] text-slate-500">uptime</span>
                  <span className="text-fuchsia-300">24/7/365</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-4">
                  <span className="uppercase text-xs tracking-[0.24em] text-slate-500">mode</span>
                  <span className="text-fuchsia-300">BUILD</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_45%)]" />
    </main>
  )
}
