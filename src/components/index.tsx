import React, {
  FunctionComponent,
  useState,
  useEffect,
  SyntheticEvent,
} from 'react'
import { Props } from '../types'
import { formatFields, getValue } from '../utils'

const MultiFieldsInput: FunctionComponent<Props> = ({
  autoFocus = true,
  inputs,
  error = '',
  label = '',
  name,
  onBlur,
  onChange,
  value = '',
  styles = {
    container: {},
    label: {},
    input: {},
    error: {},
    inputContainer: {},
  },
}: Props) => {
  const [fieldsValues, setFieldsValues] = useState(
    formatFields(value, name, inputs)
  )

  const handleBlur = (e: SyntheticEvent) => {
    const { name: fieldName, value } = e.target as HTMLInputElement
    onBlur({
      name,
      value: getValue({
        ...fieldsValues,
        [fieldName]: value,
      } as any),
    })
  }

  const handleChange = (e: SyntheticEvent) => {
    const { name: fieldName, value } = e.target as HTMLInputElement

    setFieldsValues({
      ...fieldsValues,
      [fieldName]: value,
    })

    // Changes focus to the next field
    if (autoFocus) {
      const index = parseInt(fieldName.substring(fieldName.length - 1))
      if (value.length === inputs[index].maxLength) {
        const nextInput = document.querySelector(
          `input[name='${name}${index + 1}']`
        ) as HTMLElement
        if (nextInput !== null) {
          nextInput.focus()
        }
      }
    }
  }

  useEffect(() => {
    if (onChange) {
      const value = getValue(fieldsValues as any)
      onChange({
        name,
        value,
      })
    }
  }, [fieldsValues])

  return (
    <div style={styles.container}>
      {label && (
        <label htmlFor={name} style={styles.label}>
          {label}
        </label>
      )}
      <div style={styles.inputContainer}>
        {inputs.map((field, index) => {
          return (
            <input
              key={`${name}-${index}`}
              name={`${name}${index}`}
              data-testid={`${name}${index}`}
              value={fieldsValues[`${name}${index}`] as string}
              style={styles.input}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              {...field}
            />
          )
        })}
      </div>
      {error !== '' && <div style={styles.error}>{error}</div>}
    </div>
  )
}

export default MultiFieldsInput
