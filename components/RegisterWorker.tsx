'use client'

import { useEffect } from "react"

function RegisterWorker(){
    useEffect(()=>{
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('/sw.js')
              .then((registration) => console.log('scope is: ', registration.scope));
          }
    },[])

    return null
}

export default RegisterWorker