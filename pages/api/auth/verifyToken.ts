import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body

    const decode = await jwt.verify(token, process.env.TOKEN_SECRET!) as any
    
    if (decode.exp * 1000 > Date.now()) {
      return res.status(200).json({
        res: "success",
        token,
      })
    }
    return res.status(200).json({
      res: "expired",
      token,
    })
  }
}