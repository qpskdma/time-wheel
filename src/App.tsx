import React, { useEffect, useState } from 'react';
import Circle from './Circle';
import { categorizedEvents } from './data';

const App: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);
    const [activePoint, setActivePoint] = useState("literature");
  
  useEffect(()=>{
  categorizedEvents.activePoint
  
  }, [activePoint,setActivePoint])
  
  
    const handlePointClick = (pointAngle: number, id: string) => {
      const targetAngle = -45;
      let newRotation = targetAngle - pointAngle;
      setRotation(newRotation);
    setActivePoint(id)
    };
  
  return (
    <div>
      <div className='main-container'>
        <div className='horizontal-line'></div>
        <div className='vertical-line'></div>
        <h1 className='title'>Исторические <br />даты</h1>
        {/* <div className='circle'></div> */}
        <div className='circle-container'>
        <Circle rotation={rotation} handlePointClick={handlePointClick} />
        </div>
        {/* <ul>
          <li className='slider-item'>
            <div className='slider-year'>2015</div>
            <div className='slider-text'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</div>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default App;