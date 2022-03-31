
import React, { useEffect } from 'react'

const getCardss = () => {
  const url = 'https://6243a5813da3ac772b04e2cd.mockapi.io/sessions'
   const fetchApi = async () => {
       const response = await fetch (url)
       console.log (response.statusText)
   }
   useEffect(() => {
       fetchApi()
   }, [])
  return(
      <div>
          <h1>Hola!</h1>
      </div>
  )
}

export default getCardss

