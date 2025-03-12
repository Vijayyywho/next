import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[6rem]">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-full border border-gray-200 rounded-lg shadow-md p-4"
        >
          {/* Image Skeleton */}
          <Skeleton className="w-full h-48 rounded-md" />

          {/* Title Skeleton */}
          <Skeleton className="w-3/4 h-6 mt-4" />

          {/* Content Skeleton */}
          <Skeleton className="w-full h-4 mt-2" />
          <Skeleton className="w-5/6 h-4 mt-2" />

          {/* Author Info Skeleton */}
          <div className="flex items-center mt-4 space-x-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex flex-col space-y-1">
              <Skeleton className="w-20 h-4" />
              <Skeleton className="w-16 h-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
