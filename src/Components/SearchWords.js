import axios from 'axios'
import React, { useEffect, useState } from 'react'


const SearchWords = () => {

const [BusquedaPorTitulo, setBusquedaPorTitulo] = useState([]);
const [Show, setShow] = useState('');
const datos = async(e) =>{
  e.preventDefault()
  await axios.get(`https://6243a5813da3ac772b04e2cd.mockapi.io/sessions=${Show}`)
  .then(response => response.json())
  .then(data => {
      
      const {Search} = data
      console.log(data)
      setBusquedaPorTitulo(Search)
      
      })

}

const actualizarEstado = e =>{
  setShow(e.target.value)
}

  return (
    <div className="">
        
    <form className="form-input" onSubmit={datos}>
        <input type="text" placeholder="buscar peliculas" onChange={actualizarEstado} />
        <button type="submit">Buscar</button>
    </form>

    <div className="resultados">
     {BusquedaPorTitulo.length === 0 ?  
    <p className="NoRes">Campo no encontrado</p>
    : BusquedaPorTitulo.map( BusquedaPorTitulo =>{
        return( 
        <Visualizacion name={BusquedaPorTitulo.title} description={BusquedaPorTitulo.description} />
    )})}
    </div>
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









