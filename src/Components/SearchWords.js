import axios from 'axios'
import React, { useEffect, useState } from 'react'


const SearchWords = () => {

const [BusquedaPorTitulo, setBusquedaPorTitulo] = useState([]);
const [Show, setShow] = useState('');
const datos = async(e) =>{
  e.preventDefault()
  await axios.get(`https://6243a5813da3ac772b04e2cd.mockapi.io/sessions=${busqueda}`)
  .then(response => response.json())
  .then(data => {
      
      const {Search} = data
      console.log(data)
      setBusquedaPorTitulo(Search)
      
      })
  
}
  return (
    <div>
      <h1>SearchWords</h1>
      </div>
  )
}

export default SearchWords


// function SearchWords() {
  
//      const [PalabrasBusqueda, setPalabrasBusqueda] = useState([]);
//      const [BusquedaPorTitulo, setBusquedaPorTitulo] = useState([]);
//      const [Show, setShow] = useState('');

//      const APIurl=async() =>{
//        await axios.get('https://6243a5813da3ac772b04e2cd.mockapi.io/sessions')
//        .then (response => {
//         setPalabrasBusqueda(response.data);
//         setBusquedaPorTitulo(response.data);
//        }). catch (error =>{
//          console.log(error);
//        })
//      }

//      useEffect(() => {
//        APIurl();
//      },[])

//      return (
//      <div>
//       <div className='table-responsive'/>
// <table className='table table-sm table-'
//     </div>
//   )
// }

// export default SearchWords









