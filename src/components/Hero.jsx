import { hero } from '../data/content'

export default function Hero() {
  return (
    <section className="relative min-h-[420px] md:min-h-[608px] flex items-center overflow-hidden bg-[#17365d]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(112.38deg, rgba(31,77,150,0.96) 0.37%, rgba(31,77,150,0.88) 24.28%, rgba(31,77,150,0.46) 52.18%, rgba(18,48,75,0.12) 100%)',
        }}
      />
      <div className="relative z-10 w-full px-4 md:px-[100px] pt-14 pb-16 md:pt-16 md:pb-24">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-4 md:gap-6">
          <span className="flex items-center gap-2 self-start bg-white/[0.14] border border-white/[0.22] rounded-full px-[15px] py-[7px]">
            <span className="size-2 rounded-[4px] bg-[#49c07e] shadow-[0_0_0_2px_rgba(73,192,126,0.24)]" />
            <span className="text-white text-[13px] md:text-[14px] font-semibold leading-[20.8px]">
              {hero.badge}
            </span>
          </span>
          <h1 className="text-white text-[30px] sm:text-[42px] md:text-[60px] font-extrabold leading-tight md:leading-normal">
            {hero.title}
          </h1>
          <p className="text-white/[0.88] text-[14px] md:text-[17px] font-normal leading-normal max-w-[560px]">
            {hero.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}
