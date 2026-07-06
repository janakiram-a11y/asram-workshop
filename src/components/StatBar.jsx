import { AwardIcon, LaptopIcon } from '../icons'
import { statBar } from '../data/content'

export default function StatBar() {
  return (
    <div className="border-b border-[#e2e8f0] bg-white px-4 pb-8 pt-6 sm:px-8 md:px-[120px] md:pb-10 md:pt-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-4 md:flex-row md:gap-5">

        <div className="flex min-h-0 min-w-0 flex-1 items-center gap-4 rounded-[10px] bg-[#223f7f] px-6 py-5 md:gap-5 md:px-8">
          <div className="bg-white rounded-[8px] w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex flex-col items-center justify-center shrink-0">
            <AwardIcon />
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="text-white text-[18px] md:text-[21px] font-bold leading-normal">{statBar.credit.title}</p>
            <p className="text-white/[0.75] text-[14px] md:text-[15px] font-medium leading-normal">{statBar.credit.caption}</p>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 items-center gap-4 rounded-[10px] border border-[#f59e0b] bg-[#fffbeb] px-6 py-5 md:gap-5 md:px-8">
          <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-[8px] w-[48px] h-[48px] md:w-[52px] md:h-[52px] flex items-center justify-center shrink-0">
            <LaptopIcon stroke="#d97706" />
          </div>
          <p className="text-[#78350f] text-[14px] md:text-[16px] font-normal leading-normal">{statBar.notice}</p>
        </div>

      </div>
    </div>
  )
}
