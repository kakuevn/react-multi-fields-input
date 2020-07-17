type STYLES = {
  container?: Record<string, unknown>
  label?: Record<string, unknown>
  input?: Record<string, unknown>
  error?: Record<string, unknown>
  inputContainer?: Record<string, unknown>
}

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
  styles?: STYLES
}

export type FIELDS = {
  name: string
  value: string
}
