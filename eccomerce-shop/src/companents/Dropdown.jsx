import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiStmicroelectronics } from "react-icons/si";
import { CiGift } from "react-icons/ci";
 import { IoMdArrowDropdown } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { LuSmartphone } from "react-icons/lu";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoCameraSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Shop } from './Shop';
import { Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='tp-header-bottom tp-header-bottom-border d-none d-lg-block'>
            <div className='container'>
              <div className='tp-mega-menu-wrapper p-relative'>
                <div className='row align-items-center'>
                  <div className='col-xl-3 col-lg-3'>
                    <div className='tp-header-category tp-category-menu tp-header-category-toggle'>
                      <button onClick={() => setIsOpen((prev) => !prev)} className='tp-category-menu-btn tp-category-menu-toggle'>
                        <span>
                          <FaBarsStaggered />
                          All Departments
                        </span>
                        < IoMdArrowDropdown  className='iconbtn'/> 
                      </button>
                      {isOpen && (
                        <nav className='tp-category-menu'>
                          <ul>
                            <li><a href="#"><span>< FaHome /></span>Home Arials</a></li>
                            <li><a href="#"><span><SiStmicroelectronics /></span>Electronies</a></li>
                            <li><a href="#"><span><CiGift /></span>Gifts</a></li>
                            <li><a href="#"><span><RiComputerLine /></span>Computers</a></li>
                            <li><a href="#"><span><LuSmartphone /></span>Smartphone</a></li>
                            <li><a href="#"><span><IoPlayCircleOutline /></span>TV,Music && Radio</a></li>
                            <li><a href="#"><span><IoCameraSharp /></span>Camera</a></li>
                            <li><a href="#"><span><CiFilter /></span>Filter</a></li>
                          </ul>
                        </nav>)
                      }
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6'>
                    <div className='main-menu menu-style-1'>
                      <nav className='tp-main-menu-content'>
                        <ul>
                          <li className='has-dropdown has-mega-menu'>
                            <Link to="Home">Home</Link>
                          </li>
                          <li className='has-dropdown has-mega-menu'>
                            <Link to="Shop">Shop</Link>
                          </li>
                          <li className='has-dropdown has-mega-menu'>
                           <Link to="About">About</Link>
                          </li>
                          <li className='has-dropdown has-mega-menu'>
                          <Link to="Contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3'>
                  <div className='tp-header-contact d-flex align-items-center justify-content-end'>
                    <div className='tp-header-contact-icon'>
                      <span><BsFillTelephoneFill /></span>
                    </div>
                    <div className='tp-header-contact-content'>
                      <h5>Hotline:</h5>
                      <p><a href="tel:402-763-282-46">+(402) 763 282 46</a></p>
                    </div>
                    <div className='auth'>
                    <button><CiLogout/></button>
                     <button> <CiLogin/></button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dropdown