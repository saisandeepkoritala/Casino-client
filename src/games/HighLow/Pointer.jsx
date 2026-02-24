export const Pointer = () => (
  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
    {/* The Needle */}
    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[25px] border-t-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
    {/* Base of pointer */}
    <div className="w-2 h-2 bg-white rounded-full mt-[-5px]" />
  </div>
);