import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { getAddress } from "viem";
import { erc20Contract } from "@/lib/const/contracts";

const useApprovePaymentToken = () => {
  const {
    data: hashApprove,
    writeContractAsync: writeApproveContract,
   } = useWriteContract()

  const { data: receipt } = useWaitForTransactionReceipt({
    hash: hashApprove,
  })

  const approvePaymentToken = async (token: string, amount: bigint) => {
    await writeApproveContract({
      ...erc20Contract,
      functionName: "approve",
      args: [getAddress(token), amount],
    })
  }

  return {
    approvePaymentToken,
    receipt,
  }
}

export default useApprovePaymentToken
