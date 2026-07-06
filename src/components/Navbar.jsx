import { useState } from 'react'
import { MenuIcon } from '../icons'

const links = [
  { href: '#schedule', label: 'Schedule' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#d9e2ec] h-[64px] md:h-[72px] flex items-center px-4 md:px-[100px] shadow-[0_1px_0_rgba(23,54,93,0.06)]">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-3">
          <a href="#" className="shrink-0">
            <img
              alt="ASRAM"
              className="h-[38px] md:h-[57px] w-auto object-contain"
              src="/assets/workshop-logo.png"
            />
          </a>
          <div className="hidden sm:flex items-center gap-3 md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#191919] text-[16px] md:text-[18px] font-normal hover:text-[#223f7f] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="sm:hidden flex items-center justify-center w-9 h-9 text-[#223f7f]"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-[64px] left-4 right-4 z-[99] rounded-[14px] border border-[#d9e2ec] bg-white p-4 shadow-[0_18px_42px_-24px_rgba(23,54,93,0.3)] transition-all duration-200 sm:hidden ${
          open ? '' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#191919] text-[16px] py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
