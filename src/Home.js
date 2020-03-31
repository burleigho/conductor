import React from 'react';
import ContentBox from './components/ContentBox';

export default function Home(props) {
  const {show} = props;
  return (
    <div className={`content-box-container ${show ? "open" : ""}`}> 
          <ContentBox className='content-box' content='test1' image='apis.png'/>
          <ContentBox className='content-box' content='test2' image='platform_status.png'/>
          <ContentBox className='content-box' content='test3' image='project_info.png'/>
          <ContentBox className='content-box' content='test3' image='project_info.png'/>
          <ContentBox className='content-box' content='test3' image='project_info.png'/>
          <ContentBox className='content-box' content='test3' image='project_info.png'/>
        </div>
  );
};
