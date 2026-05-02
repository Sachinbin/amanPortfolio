import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white/10 p-4 overflow-hidden relative">
      
      {/* Image Skeleton */}
      <div className="h-40 w-full rounded-xl bg-white/10 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Title Skeleton */}
      <div className="h-4 w-3/4 rounded-md bg-white/10 mb-3 relative overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full rounded-md bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="h-3 w-5/6 rounded-md bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      

    </div>
  );
};

export default SkeletonCard;