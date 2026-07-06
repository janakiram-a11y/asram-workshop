import { useEffect, useRef, useState } from 'react'
import { ChevronUpIcon } from '../icons'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
      btnRef.current?.style.setProperty('--progress', `${pct}%`)
      setVisible(scrollTop > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-[999] transition-all duration-300 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <div
        ref={btnRef}
        id="scrollTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative flex items-center justify-center rounded-full cursor-pointer shadow-lg"
        style={{ width: 40, height: 40 }}
      >
        <span className="absolute inset-[3px] rounded-full flex items-center justify-center">
          <ChevronUpIcon />
        </span>
      </div>
    </div>
  )
}
