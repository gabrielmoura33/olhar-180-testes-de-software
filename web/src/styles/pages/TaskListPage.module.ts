import styled from 'styled-components'

const Header = styled.header`
  background: var(--color-primary);
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 3rem;

  .inner {
    height: 5.5rem;
    margin-bottom: 4rem;
  }

  .container {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: column;
    width: min(1440px, 90vw);
    margin: 0 auto;
    section {
      display: flex;
      justify-content: space-between;
    }
  }

  .inner h1 {
    margin: 0 auto;
    line-height: 1.625rem;
    color: var(--color-header-inner-title);
  }
`

const Container = styled.div`
  width: min(1440px, 90vw);
  margin: 0 auto;

  main {
    margin-top: -2.825rem;
    position: relative;
    z-index: 0;
  }
`

const Summary = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  font-family: Inter;
  margin-bottom: 2rem;
  color: #fff;

  & > div {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    margin-right: 2.5rem;
  }

  & > div > strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.625rem;
    color: #fff;
  }
`

const Button = styled.button`
  padding: 0.75rem 3rem;
  border-radius: 0.313rem;
  border: 0;
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &.white {
    background: #ffff;
    color: #000;

    &:hover {
      background: #fa9c2d;
    }
  }
`

const AvatarProfile = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-decoration: none;
  font-family: IBM Plex Sans;
  text-align: right;

  p {
    font-size: 1.25rem; /* 20px of 16px root*/
    line-height: 1.875rem; /*30px of 16px root*/
    margin-right: 1.25rem;

    font-weight: 600;
    color: #fff;
    span:hover {
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }
  span {
    display: block;

    font-weight: normal;
    font-size: 0.875rem; /* 14px of 16px root*/
    line-height: 1.5rem; /* 24px of 16px root*/

    font-weight: 400;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.156rem solid #000;
  }
`

export { Container, Header, Summary, Info, Button, AvatarProfile }
