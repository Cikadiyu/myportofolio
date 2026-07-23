import React from 'react'
import Navbar from './porpor/navbar/navbar'
import HeroPage from './porpor/hero/page'
import ProjectSection from './porpor/project/project'
import CertificateSection from './porpor/sertifikat/sertifikat'


export default function page() {
  return (
    <div className="pt-20">
      <Navbar />
      <HeroPage />
      <ProjectSection />
      <CertificateSection />
    </div>
  )
}