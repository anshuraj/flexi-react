import React from 'react'

export default function DropDown(props) {
  return (
    <div>
      <label>{props.label}</label>
      <select name={props.name}>
        {props.values.map(value => <option value={value} key={value}>{value}</option>)}
      </select>
    </div>
  )
}
