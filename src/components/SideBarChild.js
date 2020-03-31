import React from 'react';
import Modal from './Modal';

export default function SideBarChild(props) {
  const [show2, setShow2] = React.useState(false);
  return (
    <div>
      <button className="sidebar-children" onClick={()=> setShow2(!props.show2)}>{props.values.label}</button>
      <Modal items2={props} show2={show2} setShow2={setShow2} />
    </div>
  )
}
