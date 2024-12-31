// Write your code here
import {useState} from 'react'
import {MainContainer, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [lock, isLock] = useState(true)

  const onClickButton = () => {
    isLock(prevSate => !prevSate)
  }

  const imageURL = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const text = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const btnText = lock ? 'unlock' : 'lock'

  return (
    <MainContainer>
      <Image src={imageURL} alt={altText} />
      <Para>{text}</Para>
      <Button type="button" onClick={onClickButton}>
        {btnText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
