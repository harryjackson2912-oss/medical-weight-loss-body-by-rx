import Image from 'next/image'
import { Reveal } from './reveal'

export function ConsultCta() {
  return (
    <section id="consult" className="relative scroll-mt-24 px-6 py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/50 px-8 py-20 text-center backdrop-blur-sm sm:px-16">
        {/* glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full aurora opacity-60" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
          <div className="absolute inset-0 grid-fade" />
        </div>

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Now Accepting New Patients
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-heading text-4xl font-light leading-tight text-balance text-foreground sm:text-6xl">
            A body and a life that
            <br />
            actually <span className="shimmer-text font-medium">feel like yours</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            You don&apos;t need another plan that disappears when life gets hard.
            You need a system, a team, and a strategy built to last. Take the
            first step today.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10">
            <a
              href="tel:480-603-8388"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_50px_-8px] shadow-primary/60 transition-all hover:shadow-[0_0_70px_-4px] hover:shadow-primary/70"
            >
              <span className="absolute inset-0 -translate-x-full bg-accent/40 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Schedule Your Free Consultation</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Visit Us
            </p>
            <h2 className="mt-4 font-heading text-3xl font-light leading-tight text-balance text-foreground sm:text-4xl">
              Conveniently located in the heart of Gilbert
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
              Find us in the East Valley, where personalized, clinician-led care
              is always just around the corner. Stop in to start your journey.
            </p>
            <div className="mt-8 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">
                Body by Rx — Medical Spa Gilbert, AZ
              </p>
              <p>
                <a
                  href="https://maps.app.goo.gl/Kwc5pPZVtaaYYEHr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  4936 S Power Rd Suite 108, Mesa, AZ 85212
                </a>
              </p>
              <p>
                <a
                  href="tel:480-603-8388"
                  className="transition-colors hover:text-primary"
                >
                  📞 480-603-8388
                </a>
              </p>
              <p>
                <a
                  href="mailto:Robert.Porter@bodybyrx.com"
                  className="transition-colors hover:text-primary"
                >
                  📧 Robert.Porter@bodybyrx.com
                </a>
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-1.5 shadow-[0_0_60px_-20px] shadow-primary/40">
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60" />
            <iframe
              title="Body by Rx location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11129.716748825105!2d-111.689813!3d33.326498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bad370a85a3af%3A0xc2e3cea83eea4fd0!2sBodybyrx!5e1!3m2!1sen!2sus!4v1781376176712!5m2!1sen!2sus"
              className="h-[320px] w-full rounded-xl border-0 grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 sm:h-[380px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-background p-1.5 ring-1 ring-primary/30">
            <Image
              src="/images/body-by-rx-logo.webp"
              alt="Body by Rx logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base font-semibold text-foreground">
              Body by Rx
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Medical Spa · Gilbert, AZ
            </span>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground sm:text-right">
          Serving Gilbert &amp; the East Valley
          <br />
          <span className="text-muted-foreground/70">
            © {new Date().getFullYear()} Body by Rx. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  )
}
