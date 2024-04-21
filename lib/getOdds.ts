import axios from "axios"

const getOdds = async (fixtureId: string) => {
  try {
    const bookmaker = 8 // Bet 365
    const url = `https://api-football-v1.p.rapidapi.com/v3/odds?fixture=${fixtureId}&bookmaker=${bookmaker}`
    const res = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "4d0108a5a6mshc2e36a7acaf5ecap162acbjsn80103448a735",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    })
    const filteredGame = res.data.response[0].bookmakers[0].bets[0].values
    return filteredGame
  } catch {
    return []
  }
}

export default getOdds