import getOdds from "@/lib/getOdds"
import { Odds } from "@/lib/types/fixture"
import { useEffect, useState } from "react"

const DisplayOdds = ({ fixtureId }: { fixtureId: string }) => {
  const [odds, setOdds] = useState<Odds[]>([])

   useEffect(() => {
      if (fixtureId) {
         getOdds(fixtureId).then(res => setOdds(res))
      }
   }, [])

  return (
    <div className="table-body-right">
      <div className="table-pointing-box">
        <span className="list">1</span>
        <span className="list">{odds[0]?.odd}</span>
      </div>
      <div className="table-pointing-box">
        <span className="list">X</span>
        <span className="list">{odds[1]?.odd}</span>
      </div>
      <div className="table-pointing-box">
        <span className="list">2</span>
        <span className="list">{odds[2]?.odd}</span>
      </div>
    </div>
  )
}

export default DisplayOdds