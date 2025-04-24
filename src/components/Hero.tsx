import { CaretDoubleDown } from '@phosphor-icons/react'
import { useRef } from 'react'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  function handleScrollDown() {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight
      window.scrollBy({ top: height, behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className="relative py-10 md:py-16 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10 blur-[2px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mt-56 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-100">
            FURIA
            <span className="font-extrabold text-yellow-500">
              {' '}
              {'<>'}
              {' '}
            </span>
            <span className="font-light">
              bruna
              <span className="font-bold">porato</span>
            </span>
          </h1>

          <p className="text-zinc-500 text-md md:text-lg max-w-2xl leading-tight">
            Onde o código encontra o espírito competitivo da
            {' '}
            <b>FURIA</b>
            {' '}
            — conheça o bot que joga junto com a comunidade.
          </p>

          <button className="mt-10 animate-bounce cursor-pointer" onClick={handleScrollDown}>
            <CaretDoubleDown size={24} weight="bold" className="text-zinc-300" />
          </button>
        </div>
      </div>
    </section>
  )
};
