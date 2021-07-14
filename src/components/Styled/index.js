import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 50px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`

export const Screen = styled.div`
  grid-column: 1 / -1;
  background: rgba(60, 64, 67, 0.75);
  display: flex;
  justifu-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: breal-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  color: #333;
  border: 1px outset white;
  outline: none;
  background: rgba(255, 255, 255, 0.75);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan};`}

  ${({operation}) => operation && `background: gray;`}

  ${({control}) => control && `background: skyblue;`}

  ${({equals}) => equals && `
    border-bottom-right-radius: 10px;
    background: gray;
  `}

  ${({period}) => period && `
    border-bottom-left-radius: 10px;
    background: skyblue;
  `}
`
