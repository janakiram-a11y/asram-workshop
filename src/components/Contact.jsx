import { MailIcon, PhoneIcon, MapPinIcon, UserIcon } from '../icons'
import { contact } from '../data/content'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] md:scroll-mt-[80px] bg-white px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">Contact</h2>
          <p className="text-[#5d7088] text-[15px] md:text-[22px] font-medium leading-normal">{contact.intro}</p>
        </div>

        <div className="bg-[#eef2f7] border border-[#d8e2f0] rounded-[12px] p-5 md:p-8 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <UserIcon size={20} className="text-[#223f7f] shrink-0 mt-1" strokeWidth="2" />
            <div className="text-[#191919] text-[15px] md:text-[18px] leading-normal">
              <p className="font-semibold">{contact.name}</p>
              {contact.titleLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MailIcon className="text-[#223f7f] shrink-0 mt-1" />
            <span className="text-[#223f7f] text-[16px] md:text-[18px] font-semibold hover:underline">
              {contact.email}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <PhoneIcon className="text-[#223f7f] shrink-0 mt-1" />
            <p className="text-[#191919] text-[15px] md:text-[18px] leading-normal font-medium">{contact.phone}</p>
          </div>

          <div className="flex items-start gap-3">
            <MapPinIcon className="text-[#223f7f] shrink-0 mt-1" />
            <p className="text-[#191919] text-[15px] md:text-[18px] leading-normal">{contact.address}</p>
          </div>

          <div className="pt-2">
            <div className="overflow-hidden rounded-[10px] border border-[#d8e2f0] bg-white">
              <iframe
                title="ASRAM Medical College location map"
                className="w-full h-[280px] md:h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src={contact.mapEmbedSrc}
              />
            </div>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-3 text-[#223f7f] text-[13px] md:text-[14px] font-semibold hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
