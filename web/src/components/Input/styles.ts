import styled from 'styled-components'

interface InputProps {}
export const InputContainer = styled.input<InputProps>`
  width: 100%;
  height: 60px;
  color: #999;
  border: 1px solid var(--color-inputBorder);
  border-radius: 8px !important;
  padding: 0 24px;
  margin-top: 4px;
`

export const Error = styled.span`
  color: #e70000;
`
