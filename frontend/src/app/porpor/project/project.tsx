import React from 'react'

const projects = [
  {
    title: 'Logbook',
    description: 'Sistem logbook digital untuk manajemen proyek dan kolaborasi tim.',
    tags: ['React'],
  },
  {
    title: 'UUK',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    tags: ['Rust', 'GPT', 'TUI'],
  },
  {
    title: 'Chrome Market',
    description: 'Marketplace NFT bertema cyberpunk dengan lelang live.',
    tags: ['Next.js', 'Solidity', 'IPFS'],
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[#07091c] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
            // 01
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-cyan-200 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Sistem yang saya bangun dari nol – dari konsep hingga produksi.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[28px] border border-cyan-500/20 bg-slate-950/40 p-8 shadow-[0_0_40px_rgba(56,189,248,0.08)] transition hover:border-cyan-300/40 hover:shadow-[0_0_60px_rgba(56,189,248,0.16)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-300 transition group-hover:bg-cyan-500/15">
                  ↗
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-fuchsia-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
