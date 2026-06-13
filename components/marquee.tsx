const items = [
  'Medical Weight Loss',
  'GLP-1 Therapy',
  'NAD+ Injections',
  'Sermorelin',
  'Jeuveau',
  'Dysport',
  'Botox',
  'Xeomin',
  'Longevity Care',
  'Styku 3D Scanning',
]

export function Marquee() {
  return (
    <section
      aria-label="Services offered"
      className="relative overflow-hidden border-y border-border bg-card/30 py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </section>
  )
}
