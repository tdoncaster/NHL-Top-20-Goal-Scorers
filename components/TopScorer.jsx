import React from 'react'

export default (({ id, name, goals }) => (
  <div key={id} className="topscorer">
    {`${name} GOALS ${goals}`}
  </div>
))
