import styled, { css } from 'styled-components'

interface CardTaskProps {
  isActive?: boolean
}
export const CardContainer = styled.div<CardTaskProps>`
  display: grid;
  grid-template-columns: 5% 20% 23% 20% 10% 10% 10%;
  align-items: center;

  margin-bottom: 0.5rem;

  position: relative;

  transition: all 0.2s;

  &:hover {
    background: linear-gradient(
        90deg,
        rgba(250, 156, 45, 0.1) 0.45%,
        rgba(252, 253, 255, 0.1) 31.4%
      ),
      white;

    &::before {
      height: 100%;
    }
  }
  &::before {
    content: ' ';
    width: 0.25rem;
    height: 0%;
    background-color: #fa9c2d;
    border-radius: 0.313rem 0 0 0.313rem;
    position: absolute;
    top: 0;
    left: -1px;
    transition: all 0.2s;
  }

  &:last-child {
    justify-self: flex-end;
  }

  .column > span {
    display: block;

    font-family: Inter;
    font-weight: 600;
    font-size: 0.75rem; /* 12px of 16px root*/
    text-transform: uppercase;

    color: #bfbfcc;
  }

  .column p {
    color: #787880;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }

  .column h2 {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 142% */

    /* Textos / H1 */

    color: #5a5a66;
  }
  p {
    font-weight: 600;
  }

  .id {
    font-family: IBM Plex Sans;
    font-weight: 600;
    color: #bfbfcc;
  }
  .name {
    /* font-family: IBM Plex Sans; */
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  @media (max-width: 1390px) {
    grid-template-columns: 5% 20% 10% 20% 17.25% 12.25% 15%;
  }

  @media (max-width: 970px) {
    grid-template-columns: 21% 13% 23% 20.25% 12.25% 10%;

    .column.id {
      display: none;
    }
  }
  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'lt rt'
      'lm rm'
      'lb rb';
    gap: 0.5rem;

    .column.id {
      display: none;
    }

    .column.name {
      grid-area: lt;
    }
    .column.deadline {
      grid-area: lm;
    }
    .column.amount {
      grid-area: lb;
    }
    .column.status {
      justify-self: end;
      grid-area: rt;
    }
    .column.actions {
      grid-area: rb;
    }
  }
  cursor: pointer;
  background: #fcfdff;
  border-radius: 0.313rem;
  border: 1px solid #e1e3e6;
  color: #5a5a66;

  padding: 1.5rem;

  text-align: left;
  .btn.white {
    background: #fcfdff;
    border: 1px solid #e1e3e6;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    transition: 0.2s;
    &:hover {
      background: #f0f2f5;
    }
  }

  .actions .btn {
    width: 2.5rem;
    height: 2.5rem;

    padding: 0;
    margin-right: 0.5rem;
  }

  ${(props) =>
    !props.isActive &&
    css`
      background-color: #f0f2f5;
      pointer-events: none;
    `}
`
