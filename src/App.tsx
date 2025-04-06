import { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { getCats } from './Api/getCats'
import Actions from './Common/Components/Actions'
import ImageCat from './Common/Components/ImageCat'

function App() {
  const [cat, setCat] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isAutoRefresh, setIsAutoRefresh] = useState(false)

  const getCat = async () => {
    setIsLoading(true)
    getCats()
      .then((res) => {
        setCat(res)
      })
      .catch(() => {
        setCat('/img/404.png')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (isEnabled) getCat()
  }, [isEnabled])

  useEffect(() => {
    if (isAutoRefresh) {
      const interval = setInterval(() => {
        getCat()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isAutoRefresh])

  return (
    <>
      <Wrapper>
        <Actions
          setIsEnabled={setIsEnabled}
          setIsAutoRefresh={setIsAutoRefresh}
          getCat={getCat}
        />

        {!isLoading ? (
          isEnabled && cat && <ImageCat catUrl={cat} />
        ) : (
          <p>Loading...</p>
        )}
      </Wrapper>

      <GlobalStyle />
    </>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  width: 100%;
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
