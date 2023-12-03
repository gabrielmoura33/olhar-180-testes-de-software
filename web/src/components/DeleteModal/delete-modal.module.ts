import styled from 'styled-components'

const DeleteModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`

const ModalContent = styled.div`
  width: 464px;
  height: 396px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  border-radius: 16px;
  background-color: #fff;
  padding: 43px 20px;
`

const ButtonsGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

const DeleteModalButton = styled.button`
  width: 100%;
  height: 60px;
  background: var(--color-primary) !important;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`

const DeleteModalButtonSecondary = styled(DeleteModalButton)`
  background-color: transparent !important;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
`

export {
  DeleteModalContainer,
  ModalContent,
  ButtonsGroup,
  DeleteModalButton,
  DeleteModalButtonSecondary,
}
