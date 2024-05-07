import { useState } from "react"
import { Fixture, Odds } from "@/lib/types/fixture"

const useBettingData = () => {
  const [betType, setBetType] = useState("single")
  const [selectedFixture, setSelectedFixture] = useState<Fixture>(null)
  const [selectedOdd, setSelectedOdd] = useState<Odds[]>(null)

  return {
    betType,
    setBetType,
    selectedFixture,
    setSelectedFixture,
    selectedOdd,
    setSelectedOdd,
  }
}

export default useBettingData
