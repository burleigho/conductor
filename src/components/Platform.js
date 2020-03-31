import React from 'react';
import styled from 'styled-components';

export default function Test () {
  
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  return ( 
    <div>
      <div>
        <Title>Platform</Title>
        <button onClick={handleClick}>Press</button>
        <button>Reset</button>
      </div>
    </div>
  )
}