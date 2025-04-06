import styled from 'styled-components'
import { ImageCatProps } from '../Models/ImageCatProps'

const ImageCat = ({ catUrl }: ImageCatProps) => {
  return (
    <Wrapper>
      <Image src={catUrl} alt="cat" />
    </Wrapper>
  )
}

export default ImageCat

const Wrapper = styled.div`
  width: 300px;
  height: auto;
`

const Image = styled.img`
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  display: block;
`
