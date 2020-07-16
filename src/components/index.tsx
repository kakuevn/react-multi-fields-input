import React, {
  FunctionComponent,
  useState,
  useEffect,
  SyntheticEvent,
} from 'react'
import cn from 'classnames'
import { Props } from './types'
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
}: Props) => {
  const [fieldsValues, setFieldsValues] = useState({})

  const handleBlur = (e: SyntheticEvent) => {
    // @ts-ignore
    const { name: fieldName, value } = e.target
    const updatedState = {
      ...fieldsValues,
      [fieldName]: value,
    }
    setFieldsValues(updatedState)
    const finalValue = getValue(updatedState)
    // @ts-ignore
    onBlur({ name, value: finalValue })
  }

  const handleChange = (e: SyntheticEvent) => {
    // @ts-ignore
    const { name: fieldName, value } = e.target

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

  // Recalculate if new value is passed from the parent
  useEffect(() => {
    const values = formatFields(value, name, inputs)
    setFieldsValues(values)
  }, [value])

  useEffect(() => {
    if (onChange) {
      const value = getValue(fieldsValues)
      console.log(value)
      onChange({
        // @ts-ignore
        name,
        value,
      })
    }
  }, [fieldsValues])

  return (
    <div className="rmfi-container">
      {label && (
        <label htmlFor={name} className="rmfi-label">
          {label}
        </label>
      )}
      {inputs.map((field, index) => {
        return (
          <input
            key={`${name}-${index}`}
            name={`${name}${index}`}
            value={fieldsValues[`${name}${index}`]}
            className={cn([
              `rmfi-input rmfi-input-${index}`,
              {
                'rmfi-error': error !== '',
              },
            ])}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            {...field}
          />
        )
      })}
      {error !== '' && <div className="rmfi-error-message">{error}</div>}
    </div>
  )
}

export default MultiFieldsInput
