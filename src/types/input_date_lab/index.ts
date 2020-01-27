type T_OPTION_ITEM = {
  limit: number
  ref: any
  next: string
}

export type T_OPTION = {
  [key: string]: T_OPTION_ITEM
  year: T_OPTION_ITEM
  month: T_OPTION_ITEM
  day: T_OPTION_ITEM
}

export type T_DATE = {
  [key: string]: string
  year: string
  month: string
  day: string
}
