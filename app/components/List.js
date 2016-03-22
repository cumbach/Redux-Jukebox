import React from 'react'

const List = () => (
  <div>
    <ul>
    {[1,2,3,4,5,6,7,8].map(
      x => (<li key={x}>{x}</li>)
    )}
    </ul>
  </div>
)

export default List
