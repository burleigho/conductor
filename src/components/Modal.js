import React from 'react';
import Form from './Form';

export default function Modal(props) {
  const showHideClassName = props.show2 ? "modal" : "modal display-none";
  // const [userInput, setUserInput] = useReducer(
  //   (state, newState) => ({...state, ...newState}),
  //   {
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: ''
  //   })

  // const handleChange = evt => {
  //   const name = evt.target.name;
  //   const newValue = evt.target.value;
  //   setUserInput({[name]: newValue});
  // }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Form items={props.items2} />
      <button onClick={() => props.setShow2(!props.show2)}>close</button>
      </section>
    </div>
  );
};