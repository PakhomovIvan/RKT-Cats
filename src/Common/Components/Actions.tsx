import styled from 'styled-components'
import { ActionsProps } from '../Models/ActionsProps'

const Actions = ({
  setIsEnabled,
  setIsAutoRefresh,
  getCat,
  isEnabled,
}: ActionsProps) => {
  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (name === 'enable') {
      setIsEnabled(checked)
    }

    if (name === 'refresh') {
      setIsAutoRefresh(checked)
    }
  }

  return (
    <Wrapper>
      <label htmlFor="enable">
        <input
          type="checkbox"
          name="enable"
          id="enable"
          onChange={handeChange}
        />
        Enabled
      </label>
      <label htmlFor="refresh">
        <input
          type="checkbox"
          name="refresh"
          id="refresh"
          onChange={handeChange}
        />
        Auto-refresh every 5 second{' '}
      </label>
      <Button type="button" onClick={getCat} disabled={!isEnabled}>
        Get Cat
      </Button>
    </Wrapper>
  )
}

export default Actions

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Button = styled.button`
  height: 40px;
`
