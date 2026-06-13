'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Weight Loss', href: 'https://bodybyrx.com/medical-weight-loss' },
  { label: 'Longevity', href: 'https://bodybyrx.com/weight-loss-and-longevity' },
  { label: 'Aesthetic', href: 'https://bodybyrx.com/aesthetics' },
  { label: 'Why Us', href: 'https://bodybyrx.com/bodybyrx' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="https://bodybyrx.com/" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-background p-1.5 shadow-[0_0_30px_-8px] shadow-primary/50 ring-1 ring-primary/30">
            <span className="absolute inset-0 rounded-xl bg-primary/15 blur-md" />
            <Image
              src="/images/body-by-rx-logo.webp"
              alt="Body by Rx logo"
              width={40}
              height={40}
              priority
              className="relative h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Body by Rx
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Medical Spa
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:480-603-8388"
            className="group relative hidden overflow-hidden rounded-full border border-primary/50 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary-foreground sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative">Free Consultation</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-5 bg-foreground transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`h-px w-5 bg-foreground transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:480-603-8388"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
