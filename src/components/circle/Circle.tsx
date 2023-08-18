import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./Circle.css";

interface CircleProps {
  value: number;
  maxValue: number;
  radius: number;
  strokeWidth: number;
  color: string;
  showPercent?: boolean;
  animationDuration?: number;
}

export const Circle: React.FC<CircleProps> = ({
  value,
  maxValue,
  radius,
  strokeWidth,
  color,
  showPercent = false,
  animationDuration = 3000,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  const percentage = (animatedValue / maxValue) * 100;
  const circumference = 2 * Math.PI * radius;

  const animation = useSpring({
    strokeDashoffset: (1 - percentage / 100) * circumference,
    numberValue: animatedValue,
    config: { duration: animationDuration },
  });

  if (inView && animatedValue < value) {
    setTimeout(() => {
      setAnimatedValue(value);
    }, 200);
  }

  return (
    <div ref={ref}>
      <svg width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
        />
        <animated.circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: animation.strokeDashoffset,
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
        <animated.text
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="middle"
          className="circle__text"
        >
          {animation.numberValue.to((val) =>
            showPercent ? `${Math.floor(val)}%` : Math.floor(val)
          )}
        </animated.text>
      </svg>
    </div>
  );
};
