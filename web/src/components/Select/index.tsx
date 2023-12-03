import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { SelectContainer } from './styles'

interface Option {
  value: string | number
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string

  options: Option[]
}

/**
 * @author Gabriel de Moura e Souza
 * @todo Implementar options personalizadas para retirar o default do HTML
 */
const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { placeholder, options, ...rest },
  ref,
) => {
  return (
    <>
      <SelectContainer ref={ref} {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectContainer>
    </>
  )
}

const Select = forwardRef(SelectBase)

export default Select
