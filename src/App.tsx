import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import { categorizedEvents, Point, points } from "./data";
import Slider from "./Slider";

const App: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [activePoint, setActivePoint] = useState("literature");
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handlePointClick = (point: Point) => {
    const targetAngle = -45;
    let newRotation = targetAngle - point.angle;
    setRotation(newRotation);
    setActivePoint(point.id);
  };

  const handleClickRight = () => {
    const currentIndex = points.findIndex((point) => point.id === activePoint);
    if (currentIndex === -1 || currentIndex === points.length - 1) return;

    const nextIndex = currentIndex + 1;
    const nextPoint = points[nextIndex];

    setActivePoint(nextPoint.id);
    handlePointClick(nextPoint);

    setIsLeftDisabled(false);
    if (nextIndex === points.length - 1) {
      setIsRightDisabled(true);
    }
  };

  const handleClickLeft = () => {
    const currentIndex = points.findIndex((point) => point.id === activePoint);
    if (currentIndex === -1 || currentIndex === 0) return;

    const prevIndex = currentIndex - 1;
    const prevPoint = points[prevIndex];

    setActivePoint(prevPoint.id);
    handlePointClick(prevPoint);

    setIsRightDisabled(false);
    if (prevIndex === 0) {
      setIsLeftDisabled(true);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
        <h1 className="title">
          Исторические <br />
          даты
        </h1>
        <div className="circle-container">
          <Circle
            rotation={rotation}
            handlePointClick={handlePointClick}
            activePoint={activePoint}
          />
        </div>
        <div className="circle-wrapper"></div>
        <div className="sliders-wrapper">
          <div className="circle-counter-wrapper">
            <p className="circle-counter">
              0{points.findIndex((point) => point.id === activePoint) + 1}/04
            </p>
            <div className="circle-buttons-wrapper">
              <button
                className={`round-button btn-left ${
                  isLeftDisabled ? "not-active" : ""
                }`}
                onClick={() => handleClickLeft()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1 1L6 6L1 11"
                    stroke="rgba(66, 86, 122, 1)"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                className={`round-button btn-right ${
                  isRightDisabled ? "not-active" : ""
                }`}
                onClick={() => handleClickRight()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1 1L6 6L1 11"
                    stroke="rgba(66, 86, 122, 1)"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Slider activePoint={activePoint} />
          {/* <ul>
          <li className='slider-item'>
            <div className='slider-year'>2015</div>
            <div className='slider-text'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</div>
          </li>
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default App;
