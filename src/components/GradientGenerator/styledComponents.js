import styled from 'styled-components'

const GradientGeneratorBgContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.updatedColor.position},
    ${props => props.updatedColor.firstGradientColor},
    ${props => props.updatedColor.lastGradientColor}
  );
  font-family: 'Roboto';
`

const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  @media screen and (max-width: 510px) {
    font-size: 25px;
  }

  @media screen and (max-width: 370px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 18px;
  }

  @media screen and (max-width: 270px) {
    font-size: 15px;
  }
`

const Paragraph = styled.p`
  color: #ededed;
  font-size: 20px;

  @media screen and (max-width: 270px) {
    font-size: 15px;
  }
`

const GradientDirectionList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  width: 1000px;
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

const ColorGradientContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;

  @media screen and (max-width: 400px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ColorHexCode = styled.p`
  font-weight: bold;
  color: #ffffff;
`

const FirstGradientInputColorGenerator = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 210px) {
    width: 50px;
  }
`

const LastGradientInputColorGenerator = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 210px) {
    width: 50px;
  }
`

const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  border: solid 0px;
  width: 120px;
  border-radius: 8px;
  margin-top: 30px;

  @media screen and (max-width: 250px) {
    height: 40px;
    font-size: 15px;
    width: 100px;
  }
`

export {
  GradientGeneratorBgContainer,
  Heading,
  Paragraph,
  GradientDirectionList,
  ColorGradientContainer,
  Container,
  FirstGradientInputColorGenerator,
  LastGradientInputColorGenerator,
  GenerateButton,
  ColorHexCode,
}