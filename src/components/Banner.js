import React from 'react';

export default function Banner() {
  return (
    <div className="flex justify-around bg-red-400 text-slate-50 w-screen">
      <div className="md:w-7/12 w-10/12 md:h-60 py-3 flex flex-col justify-center gap-3 transition-all">
        <p className="md:text-3xl text-md">Room Critic = 방구석 평론가</p>
        <p className="text-sm md:text-lg">Room = 방</p>
        <p className="text-sm md:text-lg">Critic = 평론가</p>
      </div>
    </div>
  );
}
