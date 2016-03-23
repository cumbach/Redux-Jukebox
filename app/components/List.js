import React from 'react'

const List = ({items}) => (
  <div>
    <ul>
    {items.map(
      (x, n) => (<li key={n}>{x.name} [{ x.artist.name || x.artist }]</li>)
    )}
    </ul>
  </div>
)

export default List
