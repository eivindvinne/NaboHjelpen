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
Nabohjelpen: Nettstedet hvor naboer møtes for å dele og hjelpe

På Nabohjelpen bringer vi naboer sammen for å gjøre livet litt lettere og samfunnet litt sterkere. Her kan du dele eller etterspørre hjelp med alt fra enkle hjemmeprosjekter til utlån av verktøy. Vi tror på kraften i lokalsamfunnet og ønsker å fremme et miljø der naboer ikke bare kjenner hverandre, men også støtter hverandre.

Del dine historier med oss - hvor naboer knyttes sammen for å låne en hjelpende hånd eller verktøy. Fortell oss gjerne om din reise, inspirasjoner eller det nabolaget du har bygget.        </p>
      </div>
    </div>
  </div>
  )
}
