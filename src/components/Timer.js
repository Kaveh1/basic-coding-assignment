import {React, useState, useEffect} from 'react'

const Timer = ({props}) => {
  const [seconds, setSeconds ] =  useState(props);
  
  useEffect(()=>{
    let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(myInterval)
        }
      }, 1000)
      
      return ()=> {
        clearInterval(myInterval);
      };
    });

    return (
      <>
        { seconds === 0 ? null : <h1> {seconds}s</h1>}
      </>
    )
}

export default Timer;
