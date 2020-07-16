// TODO: type that
// @ts-ignore
export const formatFields = (value, name, inputs) => {
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
// @ts-ignore
export const getValue = (fields) => {
    // TODO: reduce instead of map
  let value = ''
  Object.keys(fields).map(field => {
    value += fields[field]
  })
  return value
}
