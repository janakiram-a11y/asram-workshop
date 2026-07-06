import { patrons } from '../data/content'
import PatronPanel from './PatronPanel'

export default function Patrons() {
  return (
    <section className="bg-[#eef2f7] border-t border-[#f1f5f9] px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[24px] md:text-[42px] font-bold leading-normal">
            Chief Patrons &amp; Guests of Honour
          </h2>
          <p className="text-[#475569] text-[16px] md:text-[18px]">{patrons.intro}</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-[18px]">
          <PatronPanel title="Chief Patrons" gridClassName="grid-cols-2 sm:grid-cols-4" people={patrons.chiefPatrons} />
          <PatronPanel title="Guests of Honour" gridClassName="grid-cols-2 sm:grid-cols-3" people={patrons.guestsOfHonour} />
        </div>
      </div>
    </section>
  )
}
