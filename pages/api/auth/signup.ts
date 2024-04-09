import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb"

const bcrypt = require('bcrypt');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const client = await clientPromise
    const db = client.db("sports-betting")
    const { username, email, password } = req.body

    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await db.collection("users").findOne({
      email: email
    })

    if (user) {
      return res.status(200).json({
        res: "fail",
        error: "User already exist"
      })
    }

    await db.collection("users").insertOne({
      username,
      email,
      password: hashPassword,
    })

    return res.status(200).json({
      res: "success"
    })
  }
}