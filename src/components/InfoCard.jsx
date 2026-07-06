import { CalendarIcon, MapPinIcon, InfoCircleIcon } from '../icons'
import { infoCard } from '../data/content'

function InfoValue({ children }) {
  return (
    <span className="text-[15px] md:text-[18px] font-bold leading-snug text-[#17365d]">{children}</span>
  )
}

function InfoItem({ icon, label, children }) {
  return (
    <div className="flex min-w-0 items-start gap-[18px]">
      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[6px] bg-[#e8eff8] md:size-[52px] text-[#223f7f]">
        {icon}
      </div>
      <div className="flex min-w-0 flex-col gap-[5px] pt-0.5">
        <span className="text-[12px] font-bold uppercase tracking-wide text-[#5d7088] md:text-[14px]">
          {label}
        </span>
        {children}
      </div>
    </div>
  )
}

export default function InfoCard() {
  return (
    <div className="relative z-20 -mt-10 sm:-mt-12 md:-mt-[66px] px-4 sm:px-8 md:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[10px] border border-[#8e8e8e] bg-white shadow-[0_18px_34px_-28px_rgba(23,54,93,0.34)] px-5 py-6 sm:px-7 sm:py-7 md:px-9 md:py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:gap-10">
            <InfoItem icon={<CalendarIcon width={22} height={22} />} label="Date and Timings">
              <InfoValue>{infoCard.date}</InfoValue>
              <InfoValue>{infoCard.timings}</InfoValue>
            </InfoItem>

            <InfoItem icon={<MapPinIcon width={22} height={22} />} label="Venue Location">
              <InfoValue>{infoCard.venueLine1}</InfoValue>
              <InfoValue>{infoCard.venueLine2}</InfoValue>
            </InfoItem>

            <InfoItem icon={<InfoCircleIcon width={22} height={22} />} label="Key Takeaway">
              <InfoValue>{infoCard.keyTakeaway}</InfoValue>
            </InfoItem>
          </div>
        </div>
      </div>
    </div>
  )
}
