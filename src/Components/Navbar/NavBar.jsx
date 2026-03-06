import React, { useState,useRef,useEffect } from 'react'
import Styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const menuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={Styles.navbar} ref={menuRef}>
      <h2 className={Styles.logo}>DesignAgency</h2>

      {/* Hamburger */}
      <div 
        className={Styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes/>: <FaBars/>}
      </div>

      {/* Links */}
      <div className={`${Styles.links} ${menuOpen ? Styles.showMenu : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? Styles.active : Styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? Styles.active : Styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? Styles.active : Styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? Styles.active : Styles.link
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar