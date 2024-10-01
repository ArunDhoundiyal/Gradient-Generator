import styled from 'styled-components'

const DirectionButton = styled.li`
  background-color: ${props => (props.isActive ? `#ffffff` : `#ffffff79`)};
  border: solid 0px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  height: 60px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #334155;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    height: 40px;
    width: 100px;
  }

  @media screen and (max-width: 510px) {
    height: 40px;
    width: 80px;
    font-size: 12px;
  }

  @media screen and (max-width: 510px) {
    height: 40px;
    width: 60px;
    font-size: 12px;
  }

  @media screen and (max-width: 348px) {
    height: 30px;
    width: 40px;
    font-size: 10px;
  }
`

export {DirectionButton}