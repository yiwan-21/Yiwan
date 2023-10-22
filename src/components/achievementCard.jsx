import React from 'react'

function AchievementCard({ imgSrc, title, description, year, award }) {
  return (
    <div className="flex flex-col items-center border rounded-md shadow-md shadow-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-600 hover:border-green-300 hover:text-green-300 hover:scale-105">
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      {
        imgSrc &&
        <img src={imgSrc} alt={title} className="w-full rounded-sm mt-4" />
      }
      <div className="flex flex-col items-start p-4 select-none">
        <p className="text-sm mb-2">{description}</p>
        <p className="text-sm">Year: <span className="font-bold text-base">{year}</span></p>
        <p className="text-sm">Award: <span className="font-bold text-base">{award}</span></p>
      </div>
    </div>
  )
}

export default AchievementCard