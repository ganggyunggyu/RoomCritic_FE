import React from 'react';

export default function Banner() {
  return (
    <div className="flex justify-around bg-red-400 text-slate-50 w-screen">
      <div className="h-72 text-xl flex flex-col justify-center flex-none gap-3 transition-all">
        <p className="text-3xl">나도 집에서 영화만 보면서 말이야</p>
        <p>평가만 하면서말야</p>
        <p>돈 벌고싶다 이말이야</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
