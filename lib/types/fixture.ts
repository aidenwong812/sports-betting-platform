export type Fixture = {
  fixture: {
    date: string,
    id: string
  },
  league: {
    logo: string,
    name: string,
  }
  teams: {
    away: {
      id: string,
      logo: string,
      name: string,
    },
    home: {
      id: string,
      logo: string,
      name: string,
    }
  }
}

export type Odds = {
  value: string,
  odd: string,
}