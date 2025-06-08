import { useEffect, useRef } from "react";
import gsap from "gsap";
import { categorizedEvents } from "./data";

interface YearAnimationProps {
  activePoint: string;
}

export const YearAnimation: React.FC<YearAnimationProps> = ({
  activePoint,
}) => {
  const beginYearRef = useRef<HTMLDivElement>(null);
  const finalYearRef = useRef<HTMLDivElement>(null);
  const prevBeginYear = useRef<number | null>(null);
  const prevFinalYear = useRef<number | null>(null);

  useEffect(() => {
    if (!categorizedEvents?.[activePoint]) return;

    const beginYear = categorizedEvents[activePoint][0]?.year;
    const finalYear = categorizedEvents[activePoint].at(-1)?.year;

    if (beginYearRef.current && beginYear !== undefined) {
      const currentYear = prevBeginYear.current ?? beginYear;
      const duration = Math.min(2, Math.abs(beginYear - currentYear) * 0.1);

      gsap.fromTo(
        beginYearRef.current,
        { textContent: currentYear },
        {
          textContent: beginYear,
          duration: duration,
          snap: { textContent: 1 },
          ease: "power1.out",
          onUpdate: function () {
            if (beginYearRef.current) {
              const value = Math.floor(
                parseFloat(this.targets()[0].textContent)
              );
              beginYearRef.current.textContent = value.toString();
            }
          },
          onComplete: () => {
            prevBeginYear.current = beginYear;
          },
        }
      );
    }

    if (finalYearRef.current && finalYear !== undefined) {
      const currentYear = prevFinalYear.current ?? finalYear;
      const duration = Math.min(2, Math.abs(finalYear - currentYear) * 0.1);

      gsap.fromTo(
        finalYearRef.current,
        { textContent: currentYear },
        {
          textContent: finalYear,
          duration: duration,
          snap: { textContent: 1 },
          ease: "power1.out",
          onUpdate: function () {
            if (finalYearRef.current) {
              const value = Math.floor(
                parseFloat(this.targets()[0].textContent)
              );
              finalYearRef.current.textContent = value.toString();
            }
          },
          onComplete: () => {
            prevFinalYear.current = finalYear;
          },
        }
      );
    }
  }, [activePoint]);

  return (
    <div className="circle-year-wrapper">
      <div className="circle-year-begin" ref={beginYearRef}>
        {prevBeginYear.current?.toString() ??
          categorizedEvents?.[activePoint]?.[0]?.year?.toString() ??
          ""}
      </div>
      <div className="circle-year-final" ref={finalYearRef}>
        {prevFinalYear.current?.toString() ??
          categorizedEvents?.[activePoint]?.at(-1)?.year?.toString() ??
          ""}
      </div>
    </div>
  );
};
