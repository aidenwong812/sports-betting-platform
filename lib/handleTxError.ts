import { toast } from "react-toastify"

const handleTxError = (error: any) => {
  const primaryError = error?.reason || error?.data?.message
  const nestedError = error?.error?.message
  const fallbackError = error.message

  const toastMessage = primaryError || nestedError || fallbackError
  toast.error(toastMessage)
  return toastMessage
}

export default handleTxError
