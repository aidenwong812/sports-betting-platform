import useBettingData from "@/hooks/useBetting"
import { createContext, useContext, useMemo } from "react"

const BetContext = createContext<any>(null)

const BetProvider = ({ children }: { children: React.ReactNode }) => {
  const betData = useBettingData()

  const value = useMemo(
    () => ({
      ...betData,
    }),
    [betData],
  )

  return <BetContext.Provider value={value}>{children}</BetContext.Provider>
}

export const useBet = () => {
  const context = useContext(BetContext)
  if (!context) {
    throw new Error("useBet must be used within a BetProvider")
  }
  return context
}

export default BetProvider
