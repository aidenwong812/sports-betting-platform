import { Address, Chain } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { bettingContract } from "@/lib/const/contracts";

const usePlaceBet = ({ chainId, bets, account }: { chainId: Chain['id'], bets: [bigint, number, number, bigint], account?: Address }) => {
  const {
    writeContractAsync,
    data: transactionHash,
    isPending: isLoadingWrite,
    isError: isErrorWrite,
    error: errorWrite,
  } = useWriteContract()

  const {
    isFetching: isFetchingReceipt,
    isLoading: isLoadingReceipt,
    data: receipt,
    isFetched,
    isSuccess,
    isError: isErrorReceipt,
    error: errorTransaction,
  } = useWaitForTransactionReceipt({
    hash: transactionHash,
    confirmations: 2,
    chainId,
    query: {
      enabled: !!account,
    },
  })

  const placeBet = async () => {
    if (!!account) {
      try {
        return await writeContractAsync({
          ...bettingContract,
          functionName: "placeBet",
          args: bets,
        })
      } catch (e) {
        console.log(e)
        // onError?.(errorWrite instanceof Error ? errorWrite : new Error('Something went wrong'))
      }
    }
    return
  }

  const isLoading = isLoadingReceipt || isLoadingWrite || isFetchingReceipt
  const isError = isErrorWrite || isErrorReceipt
  const error = errorWrite || errorTransaction

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    placeBet
  }
}

export default usePlaceBet
