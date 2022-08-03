/**
 * 
 * @param totalMinutes number - minutes of the day
 * @returns hour - example: '23:59'
 */
export const returnsTimeInString = (totalMinutes: number) => {
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`
}

/**
 * 
 * @param num 
 * @returns padStart
 */
export const padTo2Digits = (num: number) => num.toString().padStart(2, '0')