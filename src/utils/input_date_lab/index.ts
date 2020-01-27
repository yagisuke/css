export function toHalfWidthDigit(date: string): string {
  return date
    .replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/[^0-9]/g, '')
}

export function formatDate(date: string, separator = '-'): string {
  const target = toHalfWidthDigit(date)
  if (!target) return target
  // 年
  const yyyy = target.substring(0, 4)
  const resultYYYY = yyyy + (yyyy.length === 4 ? separator : '')
  // 月
  const mm = target.substring(4, 6)
  const resultMM = mm + (mm.length === 2 ? separator : '')
  // 日
  const resultDD = target.substring(6, 8)
  // 年月日
  return resultYYYY + resultMM + resultDD
}
