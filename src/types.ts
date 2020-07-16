
export type INPUT = {
  maxLength: number
  placeholder: string
}

export interface Props {
  autoFocus?: boolean
  inputs: INPUT[]
  error?: string
  label?: string
  name: string
  onBlur: (values: FIELDS) => void
  onChange?: (values: FIELDS) => void
  value?: string
}

export type FIELDS = {
  name: string
  value: string
}