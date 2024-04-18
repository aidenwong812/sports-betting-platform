const formatDate = (date: string) => {
  return new Date(date)
    .toLocaleString('en-US', { timeZone: 'UTC', month: 'short', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit' })
}

export default formatDate