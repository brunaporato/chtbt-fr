import { useMobile } from '@/hooks/useMobile'
import { ChatCircleDots } from '@phosphor-icons/react'
import furiaLogo from '@/assets/furia-logo2.svg'

export function Header() {
  const isMobile = useMobile()

  return (
    <header className="py-5 px-4 flex justify-between items-center sticky top-0 border-b border-b-slate-100">
      {isMobile && (
        <button type="button" className="md:hidden cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3.75H12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 9H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 14.25H9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
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
