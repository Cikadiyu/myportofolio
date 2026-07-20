import React from 'react'

const certificates = [
  {
    code: 'CERT_2024',
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
  },
  {
    code: 'CERT_2023',
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
  },
  {
    code: 'CERT_2023',
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco',
  },
]

export default function CertificateSection() {
  return (
    <section className="bg-[#07091c] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
            // 02
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-cyan-200 sm:text-5xl">
            Certificates
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Kredensial resmi dan pelatihan lanjutan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={`${certificate.code}-${index}`}
              className="rounded-[28px] border border-pink-500/20 bg-slate-950/40 p-8 shadow-[0_0_40px_rgba(236,72,153,0.08)] transition hover:border-pink-400/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.16)]"
            >
              <div className="mb-6 text-xs uppercase tracking-[0.35em] text-pink-300">
                {certificate.code}
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-slate-100">
                {certificate.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400">{certificate.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
