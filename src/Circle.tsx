import React from 'react';
import { points } from './data';

interface CircleProps {
  rotation: number;        
  handlePointClick: (pointAngle: number, id: string) => void; 
}

const Circle: React.FC<CircleProps> = ({rotation, handlePointClick}) => {

  return (
     <>
	  <div 
        className="circle" 
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {points.map((point) => (
          <div
            key={point.id}
            className={`point point-visible`}
            style={{
              transform: `rotate(${point.angle}deg) translate(15vw) rotate(${-point.angle}deg)`,
            }}
            onClick={() => handlePointClick(point.angle, point.id)}
          >
			<span style={{ transform: `rotate(${-rotation}deg)` }}>
              {point.place}
			<span className='point-name'>{point.name}</span>
            </span>
            </div>
        ))}
      </div>
		<div className='circle-year-wrapper'>
			<div className='circle-year-begin'>2003</div>
			<div className='circle-year-final'>2010</div>
		</div>
	 </>
  );
};

export default Circle;