import React, { Component } from 'react'
import TextField from './TextField';
import DropDown from './DropDown';

export default class Flexi extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    // getting all fields with their valies in a json object
    const fields = Array.prototype.slice.call(e.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: el.value,
      }), {})

      this.props.onSubmit(fields);
  }
  render() {
    const {config} = this.props;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {config.items.map((item, i) => {
            if (item.type === "TextField") {
              return <TextField {...item} key={i} />
            } else if (item.type === "DropDown") {
              return <DropDown {...item} key={i} />
            }
            return '';
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
