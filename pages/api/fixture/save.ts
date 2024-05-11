import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const client = await clientPromise
      const db = client.db("sports-betting")
      const { fixtureId, fixtureDate, league, homeTeam, awayTeam, homeTeamName, awayTeamName } = req.body

      const fixture = await db.collection("fixtures").findOne({
        fixtureId: fixtureId,
      })

      if (fixture) {
        return res.status(200).json({
          res: "fail",
          error: "Fixture already exist"
        })
      }

      await db.collection("fixtures").insertOne({
        fixtureId,
        fixtureDate,
        league,
        homeTeam,
        awayTeam,
        homeTeamName,
        awayTeamName,
        finished: false,
      })

      return res.status(200).json({
        res: "success"
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(200).json({
      res: "fail",
      error: err,
    })
  }
}