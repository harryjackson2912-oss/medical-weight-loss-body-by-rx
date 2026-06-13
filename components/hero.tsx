'use client'

import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Animated aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full aurora opacity-70" />
        <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute left-[6%] bottom-[12%] h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        <div className="absolute inset-0 grid-fade" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Medical Spa · Gilbert, AZ
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 font-heading text-5xl font-light leading-[1.02] tracking-tight text-balance text-foreground sm:text-7xl lg:text-8xl">
              Care that&apos;s built
              <br />
              around <span className="shimmer-text font-medium">your life</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
              Clinician-guided medical weight loss, longevity support, and
              medical-grade aesthetics — under one focused, patient-first
              practice. We listen before we prescribe and stay by your side long
              after the first appointment.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:480-603-8388"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/60 transition-all hover:shadow-[0_0_60px_-4px] hover:shadow-primary/70"
              >
                <span className="absolute inset-0 -translate-x-full bg-accent/40 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Schedule a Free Consultation</span>
              </a>
              <a
                href="https://bodybyrx.com/"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                Explore Our Care
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                { k: 'Patient-First', v: 'Every plan' },
                { k: 'Weekly', v: 'Concierge check-ins' },
                { k: '3D Styku', v: 'Body scanning' },
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <dt className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
