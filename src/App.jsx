import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCard from './components/InfoCard'
import StatBar from './components/StatBar'
import WhyAttend from './components/WhyAttend'
import ProgramSchedule from './components/ProgramSchedule'
import Speakers from './components/Speakers'
import Patrons from './components/Patrons'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function App() {
  return (
    <div className="font-montserrat bg-[#f8fafd] min-h-screen antialiased">
      <Navbar />
      <main className="pt-[64px] md:pt-[72px]">
        <Hero />
        <InfoCard />
        <StatBar />
        <WhyAttend />
        <ProgramSchedule />
        <Speakers />
        <Patrons />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  )
}
