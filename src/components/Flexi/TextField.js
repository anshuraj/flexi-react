import React from 'react'

export default function TextField(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input name={props.name}></input>
    </div>
  )
}
