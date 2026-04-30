import React from "react";

const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {[1,2,3,4,5,6].map((_, index) => (
        <div
          key={index}
          className="h-80 rounded-2xl bg-white/10 overflow-hidden relative"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      ))}

    </div>
  );
};

export default Skeleton;