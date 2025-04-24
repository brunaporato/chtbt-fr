import { matchData } from '@/data/matches'
import { MatchCard } from './MatchCard'

export function Matches() {
  return (
    <section id="matches" className="py-6 md:py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-yellow-500">#</span>
          Próximas partidas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchData.map(match => (
            <MatchCard data={match} key={match.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
