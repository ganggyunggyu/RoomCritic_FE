import React from 'react';

export default function Banner() {
  return (
    <div className="flex justify-around bg-red-400 text-slate-50 w-screen">
      <div className="w-7/12 h-72 text-xl flex flex-col justify-center flex-none gap-3 transition-all">
        <p className="text-3xl">Room Critic = 방구석 평론가</p>
        <p>Room = 방</p>
        <p>Critic = 평론가</p>
      </div>
    </div>
  );
}
