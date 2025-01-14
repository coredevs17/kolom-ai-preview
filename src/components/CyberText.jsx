import React from 'react'

export default function CyberText() {
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
    <>    
        <div id="blob"></div>
        <div id="blur"></div>
        <h1 data-value="oonkoo">oonkoo</h1>
    </>
  )
}
