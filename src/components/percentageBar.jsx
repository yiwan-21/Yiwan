import React, { useEffect } from 'react'

function PercentageBar({ text, percentage, bgColor }) {
  useEffect(() => {
    const percentageBar = document.querySelectorAll(`.animate-width-${percentage}`)
    percentageBar.forEach((bar) => {
      bar.style.width = "0"
      setTimeout(() => {
        bar.style.width = `${percentage}%`
      }, 400)
    })
  }, [])

  return (
    <div className="mb-8">
      <p className="text-slate-300 ml-1 mb-0.5">
        {text}
      </p>
      <div className="bg-slate-500 h-0.5 w-full">
        <div 
          className={`${bgColor ? bgColor : "bg-green-400"} animate-width-${percentage} h-full transition-all duration-1000 ease-in-out`} 
          ></div>
      </div>
    </div>
  )
}

export default PercentageBar