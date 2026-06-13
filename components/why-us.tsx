import { Reveal } from './reveal'

const reasons = [
  {
    title: 'Styku 3D Body Composition',
    desc: 'We track shape, proportion, and composition over time — the whole picture, not just a number on a scale.',
  },
  {
    title: 'Weekly Concierge Check-Ins',
    desc: 'When life disrupts the plan, we recalibrate and keep moving. We never make you restart from zero.',
  },
  {
    title: 'Clinician-Guided Medication',
    desc: 'GLP-1 and GLP-1/GIP combination therapies, managed carefully with education built into every step.',
  },
  {
    title: 'Longevity-Focused Add-Ons',
    desc: 'NAD+ and Sermorelin for patients ready to invest in how they feel at a cellular level.',
  },
  {
    title: 'Medical-Grade Aesthetics',
    desc: 'Jeuveau, Dysport, Botox, and Xeomin — administered with precision, conservatism, and natural results.',
  },
  {
    title: 'Treated as a Whole Person',
    desc: 'A practice that tracks progress, adjusts when needed, and sees you as more than a prescription.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Why Gilbert Chooses Us
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl">
              More than a product or a prescription
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 100}
              className="group relative bg-card/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-card"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-medium text-primary">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-foreground">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
