import React from 'react'
import SideBarChild from './SideBarChild'

export default function SideBarAccordion(props) {
  const [isOpen, setOpen] = React.useState(false);
  const { label } = props;

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {label}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{props.sub.map((child) => (
           <SideBarChild values={child}/>
           ))}</div>
      </div>
    </div>
  );
}