import { useState } from "react";
import { Point, points } from "./data";
import { YearAnimation } from "./Yearanimation";

interface CircleProps {
  rotation: number;
  handlePointClick: (point: Point) => void;
  activePoint: string;
}

const Circle: React.FC<CircleProps> = ({
  rotation,
  handlePointClick,
  activePoint,
}) => {
  const [activePointId, setActivePointId] = useState<string | null>(null);

  return (
    <>
      <div className="circle" style={{ transform: `rotate(${rotation}deg)` }}>
        {points.map((point) => (
          <div
            key={point.id}
            className={`point ${
              activePointId === point.id || activePoint === point.id
                ? "point-visible"
                : "point-hidden"
            } `}
            style={{
              transform: `rotate(${
                point.angle
              }deg) translate(15vw) rotate(${-point.angle}deg) rotate(${-rotation}deg)`,
            }}
            onClick={() => handlePointClick(point)}
            onMouseEnter={() => setActivePointId(point.id)}
            onMouseLeave={() => setActivePointId(null)}
          >
            <span
              className={`${
                activePointId === point.id || activePoint === point.id
                  ? ""
                  : "hidden"
              }`}
            >
              {point.place}
              <span
                className={`point-name ${
                  activePointId === point.id || activePoint === point.id
                    ? ""
                    : "hidden"
                }`}
              >
                {point.name}
              </span>
            </span>
          </div>
        ))}
      </div>
      <YearAnimation activePoint={activePoint} />
    </>
  );
};

export default Circle;
