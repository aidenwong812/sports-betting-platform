import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongodb"

const bcrypt = require('bcrypt');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const client = await clientPromise
    const db = client.db("sports-betting")
    const { email, password } = req.body

    const user = await db.collection("users").findOne({
      email: email
    })

    if (!user) {
      return res.status(200).json({
        res: "fail",
        error: "User does not exist. Please Register account first."
      })
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(200).json({
        res: "fail",
        error: "Wrong password"
      })
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

    return res.status(200).json({
      res: "success",
      token,
    })

  }
}