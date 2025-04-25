import { useMobile } from '@/hooks/useMobile'
import { ChatCircleDots, X } from '@phosphor-icons/react'
import furiaLogo from '@/assets/furia-logo2.svg'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  function handleCloseMenu(link?: string) {
    if (link) {
      const element = document.getElementById(link) as HTMLElement
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="py-5 px-4 md:py-6 md:px-10 flex justify-between items-center sticky top-0 border-b bg-zinc-50 border-b-slate-200 z-20">
        {isMobile
          ? (
              <button type="button" className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3.75H12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 9H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 14.25H9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            )
          : (
              <nav>
                <ul className="flex gap-3 items-center">
                  <li>
                    <a href="#matches" className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200 text-sm">
                      PARTIDAS
                    </a>
                  </li>
                  <div className="w-px h-3 bg-zinc-400" />
                  <li>
                    <a href="#chatbot" className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200 text-sm">
                      CHATBOT
                    </a>
                  </li>
                </ul>
              </nav>
            )}

        <a href="/">
          <img src={furiaLogo} alt="Furia" />
        </a>

        <a href="#chatbot">
          <ChatCircleDots size={24} />
        </a>
      </header>

      <nav className={`fixed inset-0 z-20 ${isMenuOpen ? 'bg-zinc-800/85' : 'bg-transparent pointer-events-none'} transition-colors duration-300 ease-in-out`}>

        <ul className={`bg-zinc-50 px-8 py-6 max-w-2/3 w-full min-h-screen absolute top-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button className="cursor-pointer absolute top-4 right-4" onClick={() => handleCloseMenu()}>
            <X size={24} />
          </button>
          <button className="w-fit mb-8 cursor-pointer" onClick={() => handleCloseMenu()}>
            <img src={furiaLogo} alt="Furia" />
          </button>
          <li className="border-b border-zinc-200 py-3 w-full">
            <button className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200 text-sm flex w-full" onClick={() => handleCloseMenu('matches')}>
              PARTIDAS
            </button>
          </li>
          <li className="py-3 w-full">
            <button className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200 text-sm flex w-full" onClick={() => handleCloseMenu('chatbot')}>
              CHATBOT
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
