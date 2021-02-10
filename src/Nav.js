import React, { useState,useEffect } from 'react';
import "./Nav.css";

function Nav() {
const [show,handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY >100) {
        handleShow(true);
    }else{
        handleShow(false);
       
    }
}
useEffect(() => {
  window.addEventListener("scroll",transitionNavBar);
  return () => window.removeEventListener("scroll",transitionNavBar)
}, []);

    return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img
        className='nav__logo'
         src='http://pngimg.com/uploads/netflix/netflix_PNG6.png'
         alt=''
         />

         <img 
         className='nav__avatar'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemS4QM144P3TW64aFMs11qtabOoW-d52Nww&usqp=CAU'
          alt=''
          />
         
        </div>
          
        </div>

    );
    }

export default Nav 
