import React from 'react';
import SideBarAccordion from './SideBarAccordion';

export default React.forwardRef((props, ref) => {
  let showHideClassName2 = props.show ? "sidebar" : "sidebar-close";
  console.log(props)
  const items = props.items.map(({ label, id, sub }) => (
           <SideBarAccordion key={id} label={label} sub={sub}/>    
          ))
  return (
    <div ref={ref}>
      <nav className={showHideClassName2}>
       <ul>
          {items}
       </ul>
      </nav>
    </div>
  );
})

// <input type="checkbox" id="slide" name="" value="" />
//       <div className="container">
//       <label htmlFor="slide" className="toggle" onClick={() => 
//         props.setShow(!props.show)
//         } > {props.show ? '\u{02718}' : '\u{02630}' }
//       </label>