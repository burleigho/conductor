import React, { Fragment } from 'react';
import SideBarAccordion from './SideBarAccordion';

export default React.forwardRef((props, ref) => {
  const showHideClassName2 = props.show ? "sidebar" : "sidebar-close";
  const items = props.items.map(({ label, id, sub }) => (
           <SideBarAccordion key={id} label={label} sub={sub}/>    
          ))
  return (
      <nav ref={ref} className={showHideClassName2}>
       <ul>
          {items}
       </ul>
      </nav>
  );
})

// <input type="checkbox" id="slide" name="" value="" />
//       <div className="container">
//       <label htmlFor="slide" className="toggle" onClick={() => 
//         props.setShow(!props.show)
//         } > {props.show ? '\u{02718}' : '\u{02630}' }
//       </label>