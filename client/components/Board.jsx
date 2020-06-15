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
    const selected = this.props.tiles.find(tile => tile.id === id)
    this.setState({
      tile1: selected
    })
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
