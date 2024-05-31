import React from 'react'
import { Outlet, Link } from "react-router-dom";
import forside from "../components/assets/forside.png"
import { Button } from '@mui/material';

export default function Hjem() {
  return (
    <div style={{
      backgroundImage: `url(${forside})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}
    >
      {/* Hvis du skal lage navbar så må den være hær */}
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
        height: "30vh",
        fontSize: "8vw",
        textShadow: "0 0 3px #FFFFFF, 0 0 5px #FFFFFF",
        }}>
        NaboHjelpen
      </div>
      <div style={{display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        }}>
        <div style={{display: 'flex',
        justifyContent: "space-evenly",
        width: "500px",
        }}>
        
        <button>Be om hjelp</button>
        <button>Tilby hjelp</button>
        </div>
      </div>
    </div>
  )
};

