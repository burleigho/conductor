import React from 'react';
import ContentBox from './ContentBox';

export default function MainContentContainer() {
  let children = []
  for (let i=0; i < 6; i++ ) {
    children.push(ContentBox());
  }

  return (
      <section className="main__content-display">
       {children}
     </section> 
  )
}
