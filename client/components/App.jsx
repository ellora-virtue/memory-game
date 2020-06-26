import React from 'react'

import Board from './Board'
import startingTiles from '../startingTiles'

const tryAgain = 'No match, try again'
const winMessage = 'Congratulations, you matched all the tiles!'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      matchCount: 0,
      isMatch: true,
      tiles: startingTiles
    }
  }

  evalMatch = (tile1, tile2) => {
    const { matchCount } = this.state
    const isMatch = tile1.value === tile2.value
    const updatedTiles = this.state.tiles.map(tile => {
      if (!isMatch && (tile === tile1 || tile === tile2)) {
        tile.isVisible = false
      }
      return tile
    })
    this.setState({
      matchCount: isMatch ? matchCount + 1 : matchCount,
      tiles: updatedTiles,
      isMatch: isMatch
    })
  }

  render () {
    console.log(this.state.matchCount)
    const hasWon = this.state.matchCount === (startingTiles.length / 2)
    return (
      <div className='game'>
        <h1>Welcome to the Memory Game</h1>
        <h2>Match all the tiles to win</h2>

        <Board
          tiles={this.state.tiles}
          foundMatch={this.foundMatch}
          evalMatch={this.evalMatch}
        />

        <h5>{hasWon && winMessage}</h5>
        <h5>{!this.state.isMatch && tryAgain}</h5>

        <div className='replaybutton'>
          {hasWon && <button onClick={this.reset}>Play Again</button>}
        </div>
      </div>
    )
  }
}

export default App
