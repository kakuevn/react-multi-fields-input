import { SyntheticEvent } from 'react'

export interface Input {
  maxLength: number
  placeholder: string
}

export interface Props {
  autoFocus?: boolean
  inputs: Input[]
  error?: string
  label?: string
  name: string
  onBlur: (e: SyntheticEvent) => void
  onChange?: (e: SyntheticEvent) => void
  value?: string
}
