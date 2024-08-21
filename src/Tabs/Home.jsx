import React from 'react'
import { CounterDown, CounterUp, LaRoseText, Loader, MiniNav, ModernBtn, SwitchCase } from '../LaRose'
import "./Home.css"
export default function Home() {
  return (
    <>
      <div className='HomeApp'>
        <LaRoseText>
          Welcome at LaRose.js Project
        </LaRoseText>
        <LaRoseText>
          <CounterUp start={0} end={1000} time={2} />
          <CounterDown start={1000} end={20} time={0.1} />
        </LaRoseText>
        <SwitchCase h={2} w={4} />
        <ModernBtn clickEvent={() => {
          window.open("https://github.com/hamdymohamedak/LaRose.js")
        }} w={6} h={4} title={"Repository"} color={"white"} allColor={"red"} hoverColor={"white"} />
        <MiniNav />
      </div>

    </>
  )
}
