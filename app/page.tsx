import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Philosophy } from '@/components/philosophy'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { ConsultCta, SiteFooter } from '@/components/consult-cta'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Philosophy />
      <Services />
      <WhyUs />
      <ConsultCta />
      <SiteFooter />
    </main>
  )
}
