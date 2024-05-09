import { useAccount, useReadContracts } from "wagmi";
import { sepolia } from "viem/chains";
import { parseUnits } from "viem";
import { erc20Contract } from "@/lib/const/contracts";
import { useBet } from "@/provider/BetProvider";
import usePlaceBet from "./usePlaceBet";

const useContract = () => {
  const chainId = sepolia.id
  const { address: account, isConnected } = useAccount()
  const { betAmount, selectedFixture, selectedOdd } = useBet()

  const {
    data: erc20Data,
    isLoading,
    isSuccess: isSuccessReadContracts,
    isFetching,
    isError,
    refetch,
    queryKey,
  } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        ...erc20Contract,
        functionName: "balanceOf",
        args: [account!],
      },
      {
        ...erc20Contract,
        functionName: "decimals",
      },
    ],
    query: { enabled: isConnected },
  })

  const [balanceData, decimalData] = erc20Data || [];

  const { placeBet, isLoading: loading } = usePlaceBet({
    account,
    bets: [
      BigInt(selectedFixture?.fixture?.id || 0),
      selectedOdd[0]?.value === 'Home'
        ? 0 
        : selectedOdd[0]?.value === 'Away' ? 2 : 1 || 0,
      selectedOdd[0]?.odd * 100 || 0,
      parseUnits((betAmount || 0).toString(), decimalData || 18),
    ],
    chainId,
  })

  return {
    account,
    isConnected,
    placeBet,
    loading,
    walletBalance: balanceData,
    decimalData,
  }
}

export default useContract
