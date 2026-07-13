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

// Colored full-width divider rows for breaks/ceremonial slots (Inauguration,
// Tea Break, Lunch Break, Valedictory, etc.), matching the reference table design.
const BANNER_STYLES = {
  amber: { bg: '#fdf3d9', text: '#92400e' },
  green: { bg: '#e6f4ea', text: '#166534' },
  red: { bg: '#fde8e8', text: '#991b1b' },
}

function BannerRow({ label, variant = 'amber' }) {
  const style = BANNER_STYLES[variant] || BANNER_STYLES.amber
  return (
    <div
      className="px-4 md:px-6 py-3 text-center text-[13px] md:text-[14px] font-semibold leading-normal"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {label}
    </div>
  )
}

const GRID_COLS = 'grid-cols-[100px_2fr_1.3fr_1.7fr]'

function ScheduleTableRow({ time, session, title, speaker, designation, focus, isLast }) {
  return (
    <div
      className={`hidden md:grid ${GRID_COLS} gap-4 px-6 py-5 border-b border-[#eef2f7] ${isLast ? 'last:border-b-0' : ''}`}
    >
      <p className="text-[#2563eb] text-[13px] font-semibold leading-snug whitespace-pre-line">{time}</p>
      <div className="flex flex-col gap-1">
        {title && <h4 className="text-[#17324d] text-[15px] font-semibold leading-snug">{title}</h4>}
        {session && <p className="text-[#6a7a8c] text-[12px] italic leading-normal">{session}</p>}
      </div>
      <div className="flex flex-col gap-0.5">
        {speaker && <p className="text-[#2563eb] text-[13px] font-semibold leading-snug">{speaker}</p>}
        {designation && <p className="text-[#6a7a8c] text-[12px] leading-normal">{designation}</p>}
      </div>
      <p className="text-[#475569] text-[13px] leading-relaxed">{focus}</p>
    </div>
  )
}

function ScheduleCardRow({ time, session, title, speaker, designation, focus }) {
  return (
    <div className="md:hidden flex flex-col gap-1.5 px-5 py-4 border-b border-[#eef2f7] last:border-b-0">
      <div className="flex flex-wrap items-center gap-2">
        {time && <span className="text-[#2563eb] text-[13px] font-semibold leading-normal">{time}</span>}
        {session && (
          <span className="bg-[#eaf3ff] text-[#2563eb] text-[11px] font-semibold leading-normal px-2 py-0.5 rounded-[4px]">
            {session}
          </span>
        )}
      </div>
      {title && <h4 className="text-[#17324d] text-[16px] font-semibold leading-snug">{title}</h4>}
      {speaker && (
        <p className="text-[#223f7f] text-[14px] font-semibold leading-normal">
          {speaker}
          {designation ? ` — ${designation}` : ''}
        </p>
      )}
      {focus && <p className="text-[#6a7a8c] text-[13px] font-normal leading-normal">{focus}</p>}
    </div>
  )
}

function ScheduleTable({ sessions }) {
  return (
    <div className="bg-white border border-[#d9e2ec] rounded-[8px] overflow-hidden">
      <div className={`hidden md:grid ${GRID_COLS} gap-4 px-6 py-3 bg-[#eef2f7] border-b border-[#d9e2ec]`}>
        <p className="text-[#334155] text-[13px] font-semibold leading-normal">Time</p>
        <p className="text-[#334155] text-[13px] font-semibold leading-normal">Session Title</p>
        <p className="text-[#334155] text-[13px] font-semibold leading-normal">Speaker / Faculty</p>
        <p className="text-[#334155] text-[13px] font-semibold leading-normal">Learning Objectives</p>
      </div>
      <div className="flex flex-col">
        {sessions.map((item, index) =>
          item.type === 'banner' ? (
            <BannerRow key={index} label={item.label} variant={item.variant} />
          ) : (
            <div key={index} className="contents">
              <ScheduleTableRow {...item} isLast={index === sessions.length - 1} />
              <ScheduleCardRow {...item} />
            </div>
          )
        )}
      </div>
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

        <ScheduleTable sessions={schedule.sessions} />
      </div>
    </section>
  )
}
