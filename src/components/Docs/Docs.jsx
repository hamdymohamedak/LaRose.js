import React, { useState } from 'react';
import "./Docs.css";
import SideBar from '../sideBar/SideBar';
import Viewer from '../Viewer/Viewer';

export default function Docs() {
  const [selectedComponent, setSelectedComponent] = useState('RandomAnimate'); 

  return (
    <section className='docSection'>
      <SideBar onComponentSelect={setSelectedComponent} />
      <div className='titleParent'>
        <h3>Text Animation</h3>
        <h1>{selectedComponent}</h1> 
        <Viewer componentName={selectedComponent} />
      </div>
    </section>
  );
}
