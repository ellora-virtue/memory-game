import React from 'react'

const Tile = props => {
  return (
    <div className='tile'>
      {props.isVisible &&
        props.value
      }
    </div>
  )
}

export default Tile
