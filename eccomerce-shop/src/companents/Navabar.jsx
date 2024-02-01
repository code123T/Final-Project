import React,{ useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navabar = ({searchbtn}) => {
  const[search,setSearch]=useState()
  return (
    <>
      <div className='main-header'>
        <div className='container'>
          <div className='logo'>
            <img src='./img/logo.svg'></img>
          </div>
          <div className='search-box'>
            <input type='text' placeholder='Enter The Product Name' value={search} autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={()=> searchbtn (search)}>Search</button>
          </div>
          <div className='icon'>
            <div className='acount'>
              <div className='user-icon'>
                <FaRegUser />
              </div>
              <div className='tp-header-login-content d-none d-xl-block'>
                <span>Saaalaaam ,Sig in</span>
                <h5 className='tp-header'>Your Account</h5>
              </div>
            </div>
            <div className='second-icon'>
              <Link to="/" className='link'><CiHeart /></Link>
              <Link to="/cart" className='link'><IoBagOutline /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navabar