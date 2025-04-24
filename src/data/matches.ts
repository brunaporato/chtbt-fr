import type { MatchProps } from '@/types/match'

export const matchData: MatchProps[] = [
  {
    id: 1,
    opponent: 'Natus Vincere',
    opponentLogo: 'NAVI',
    date: new Date('2025-04-25T18:00:00+02:00'), // 18:00 CEST
    tournament: 'ESL Pro League',
    isLive: true,
    image: 'https://www.ndgames.com.br/wp-content/uploads/2025/02/chelo-furia-mobile.webp',
  },
  {
    id: 2,
    opponent: 'Team Liquid',
    opponentLogo: 'TL',
    date: new Date('2025-04-27T20:30:00+02:00'), // 20:30 CEST
    tournament: 'BLAST Premier',
    isLive: false,
    image: 'https://arena.rtp.pt/wp-content/uploads/2025/03/FURIA_FalleN_EPL_21-860x507-1.jpg',
  },
  {
    id: 3,
    opponent: 'FaZe Clan',
    opponentLogo: 'FAZE',
    date: new Date('2025-05-02T16:00:00+02:00'),
    tournament: 'ESL Pro League',
    isLive: false,
    image: 'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/07/19/4474041-1827553810.jpg?itok=ow9gzcpb',
  },
  {
    id: 4,
    opponent: 'G2 Esports',
    opponentLogo: 'G2',
    date: new Date('2025-05-05T19:00:00+02:00'),
    tournament: 'IEM Cologne',
    isLive: false,
    image: 'https://www.ndgames.com.br/wp-content/uploads/2025/02/chelo-furia-mobile.webp',
  },
  {
    id: 5,
    opponent: 'Heroic',
    opponentLogo: 'HEROIC',
    date: new Date('2025-05-10T21:00:00+02:00'),
    tournament: 'ESL Pro League',
    isLive: false,
    image: 'https://arena.rtp.pt/wp-content/uploads/2025/03/FURIA_FalleN_EPL_21-860x507-1.jpg',
  },
  {
    id: 6,
    opponent: 'Cloud9',
    opponentLogo: 'C9',
    date: new Date('2025-05-15T18:00:00+02:00'),
    tournament: 'BLAST Premier',
    isLive: false,
    image: 'https://www.ndgames.com.br/wp-content/uploads/2025/02/chelo-furia-mobile.webp',
  },
]
