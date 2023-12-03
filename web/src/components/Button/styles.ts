import styled from 'styled-components'
interface ButtonProps {
  isSecondary?: boolean
}
export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;
  background: var(--color-primary);
  border: 0;
  border-radius: 8px;
  color: var(--color-neutral100);
  font-weight: 700;
  margin-top: 1.6rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%) !important;
  }

  ${(props) =>
    props.isSecondary && `background-color: var(--color-neutral100);`}
`
