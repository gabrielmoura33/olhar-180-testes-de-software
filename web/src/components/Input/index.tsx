import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, ...rest },
  ref,
) => {
  return (
    <>
      <InputContainer
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  )
}

const Input = forwardRef(InputBase)

export default Input
