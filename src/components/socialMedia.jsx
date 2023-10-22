import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SocialMedia() {
  return (
    <div className="fixed w-20 bottom-0 text-slate-400 flex flex-col gap-y-4 items-center z-10
        after:border after:border-slate-400 after:h-10">
      <Link to="https://github.com/yiwan-21" target="_blank">
        <AiOutlineGithub className="text-2xl hover:text-slate-200" />
      </Link>
      <Link to="https://www.linkedin.com/in/yiwan21/" target="_blank">
        <AiOutlineLinkedin className="text-2xl hover:text-slate-200" />
      </Link>
      <Link to="https://www.instagram.com/_yiwan_/" target="_blank">
        <AiOutlineInstagram className="text-2xl hover:text-slate-200" />
      </Link>
    </div>
  )
}

export default SocialMedia