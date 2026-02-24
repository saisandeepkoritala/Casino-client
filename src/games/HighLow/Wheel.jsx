export const Wheel = ({ numbers, rotation, size }) => {
  const radius = size / 2;
  const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

  const getColor = (num) => {
    if (num === 0) return "#065f46"; // Emerald/Green
    return redNumbers.includes(num) ? "#991b1b" : "#171717"; // Red vs Black
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
      className="relative rounded-full border-[10px] border-[#b45309] shadow-[0_0_40px_rgba(0,0,0,0.8),_inset_0_0_20px_rgba(0,0,0,0.5)] bg-neutral-900"
      style={{
        width: size + 20,
        height: size + 20,
        transition: "transform 4s cubic-bezier(0.1, 0, 0.1, 1)",
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg width={size} height={size} className="overflow-visible translate-x-[0px] translate-y-[0px]">
        {numbers.map((num, index) => (
          <path
            key={index}
            d={createPath(index, numbers.length)}
            fill={getColor(num)}
            stroke="#262626"
            strokeWidth="0.5"
          />
        ))}

        {numbers.map((num, index) => {
          const angle = (360 / numbers.length) * index - 90 + (360 / numbers.length) / 2;
          const rad = (angle * Math.PI) / 180;
          const x = radius + (radius - 25) * Math.cos(rad);
          const y = radius + (radius - 25) * Math.sin(rad);
          
          return (
            <text
              key={index}
              x={x}
              y={y}
              fill="white"
              fontSize="11"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
            >
              {num}
            </text>
          );
        })}
      </svg>
      {/* Decorative Center Piece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-full border-4 border-[#b45309] shadow-lg" />
    </div>
  );
};