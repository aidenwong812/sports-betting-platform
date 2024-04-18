export const Today = new Date()
export const Tomorrow = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1)
export const DayAfterTomorrow = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 2)