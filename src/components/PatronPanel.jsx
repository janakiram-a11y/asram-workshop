import { UserIcon, UsersIcon } from '../icons'

function PatronAvatar({ name, role, photo }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="size-[100px] md:size-[112px] rounded-full overflow-hidden border-[3px] border-[#223f7f]/20 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] shrink-0 bg-[#dde6f5] flex items-center justify-center text-[#223f7f]">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <UserIcon size={40} />
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[#17365d] text-[14px] font-semibold">{name}</span>
        <span className="text-[#475569] text-[12px]">{role}</span>
      </div>
    </div>
  )
}

export default function PatronPanel({ title, gridClassName, people }) {
  return (
    <div className="bg-white border border-[#e1e1e1] rounded-[10px] p-5 md:p-8 flex flex-col gap-5">
      <div className="flex items-center gap-2 pb-4 border-b border-[#f1f5f9]">
        <UsersIcon />
        <h3 className="text-[#17365d] text-[18px] font-semibold">{title}</h3>
      </div>
      <div className={`grid ${gridClassName} gap-x-6 gap-y-6 md:gap-y-8`}>
        {people.map((person, index) => (
          <PatronAvatar key={index} {...person} />
        ))}
      </div>
    </div>
  )
}
