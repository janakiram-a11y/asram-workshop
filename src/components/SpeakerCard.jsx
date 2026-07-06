import { UserIcon } from '../icons'

export default function SpeakerCard({ name, credentials, position, institution, achievements, accentColor }) {
  return (
    <div className="bg-white border border-black/[0.16] rounded-[12px] overflow-hidden flex flex-col md:flex-row w-full">
      <div className="bg-[#eef2f7] border-b md:border-b-0 md:border-r border-black/[0.08] w-full md:w-[280px] shrink-0 flex flex-col items-center justify-center gap-2 px-3 py-6 md:py-3">
        <div className="size-[140px] md:size-[180px] rounded-full border-4 border-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] overflow-hidden bg-[#dde6f5] flex items-center justify-center text-[#223f7f]">
          <UserIcon size={56} />
        </div>
        <p className="text-[18px] md:text-[20px] font-bold text-center leading-normal mt-1" style={{ color: accentColor }}>
          {name}
        </p>
        <p className="text-[13px] md:text-[14px] font-normal text-[#0f172a] text-center leading-normal max-w-[255px]">
          {credentials}
        </p>
        <p className="text-[13px] md:text-[14px] font-bold text-[#0f172a] text-center leading-normal">{position}</p>
        <p className="text-[13px] md:text-[14px] font-normal text-[#0f172a] text-center leading-normal">{institution}</p>
      </div>
      <div className="flex-1 p-5 md:p-6">
        <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 text-[15px] md:text-[18px] text-[#191919]">
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
