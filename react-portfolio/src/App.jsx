import './App.css'
import { Outlet } from 'react-router-dom'
import SideBar from './Components/SideBar'
import { useEffect } from 'react'


function App() {
  
  useEffect(()=> {document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect()
    el.style.setProperty('--posX', x-l-w/2)
    el.style.setProperty('--posY', y-t-h/2)
  })},[])

  
  return (
    <>
      <div className="main">
        <SideBar />

        <Outlet/>

      </div>            
    </>
  )
}

export default App
