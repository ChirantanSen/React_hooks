import React from 'react'
import '../welcomepage/welcome_style.css'
import '../../../layout/common_css/common.css'
import herobg from '../../../assets/image/banner/hero-bg.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from '../../../layout/header/header'
// import { Button } from '@mui/material'


function Welcome() {
  return (
   <>
    {/* <Header/> */}

       <section class="banner">
      <div class="background-img">
        <img src={herobg} alt="" />
      </div>
      <div class="banner-wrap">
        <div class="container">
          <div class="banner-text">
            <h1>Welcome to <span> Your Website </span></h1>
            <p>
             If You Have an account LogIn if don't Please Register
            </p>
          </div>
          <div class="start-zone">
            <Link to="/auth/login">
                <button class="btn zap">Log In</button>
            </Link>
            <Link to="/auth/register">
                <button class="btn">Register</button>

            </Link>
          </div>
        </div>
      </div>
    </section>
       
   </>
  )
}

export default Welcome
