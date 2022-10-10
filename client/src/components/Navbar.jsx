import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";
import logo from '../../images/images/logo.png';
import UAuth from "@uauth/js";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
const uauth = new UAuth({
  clientID: "bbe8f08a-dd77-4a01-b02c-1b30844650b9",
  redirectUri: "http://localhost:3000",
});

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = React.useState(false);
    const [Uauth, setUauth] = useState();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);

      // eslint-disable-next-line no-undef
      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logOut();
  }
  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }


    return (
       <nav className='w-full flex md:justify-center justify-between items-center p-4' >
         <div className='md:flex-[0.5] flex-initial justify-center items-center' >
            <img src={logo} alt='logo' className='w-32 cursor-pointer' />
         </div>
         <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial' >
         {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}

        <li >
        <button
              className="UDomain"
              style={{ height: "40px", fontSize: "10px" }}
              onClick={log}
            >
              {Uauth != null ? Uauth["sub"] : "Login with UNSD"}
            </button>
        </li>
         </ul>
         <div className='flex relative' >
          {toggleMenu
            ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false) } />
            : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true) }  />
          }
          {
            toggleMenu && (
              <ul
              className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justifu-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
              >
                <li className='text-xl w-full my-2' >
                  <AiOutlineClose onClick={() => setToggleMenu(false) } />
                </li>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
        ))}
              </ul>
            )
          }
         </div>
       </nav>
    )
}

export default Navbar;

