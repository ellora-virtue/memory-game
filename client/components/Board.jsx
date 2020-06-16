import React from 'react'

import Tile from './Tile'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null,
      tile2: null
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (id) {
    const { tile1 } = this.state
    const selected = this.props.tiles.find(tile => tile.id === id)
    selected.isVisible = true
    if (!tile1) {
      this.setState({
        tile1: selected
      })
    } else if (tile1) {
      this.setState({
        tile2: selected
      },
      this.calculatePair)
    }
  }

  calculatePair () {
    const { tile1, tile2 } = this.state
    const isMatch = tile1.value === tile2.value
    if (isMatch) {
      this.props.evalMatch(tile1, tile2)
    } else {
      setTimeout(() => {
        this.setState({
          tile1: null,
          tile2: null
        })
      }, 1000)
    }
  }

  render () {
    console.log(this.state)
    return <div className='tiles'>
      {this.props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          info={tile.info}
          value={tile.value}
          isVisible={tile.isVisible}
          handleClick={() => this.clickHandler(tile.id)}
        />
      })}
    </div>
  }
}

export default Board
