import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

function Button({ secondary, children, type, ...rest }: ButtonProps) {
  return (
    <ButtonContainer isSecondary={secondary} type={type ?? 'button'} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button
