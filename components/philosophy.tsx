import { Reveal } from './reveal'

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Our Philosophy
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-heading text-3xl font-light leading-snug text-balance text-foreground sm:text-5xl">
            Weight loss isn&apos;t a willpower problem. It&apos;s a
            <span className="text-primary"> systems problem</span>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            No loud promises. No one-size-fits-all plans. We measure before we
            assume and design for real life — late meetings, weekend travel, and
            the random Tuesday when the motivation is completely gone. Just
            honest, measurable care built to last.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
