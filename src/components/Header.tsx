import { useMobile } from '@/hooks/useMobile'
import { ChatCircleDots } from '@phosphor-icons/react'
import furiaLogo from '@/assets/furia-logo2.svg'

export function Header() {
  const isMobile = useMobile()

  return (
    <header className="py-5 px-4 md:py-6 md:px-10 flex justify-between items-center sticky top-0 border-b bg-zinc-50 border-b-slate-200 z-20">
      {isMobile
        ? (
            <button type="button" className="md:hidden cursor-pointer">
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
  )
}
