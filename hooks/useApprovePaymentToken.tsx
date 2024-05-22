import { Address, Chain } from "viem";
import { useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { erc20Contract } from "@/lib/const/contracts";

const useApprovePaymentToken = ({ chainId, contractToApprove, approveAmount }: { chainId: Chain['id'], contractToApprove: Address, approveAmount: bigint }) => {
  const {
    data: config,
    isLoading: isLoadingPrepare,
    isError: isErrorPrepare,
    error: errorPrepare,
    refetch,
  } = useSimulateContract({
    ...erc20Contract,
    chainId,
    args: [contractToApprove, approveAmount],
    functionName: 'approve',
  })

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
    data: approveReceipt,
    isFetched: isApproveFetched,
    isSuccess,
    isError: isErrorReceipt,
    error: errorTransaction,
  } = useWaitForTransactionReceipt({
    chainId,
    hash: transactionHash,
  })

  const approvePaymentToken = async () => {
    if (config) {
      await writeContractAsync(config.request)
    }
  }

  const isLoading = isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt
  const isError = isErrorWrite || isErrorReceipt || isErrorPrepare
  const error = errorWrite || errorTransaction || errorPrepare

  return {
    approvePaymentToken,
    isApproveFetched,
    approveReceipt,
    errorTransaction,
    isLoading,
    isError,
    error,
  }
}

export default useApprovePaymentToken
