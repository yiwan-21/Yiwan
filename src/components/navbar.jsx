import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Button from './button'

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);

  const navRef = useRef();
  const navMenuRef = useRef();

  function toggleMenu() {
    if (activeNav) {
      setActiveNav(false);
    } else {
      setActiveNav(true);
    }
  }

  // md: = 768px
  const BREAKPOINT = 768;
  function handleResize() {
    if (window.innerWidth > BREAKPOINT) {
      setActiveNav(false);
    }
  }

  const SLIDE_DELAY = 150;

  // showing the menu in mobile view
  useEffect(() => {
    // to avoid activating the effect onload
    if (activeNav === null) {
      return;
    }
    window.addEventListener("resize", handleResize);
    const navItems = navMenuRef.current.childNodes;

    if (activeNav) {
      // the menu items are hidden at the left side of the screen
      navItems.forEach((item) => {
        item.classList.add("-translate-x-[100vw]");
      })

      // the menu background is shown
      navRef.current.classList.add("showVerticalNav");
      // the menu items are shown one by one
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("-translate-x-[100vw]");
        }, SLIDE_DELAY * index);
      })

    } else {
      // the menu items are moving out of the screen one by one
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("-translate-x-[100vw]");
        }, SLIDE_DELAY * index);
      })
      
      setTimeout(() => {
        //** to avoid the bug that the nav menu is closed after quickly opening the menu after closing it */ 
        if (navItems[0].classList.contains("-translate-x-[100vw]")) {
          // the menu background is hidden
          navRef.current.classList.remove("showVerticalNav");
          //** to avoid the bug that the menu items are not visible when resizing the window */ 
          navItems.forEach(item => item.classList.remove("-translate-x-[100vw]"))
        }
      }, SLIDE_DELAY * (navItems.length + 2))
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [activeNav]);

  return (
    <div>
      <header className="fixed overflow-y-auto bg-slate-700 hidden md:flex justify-center md:justify-end items-start md:w-full py-4 md:pb-0 md:pr-20 z-20" ref={navRef}>
        <nav className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-[12vh] md:mt-0" ref={navMenuRef}>
          <div className=" text-green-300 hover:text-white transition-all duration-300 ease-in-out">
            <Link to="/" className="px-4 md:px-0">Home</Link>
          </div>
          <div className=" text-green-300 hover:text-white transition-all duration-300 ease-in-out">
            <Link to="/about" className="px-4 md:px-0">About</Link>
          </div>
          <div className=" text-green-300 hover:text-white transition-all duration-300 ease-in-out">
            <Link to="/skills" className="px-4 md:px-0">Skills</Link>
          </div>
          <div className=" text-green-300 hover:text-white transition-all duration-300 ease-in-out">
            <Link to="/achivements" className="px-4 md:px-0">Achivements</Link>
          </div>
          <div className="transition-all duration-300 ease-in-out">
            <Link to={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank">
              <Button text="Resume" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="fixed flex md:hidden w-20 justify-center pt-4 z-30">
        <div className="cursor-pointer text-2xl text-green-300 bg-slate-800 border-2 border-slate-800 rounded-sm 
          transition hover:bg-slate-600 hover:border-slate-600"
          onClick={toggleMenu}>
        {
          activeNav ?
          <AiOutlineClose className=""/>
          :
          <AiOutlineMenu className="p-0.5"/>
        }
        </div>
      </div>
    </div>
  )
}

export default Navbar