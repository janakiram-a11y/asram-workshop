import { MicIcon, FileTextIcon, WrenchIcon } from '../icons'
import { schedule } from '../data/content'

function FormatCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-[#d9e2ec] rounded-[8px] p-5 md:p-[21px] flex flex-col gap-3">
      <div className="bg-[#eaf3ff] rounded-[6px] size-10 flex items-center justify-center text-[#2563eb]">
        {icon}
      </div>
      <h3 className="text-[#17324d] text-[18px] md:text-[22px] font-semibold leading-normal pt-1">{title}</h3>
      <p className="text-[#6a7a8c] text-[15px] md:text-[18px] font-normal leading-normal">{description}</p>
    </div>
  )
}

export default function ProgramSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-[72px] md:scroll-mt-[80px] bg-[#eef2f7] px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">Program Schedule</h2>
          <p className="text-[#17324d] text-[15px] md:text-[20px] font-semibold leading-normal">{schedule.titleLine}</p>
          <p className="text-[#6a7a8c] text-[14px] md:text-[16px] font-medium leading-normal">{schedule.venueLine}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <FormatCard icon={<MicIcon />} title="Lecture Sessions" description={schedule.lecture} />
          <FormatCard icon={<FileTextIcon />} title="Case Discussions" description={schedule.caseDiscussion} />
          <FormatCard icon={<WrenchIcon />} title="Hands-on Workshop" description={schedule.handsOn} />
        </div>

        <div className="bg-white border border-[#d9e2ec] rounded-[8px] py-14 px-6 flex items-center justify-center text-center">
          <p className="text-[#475569] text-[15px] md:text-[16px]">{schedule.timetable}</p>
        </div>
      </div>
    </section>
  )
}
