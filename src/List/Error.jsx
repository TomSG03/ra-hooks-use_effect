import React from 'react'

function Error({ error }) {
  return (
    <div>{error.text}</div>
  )
}

export default Error