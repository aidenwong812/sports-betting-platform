import axios from "axios"
import { leagues } from "./const/leagues"

const getFixtures = async (date: string) => {
  try {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`
    const res = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "4d0108a5a6mshc2e36a7acaf5ecap162acbjsn80103448a735",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    })
    const filteredGame = res.data.response
      .filter((item: any) => leagues.includes(item.league.id))
      .sort((a: any, b: any) => a.league.id - b.league.id)
    return filteredGame
  } catch {
    return []
  }
}

export default getFixtures