import React from 'react'
import Button from './button'
import { WithPlayerColor } from '../helpers'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 32px;
`

const Dashboard = ({ moves, currentPlayer, restartGame }) => (
  <Wrapper>
    <br />
    <div>Moves: {moves}</div>
    <br />
    <div>
      Now playing:{' '}
      <WithPlayerColor player={currentPlayer}>
        <b>Player {currentPlayer}</b>
      </WithPlayerColor>
    </div>
    <Button handleClick={restartGame} text='Restart Game' />
  </Wrapper>
)

export default Dashboard
