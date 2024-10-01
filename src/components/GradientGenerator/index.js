import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorBgContainer,
  Heading,
  Paragraph,
  GradientDirectionList,
  ColorGradientContainer,
  Container,
  ColorHexCode,
  FirstGradientInputColorGenerator,
  LastGradientInputColorGenerator,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [gradientId, setGradientId] = useState(
    gradientDirectionsList[0].directionId,
  )
  const [color, setColor] = useState({
    firstGradientColor: '#8ae323',
    lastGradientColor: '#014f7b',
    position: gradientDirectionsList[0].value,
  })

  const [updatedColor, setUpdatedColor] = useState({
    firstGradientColor: '#8ae323',
    lastGradientColor: '#014f7b',
    position: gradientDirectionsList[0].value,
  })

  const onChangeGradientColor = event => {
    const {name, value} = event.target
    setColor({...color, [name]: value})
  }

  const changeButtonDirection = directionId => {
    setGradientId(directionId)
    const filterValue = gradientDirectionsList.find(
      eachDirection => eachDirection.directionId === directionId,
    )
    setColor(prePosition => ({...prePosition, position: filterValue.value}))
  }

  const onClickSubmitButton = event => {
    event.preventDefault()
    setUpdatedColor(color)
  }

  return (
    <GradientGeneratorBgContainer
      updatedColor={updatedColor}
      onSubmit={onClickSubmitButton}
    >
      <Heading>Generate a CSS Color Gradient</Heading>
      <Paragraph>Choose Direction</Paragraph>
      <GradientDirectionList>
        {gradientDirectionsList.map(eachDirectionList => (
          <GradientDirectionItem
            key={eachDirectionList.directionId}
            eachDirectionList={eachDirectionList}
            changeDirection={changeButtonDirection}
            isActive={gradientId === eachDirectionList.directionId}
          />
        ))}
      </GradientDirectionList>
      <Paragraph>Pick the Colors</Paragraph>
      <ColorGradientContainer>
        <Container>
          <ColorHexCode>{color.firstGradientColor}</ColorHexCode>
          <FirstGradientInputColorGenerator
            name="firstGradientColor"
            value={color.firstGradientColor}
            type="color"
            onChange={onChangeGradientColor}
          />
        </Container>
        <Container>
          <ColorHexCode>{color.lastGradientColor}</ColorHexCode>
          <LastGradientInputColorGenerator
            name="lastGradientColor"
            value={color.lastGradientColor}
            type="color"
            onChange={onChangeGradientColor}
          />
        </Container>
      </ColorGradientContainer>
      <GenerateButton type="submit">Generate</GenerateButton>
    </GradientGeneratorBgContainer>
  )
}

export default GradientGenerator