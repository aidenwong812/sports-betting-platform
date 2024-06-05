import { useEffect } from "react";
import { useAccount, useReadContracts } from "wagmi";
import { sepolia } from "viem/chains";
import { getAddress, parseUnits } from "viem";
import { toast } from "react-toastify";
import { erc20Contract } from "@/lib/const/contracts";
import saveFixture from "@/lib/api/saveFixture";
import { useBet } from "@/provider/BetProvider";
import usePlaceBet from "./usePlaceBet";
import useApprovePaymentToken from "./useApprovePaymentToken";

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

  const { approvePaymentToken, isApproveFetched, isLoading: approveLoading, approveReceipt } = useApprovePaymentToken({
    chainId,
    contractToApprove: getAddress("0x45986706d9F3d1d8DfBbAf44f3ABcc7724FA3D43"),
    approveAmount: parseUnits((betAmount || 0).toString(), decimalData || 18)
  })

  const { placeBet, isLoading: betLoading, isBetFetched, betReceipt } = usePlaceBet({
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

  useEffect(() => {
    if (isApproveFetched && !!approveReceipt) {
      switch (approveReceipt.status) {
        case 'success': {
          placeBet()
          toast.success("Payment token approved")
          // onSuccess?.(receipt);
          // onSettled?.(receipt, error);
          break;
        }
        case 'reverted': {
          // onSettled?.(receipt, error);
          break;
        }
      }
    }
  }, [isApproveFetched, approveReceipt])

  useEffect(() => {
    if (isBetFetched && !!betReceipt) {
      switch (betReceipt.status) {
        case 'success': {
          saveFixture(selectedFixture!)
          toast.success("Bet placed")
          // onSuccess?.(receipt);
          // onSettled?.(receipt, error);
          break;
        }
        case 'reverted': {
          // onSettled?.(receipt, error);
          break;
        }
      }
    }
  }, [isBetFetched, betReceipt])

  return {
    account,
    isConnected,
    approvePaymentToken,
    approveLoading,
    betLoading,
    walletBalance: balanceData,
    decimalData,
    approveReceipt,
  }
}

export default useContract
