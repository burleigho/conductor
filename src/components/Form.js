import React from 'react';

export default function Form(props) {
  const items = props.items.values.fields.map(item => (
    <React.Fragment key={item}>
        <label htmlFor={item}>{item}</label>
        <input type="text" name={item} id={item}/>
    </React.Fragment>
  ))

  return (
    <React.Fragment>
      <form className="main-form">
        {items}
      </form>
    </React.Fragment>
  );
}