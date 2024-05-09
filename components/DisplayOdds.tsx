import { useEffect, useState } from "react"
import getOdds from "@/lib/getOdds"
import { Fixture, Odds } from "@/lib/types/fixture"
import { useBet } from "@/provider/BetProvider"

const DisplayOdds = ({ fixture }: { fixture: Fixture }) => {
  const { betType, selectedFixture, setSelectedFixture, setSelectedOdd } = useBet()
  const [odds, setOdds] = useState<Odds[]>([])

  useEffect(() => {
    if (fixture) {
      getOdds(fixture.fixture.id).then(res => setOdds(res))
    }
  }, [])

  const handleOddClick = (id: number) => {
    setSelectedFixture(fixture)
    if (fixture !== selectedFixture || betType === 'single') {
      setSelectedOdd([odds[id]])
    } else {
      setSelectedOdd((prevSelectedOdd: Odds[]) => {
        const newOdd = odds[id]
        if (newOdd.value === 'Home' || newOdd.value === 'Away') {
          const sameValueOddIndex = prevSelectedOdd.findIndex(
            odd => odd.value === 'Home' || odd.value === 'Away'
          )
          if (sameValueOddIndex !== -1) {
            const newSelectedOdd = [
              ...prevSelectedOdd.slice(0, sameValueOddIndex),
              ...prevSelectedOdd.slice(sameValueOddIndex + 1),
              newOdd,
            ]
            return newSelectedOdd
          }
        }
        if (prevSelectedOdd[prevSelectedOdd.length - 1] === newOdd) {
          return prevSelectedOdd
        } else if (prevSelectedOdd.length >= 2) {
          const newSelectedOdd = [...prevSelectedOdd.slice(1), newOdd]
          return newSelectedOdd
        } else {
          return [...prevSelectedOdd, newOdd]
        }
      })
    }
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