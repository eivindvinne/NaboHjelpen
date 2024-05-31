import React from 'react'
import { Outlet, Link } from "react-router-dom";
import forside from "../components/assets/forside.png"

export default function Om() {
  return (
    <div>
    <div style={{
      position: "absolute", 
      height: "100%", 
      width: "100%", 
      backgroundImage: `url(${forside})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      filter: "blur(10px)", 
      zIndex: "-1",
      }}></div>
    <div >

      <nav style={{
        display: "flex", 
        Direction: "row"
      }}>
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="/om">Om</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <p style={{
          fontSize: "1.5vw",
          width: "40rem",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
  )
}
