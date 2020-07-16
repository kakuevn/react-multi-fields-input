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
    onChange={data => console.log(data)}
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

export const WithoutLabel = () => (<MultiFieldsInput
  name="sortCode"
  inputs={inputs}
  onBlur={data => console.log(data)}
/>)

export const WithInvalidInput = () => (<MultiFieldsInput
  name="sortCode"
  inputs={inputs}
  value="202020"
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
  error="Input is invalid"
/>)