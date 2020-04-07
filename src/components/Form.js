import React from 'react';

export default function Form(props) {
  const items = props.items.values.fields.map(item => (
    <div key={item} className='divTest'>
      <input type="text" name={item} id={item} placeholder={item}/>
      <label htmlFor={item}>{item}</label>
    </div>
  ))

  return (
    <React.Fragment>
      <form className="main-form">
        {items}
      </form>
    </React.Fragment>
  );
}