import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 320px;
  margin: 50px auto;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: minmax(115px, auto) repeat(5, 80px);
  box-shadow: 0px 0px 20px 0px #aaa;
  border-radius: 10px;
`

export const Screen = styled.div`
  grid-column: 1 / -1;
  background: #1c191c;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: breal-all;
  text-align: right;
`

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 2rem;
`

export const Current = styled.div`
  color: white;
  font-size: 3rem;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  color: #333;
  font-weight: 300;
  border-top: 1px solid #777;
  border-right: 1px solid #666;
  outline: none;
  background: #e0e0e7;

  &:active {
    box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
  }

  ${({gridSpan}) => gridSpan && `
    grid-column: span ${gridSpan};
    text-align: left;
    padding-left: 2rem;
  `}

  ${({operation}) => operation && `
    border-right: none;
    color: white;
    background: #fc8f2b;
  `}

  ${({control}) => control && `background: #c6c5cc;`}

  ${({dot}) => dot && `
    padding-top: 1rem;
    font-size: 0.75em;
  `}
`
