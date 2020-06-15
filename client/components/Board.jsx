import React from 'react'

import Tile from './Tile'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null,
      tile2: null
    }
  }

  clickHandler (id) {
    if (!this.state.tile1) {
      const firstSelection = this.props.tiles.find(tile => tile.id === id)
      firstSelection.isVisible = true
      this.setState({
        tile1: firstSelection
      })
    } else if (this.state.tile1) {
      const secondSelection = this.props.tiles.find(tile => tile.id === id)
      this.setState({
        tile2: secondSelection
      })
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
