import { speakers } from '../data/content'
import SpeakerCard from './SpeakerCard'

// Rotating name-accent palette matching the reference (red, amber, cyan, blue).
const ACCENT_COLORS = ['#dc2626', '#ca8a04', '#0a7fd1', '#2563eb']

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="scroll-mt-[72px] md:scroll-mt-[80px] bg-white px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">Speakers</h2>
          <p className="text-[#6b7885] text-[15px] md:text-[22px] font-medium leading-normal">{speakers.intro}</p>
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          {speakers.list.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} accentColor={ACCENT_COLORS[index % ACCENT_COLORS.length]} />
          ))}
        </div>
      </div>
    </section>
  )
}
