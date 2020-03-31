import React from 'react';
import SideBarAccordion from './SideBarAccordion';

export default function SideBar(props) {
  let showHideClassName2 = props.show ? "sidebar" : "sidebar-close";
  const items = props.items.map(({ label, id, sub }) => (
           <SideBarAccordion key={id} label={label} sub={sub}/>    
          ))
  return (
    <React.Fragment>
      <nav className={showHideClassName2}>
       <ul>
          {items}
       </ul>
      </nav>
    </React.Fragment>
  );
}

// <input type="checkbox" id="slide" name="" value="" />
//       <div className="container">
//       <label htmlFor="slide" className="toggle" onClick={() => 
//         props.setShow(!props.show)
//         } > {props.show ? '\u{02718}' : '\u{02630}' }
//       </label>