import React from 'react'

const List = ({items}) => (
  <div>
    <ul className="list" >
    {items.map(
      (x, n) => (<li className="track" key={n}>
        <span className="title" >{x.name}</span>
        <span className="artist" >{ x.artist.name || x.artist }</span>
      </li>)
    )}
    </ul>
  </div>
)

export default List
