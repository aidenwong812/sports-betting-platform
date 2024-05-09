import { createContext, useContext, useMemo } from "react"
import { useChainId } from "wagmi";
import useContract from "@/hooks/useContract";
import useApprovePaymentToken from "@/hooks/useApprovePaymentToken";

const Web3Context = createContext<any>(null)

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const chainId = useChainId()
  const contract = useContract()
  const { approvePaymentToken, receipt } = useApprovePaymentToken()

  const value = useMemo(
    () => ({
      ...contract,
      chainId,
      approvePaymentToken,
      receipt,
    }),
    [contract, chainId, approvePaymentToken, receipt],
  )

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used within a Web3Provider")
  }
  return context
}

export default Web3Provider
