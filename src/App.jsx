// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }

    /* -- Text effect -- */

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let interval = null;

    document.querySelector("h1").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  }, [])
  
  return (
    <div>
      <body>
        <div id="blob"></div>
        <div id="blur">
          <div className='flex justify-center items-center w-full h-screen'>
            <p className='text-gray-400/50 w-1/2 mt-56'>
              _________________________________
              <br />
              <span className='font-bold my-5 text-white animate-pulse'>coming soon</span>
              <br />
            </p>
          </div>
        </div>
        <h1 data-value="kolom.ai">kolom<span className='text-blue-500'>.ai</span></h1>
      </body>
    </div>
  )
}

export default App
