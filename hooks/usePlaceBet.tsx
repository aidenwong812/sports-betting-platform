import { Address, Chain } from "viem";
import { useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { bettingContract } from "@/lib/const/contracts";

const usePlaceBet = ({ chainId, bets, account }: { chainId: Chain['id'], bets: [bigint, number, number, bigint], account?: Address }) => {
  const {
    data: config,
    refetch,
    isLoading: isLoadingPrepare,
    isError: isErrorPrepare,
    error: errorPrepare,
  } = useSimulateContract({
    chainId,
    ...bettingContract,
    functionName: "placeBet",
    args: bets,
    query: { enabled: !!account },
  });

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
    data: betReceipt,
    isFetched: isBetFetched,
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
    if (config && !!account) {
      try {
        await writeContractAsync(config.request)
      } catch (e) {
        console.log(e)
        // onError?.(errorWrite instanceof Error ? errorWrite : new Error('Something went wrong'))
      }
    }
    return
  }

  const isLoading = isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt
  const isError = isErrorWrite || isErrorReceipt || isErrorPrepare
  const error = errorWrite || errorTransaction || errorPrepare

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    isBetFetched,
    betReceipt,
    placeBet,
  }
}

export default usePlaceBet
