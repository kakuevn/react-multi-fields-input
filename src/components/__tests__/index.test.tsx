import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

import { INPUT } from '../../types'
import MultiFieldsInput from '../'

describe('MultiFieldsInput', () => {
  const inputs: INPUT[] = [
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

  const defaultProps = {
    label: 'Sort Code',
    name: 'sortCode',
    inputs: inputs,
    onBlur: jest.fn(),
    onChange: jest.fn(),
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Renders correctly', () => {
    const { container } = render(
      <MultiFieldsInput {...defaultProps} value="202020" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Calls onBlur and onChange and sends the correct value', () => {
    const { getByTestId } = render(<MultiFieldsInput {...defaultProps} />)

    const field1 = getByTestId(/sortCode0/i)
    user.type(field1, '10')

    expect(defaultProps.onChange).toHaveBeenCalledTimes(3)
    expect(defaultProps.onChange).toHaveBeenCalledWith({
      name: 'sortCode',
      value: '10',
    })
    expect(defaultProps.onBlur).toHaveBeenCalledTimes(1)

    const field2 = getByTestId(/sortCode1/i)
    user.type(field2, '20')

    expect(defaultProps.onChange).toHaveBeenCalledTimes(5)
    expect(defaultProps.onChange).toHaveBeenCalledWith({
      name: 'sortCode',
      value: '1020',
    })
    expect(defaultProps.onBlur).toHaveBeenCalledTimes(2)
  })

  it('Error is displayed when passed as props', () => {
    const { getByText } = render(
      <MultiFieldsInput {...defaultProps} error={'Invalid input'} />
    )
    expect(getByText(/Invalid input/i)).toBeInTheDocument()
  })
})
