import React from "react";

export const Wheel = ({ numbers, rotation, size }) => {
  const radius = size / 2;

  const redNumbers = [
    1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36
  ];

  const getColor = (num) => {
    if (num === 0) return "green";
    return redNumbers.includes(num) ? "red" : "black";
  };

  const createPath = (index, total) => {
    const angle = (2 * Math.PI) / total;
    const startAngle = angle * index - Math.PI / 2;
    const endAngle = startAngle + angle;
    const x1 = radius + radius * Math.cos(startAngle);
    const y1 = radius + radius * Math.sin(startAngle);
    const x2 = radius + radius * Math.cos(endAngle);
    const y2 = radius + radius * Math.sin(endAngle);
    return `M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 0,1 ${x2},${y2} Z`;
  };

  return (
    <div
      className="relative rounded-full border-4 border-white overflow-hidden"
      style={{
        width: size,
        height: size,
        transition: "transform 4s cubic-bezier(0.33, 1, 0.68, 1)",
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg width={size} height={size}>
        {numbers.map((num, index) => (
          <path
            key={index}
            d={createPath(index, numbers.length)}
            fill={getColor(num)}
            stroke="white"
            strokeWidth="1"
          />
        ))}

        {numbers.map((num, index) => {
          const angle = (360 / numbers.length) * index - 90 + (360 / numbers.length)/2;
          const rad = (angle * Math.PI)/180;
          const x = radius + (radius-30)*Math.cos(rad);
          const y = radius + (radius-30)*Math.sin(rad);
          return (
            <text
              key={index}
              x={x}
              y={y}
              fill="white"
              fontSize="12"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${-rotation}, ${x}, ${y})`}
            >
              {num}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
