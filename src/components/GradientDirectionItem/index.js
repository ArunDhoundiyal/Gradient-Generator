import {DirectionButton} from './styledComponents'

const GradientDirectionItem = ({
  eachDirectionList,
  changeDirection,
  isActive,
}) => {
  const {directionId, displayText} = eachDirectionList
  const onClickDirectionButton = () => {
    changeDirection(directionId)
  }
  return (
    <DirectionButton isActive={isActive} onClick={onClickDirectionButton}>
      {displayText}
    </DirectionButton>
  )
}

export default GradientDirectionItem