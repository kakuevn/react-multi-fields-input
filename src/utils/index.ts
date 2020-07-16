import { FIELDS, INPUT } from '../types'

export const formatFields = (
  value: string,
  name: string,
  inputs: INPUT[]
): Record<string, unknown> => {
  const stateValues = {}
  let previousEnd = 0
  for (let i = 0; i < inputs.length; i++) {
    const maxLength = inputs[i].maxLength || inputs.length
    const inputValueLength = previousEnd + maxLength

    stateValues[`${name}${i}`] = value.substring(previousEnd, inputValueLength)
    previousEnd += maxLength
  }

  return stateValues
}

export const getValue = (fields: FIELDS | Record<string, string>): string =>
  Object.values(fields).reduce(
    (finalValue, fieldValue) => finalValue + fieldValue,
    ''
  )
