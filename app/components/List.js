import React from 'react'

const List = ({items}) => {
  // console.log(items)
  return (
  <div>
    <ul>
    {items.map(
      x => (<li key={x.id}>{x.title}</li>)
    )}
    </ul>
  </div>
)}

export default List
