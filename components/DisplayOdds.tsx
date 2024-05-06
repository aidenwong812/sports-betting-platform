import { useEffect, useState } from "react"
import getOdds from "@/lib/getOdds"
import { Fixture, Odds } from "@/lib/types/fixture"
import { useBet } from "@/provider/BetProvider"

const DisplayOdds = ({ fixture }: { fixture: Fixture }) => {
  const { setSelectedFixture, setSelectedOdd } = useBet()
  const [odds, setOdds] = useState<Odds[]>([])

  useEffect(() => {
    if (fixture) {
      getOdds(fixture.fixture.id).then(res => setOdds(res))
    }
  }, [])

  const handleOddClick = (id: number) => {
    setSelectedFixture(fixture)
    setSelectedOdd(odds[id])
  }

  return (
    <div className="table-body-right">
      <div className="table-pointing-box" onClick={() => handleOddClick(0)}>
        <span className="list">1</span>
        <span className="list">{odds[0]?.odd}</span>
      </div>
      <div className="table-pointing-box" onClick={() => handleOddClick(1)}>
        <span className="list">X</span>
        <span className="list">{odds[1]?.odd}</span>
      </div>
      <div className="table-pointing-box" onClick={() => handleOddClick(2)}>
        <span className="list">2</span>
        <span className="list">{odds[2]?.odd}</span>
      </div>
    </div>
  )
}

export default DisplayOdds