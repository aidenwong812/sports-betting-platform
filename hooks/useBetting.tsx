import { useState } from "react"
import { Fixture, Odds } from "@/lib/types/fixture"

const useBettingData = () => {
  const [betAmount, setBetAmount] = useState(0)
  const [betType, setBetType] = useState("single")
  const [selectedFixture, setSelectedFixture] = useState<Fixture>({} as Fixture)
  const [selectedOdd, setSelectedOdd] = useState<Odds[]>([])

  return {
    betType,
    setBetType,
    betAmount,
    setBetAmount,
    selectedFixture,
    setSelectedFixture,
    selectedOdd,
    setSelectedOdd,
  }
}

export default useBettingData
