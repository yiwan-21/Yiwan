import React from 'react'

function Button({ text }) {
  return (
    <button className="border border-green-300 rounded-sm bg-slate-700 text-green-300 text-sm w-fit px-4 py-3 
      hover:border-white hover:text-white transition-all duration-300 ease-in-out">
      {text}
    </button>
  )
}

export default Button