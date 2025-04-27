import type { MatchProps } from '@/types/match'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface MatchCardProps {
  data: MatchProps
}

export function MatchCard({ data }: MatchCardProps) {
  const formattedDate = format(data.date, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })
  const formattedTime = format(data.date, 'HH:mm')

  return (
    <div className="border border-zinc-200 bg-zinc-800 rounded-xl relative overflow-hidden">
      {data.isLive && (
        <div className="flex items-center gap-2 absolute top-2 right-2 bg-zinc-900/90 py-1 px-2 rounded border border-zinc-700 backdrop-blur-xs">
          <div className="relative inline-block">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-1/2" />
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping block" />
          </div>
          <span className="text-xs font-semibold text-zinc-100 tracking-wider">LIVE</span>
        </div>
      )}

      <div className="opacity-30 max-h-48 xl:max-h-72 overflow-hidden">
        <img src={data.image} alt="Imagem de divulgação" />
      </div>

      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-50 shadow text-zinc-900 font-bold text-xs">
            <img src="/furia-logo.png" alt="Furia" className="w-8 h-8" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-zinc-100 font-bold">VS</span>
          </div>
          <div className="w-12 h-12 rounded-full flex items-center shadow justify-center bg-zinc-600 text-zinc-100 font-bold text-xs">
            {data.opponentLogo}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-zinc-100 font-bold mb-">
            FURIA vs
            {' '}
            {data.opponent}
          </h3>
          <p className="text-yellow-500 text-sm">{data.tournament}</p>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>

        <button className="mt-4 cursor-pointer tracking-wider w-full bg-zinc-900 hover:bg-zinc-900/80 text-zinc-50 py-2 rounded text-sm transition-colors duration-200">
          {data.isLive ? 'ASSITIR LIVE' : 'ME AVISAR'}
        </button>
      </div>
    </div>
  )
}
