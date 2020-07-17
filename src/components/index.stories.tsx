import React from 'react'
import MultiFieldsInput from './'

export default { title: 'MultiFieldsInput' }

const inputs = [
  {
    maxLength: 2,
    placeholder: '00',
  },
  {
    maxLength: 2,
    placeholder: '00',
  },
  {
    maxLength: 2,
    placeholder: '00',
  },
]

export const NumberFields = () => (
  <MultiFieldsInput
    label="Sort Code"
    name="sortCode"
    inputs={inputs}
    value="202020"
    onBlur={data => console.log(data)}
  />
)

const textInputs = [
  {
    maxLength: 2,
    placeholder: 'aa',
  },
  {
    maxLength: 2,
    placeholder: 'ss',
  },
  {
    maxLength: 2,
    placeholder: 'dd',
  },
  {
    maxLength: 2,
    placeholder: 'ff',
  },
]

export const TextFields = () => (
  <MultiFieldsInput
    label="Voucher Code"
    name="voucherCode"
    inputs={textInputs}
    value="aassddff"
    autoFocus={false}
    onBlur={data => console.log(data)}
    onChange={data => console.log(data)}
  />
)

export const WithoutLabel = () => (
  <MultiFieldsInput
    name="sortCode"
    inputs={inputs}
    onBlur={data => console.log(data)}
  />
)

export const WithInvalidInput = () => (
  <MultiFieldsInput
    name="sortCode"
    inputs={inputs}
    value="202020"
    onBlur={data => console.log(data)}
    onChange={data => console.log(data)}
    error="Input is invalid"
  />
)

export const WithStyle = () => (
  <div
    style={{
      width: '400px',
    }}
  >
    <MultiFieldsInput
      name="sortCode"
      inputs={inputs}
      label="Sort Code"
      value="202020"
      onBlur={data => console.log(data)}
      onChange={data => console.log(data)}
      error="Input is invalid. Please, enter the valid numbers."
      styles={{
        container: {
          width: 'auto',
        },
        label: {
          width: '100%',
          color: '#4A5568',
          fontWeight: 'bold',
          marginBottom: '0.3em',
          fontSize: '15px',
          display: 'block',
        },
        input: {
          borderRadius: '5px',
          padding: '0.75em 1em',
          border: '1px solid #A0AEC0',
          color: '#2D3748',
          maxWidth: '7em',
        },
        error: {
          boxSizing: 'border-box',
          marginTop: '0.7em',
          padding: '0.75em 1em',
          backgroundColor: '#FED7D7',
          display: 'block',
          borderRadius: '5px',
          fontWeight: 'bold',
          color: '#C53030',
          fontSize: '13px',
          width: '100%',
        },
        inputContainer: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        },
      }}
    />
  </div>
)
