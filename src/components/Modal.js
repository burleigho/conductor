import React from 'react';
import Form from './Form';

export default function Modal(props) {
  const showHideClassName = props.show2 ? "modal-main" : "modal display-none";

  // const handleChange = evt => {
  //   const name = evt.target.name;
  //   const newValue = evt.target.value;
  //   setUserInput({[name]: newValue});
  // }

  return (
      <section className={showHideClassName}>
        <Form items={props.items2} />
      <button onClick={() => props.setShow2(!props.show2)}>Close</button>
      <button onClick={() => alert('submit')}>Submit</button>
      <button onClick={() => alert('clear')}>Clear</button>
      </section>
  );
};