import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputContainer } from './styles'
import { Props as InputMaskProps } from 'react-input-mask'

interface CustomInputMaskProps extends InputMaskProps {
  mask: string
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputMaskProps
> = ({ mask, ...rest }, ref) => {
  return <InputContainer mask={mask} ref={ref as any} {...rest} />
}

const MaskInput = forwardRef(InputBase)

export default MaskInput
