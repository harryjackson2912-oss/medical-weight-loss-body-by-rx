import { Reveal } from './reveal'

type Service = {
  name: string
  tag: string
  desc: string
  href?: string
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal
      delay={index * 80}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/40"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="text-xs uppercase tracking-[0.2em] text-primary">
        {service.tag}
      </span>
      <h3 className="mt-3 font-heading text-2xl font-medium text-foreground">
        {service.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
      {service.href ? (
        <a
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          Learn more
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            →
          </span>
        </a>
      ) : null}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />
    </Reveal>
  )
}

function Block({
  id,
  eyebrow,
  title,
  intro,
  services,
}: {
  id: string
  eyebrow: string
  title: string
  intro: string
  services: Service[]
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight text-balance text-foreground sm:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              {intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <>
      <Block
        id="weight-loss"
        eyebrow="Medical Weight Loss"
        title="A program built around you"
        intro="We start by identifying what's actually driving the weight — health history, medications, lifestyle triggers, and the patterns that push progress off track. Then we build a plan that can survive real life."
        services={[
          {
            tag: 'Foundation',
            name: 'Personalized Coaching',
            desc: 'Nutrition strategy, protein-forward habits, and movement guidance tailored to your goals and your schedule.',
          },
          {
            tag: 'Medically Managed',
            name: 'GLP-1 Support',
            desc: 'Clinician-guided GLP-1 and GLP-1/GIP options, dosed in small, controlled increments to improve tolerability and reduce side effects.',
          },
          {
            tag: 'Accountability',
            name: 'Weekly Check-Ins',
            desc: 'Consistent reviews of appetite, energy, sleep, and cravings that keep the plan from quietly drifting off course.',
          },
        ]}
      />

      <Block
        id="longevity"
        eyebrow="Longevity & Recovery"
        title="Invest in how you feel at a cellular level"
        intro="For patients who want to go beyond weight loss, our longevity add-ons are used thoughtfully within a broader wellness framework — matched to your symptoms, your labs, and your goals."
        services={[
          {
            tag: 'Cellular Energy',
            name: 'NAD+ Injections',
            desc: 'A coenzyme central to energy metabolism and cellular repair. Offered as part of a broader longevity plan — never a standalone quick fix.',
          },
          {
            tag: 'Recovery',
            name: 'Sermorelin',
            desc: 'A peptide supporting lean muscle preservation, better sleep, faster recovery, and steadier energy — adjusted as your body responds.',
          },
          {
            tag: 'Measured',
            name: 'Styku 3D Scanning',
            desc: 'We track shape, proportion, and composition over time. The scale tells one story; the scan tells the whole picture.',
          },
        ]}
      />

      <Block
        id="aesthetics"
        eyebrow="Medical-Grade Aesthetics"
        title="Refined, natural, and specifically like you"
        intro="Our aesthetic services are offered with the same clinical discipline we bring to weight loss and longevity care. Safety, anatomy, and technique are always at the center of every visit — we soften the lines that age you while keeping your face fully your own."
        services={[
          {
            tag: 'Neurotoxin',
            name: 'Jeuveau',
            desc: 'A modern, FDA-approved neurotoxin administered with restraint and precision — for forehead lines, crow\u2019s feet, and glabellar lines.',
            href: 'https://bodybyrx.com/jeuveau-gilbert-az',
          },
          {
            tag: 'Neurotoxin',
            name: 'Dysport',
            desc: 'Fast-acting and ideal for broader areas like the forehead. Tailored to your facial structure for smooth, consistent results.',
            href: 'https://bodybyrx.com/dysport-gilbert-az',
          },
          {
            tag: 'Neurotoxin',
            name: 'Botox & Xeomin',
            desc: 'Trusted classics delivered conservatively, with a commitment to results that hold up in photos, in conversation, and in the mirror.',
          },
        ]}
      />
    </>
  )
}
