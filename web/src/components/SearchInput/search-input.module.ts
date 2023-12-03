import { FieldError } from 'react-hook-form'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: -140%;
`

export const BeforeButton = styled.button`
  position: absolute;
  top: 18%;
  left: -40%;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  background: var(--color-neutral100);
  cursor: pointer;
  border: none;
  transition: 0.2s;
  &:hover {
    background: #f0f2f5;
  }
`

interface InputContainerProps {
  type?: string
  error?: FieldError | undefined
}
export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 45px;
  color: #999;
  border: 1px solid var(--color-inputBorder);
  border-radius: 8px !important;
  padding: 0 24px;
  margin-top: 4px;

  ${(props) => props.error && `border: 2px solid #e70000;`}
`

export const InvalidMessage = styled.span`
  color: #e70000;
  margin: 4px 0;
`
