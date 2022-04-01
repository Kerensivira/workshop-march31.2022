import styled from "styled-components";
import React, { useEffect, useState } from 'react';


const ContenedorFiltro = styled.div`
  display: flex;
`;
const ContenedorElementos = styled.div`
  
`;

const Elemento = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const BotonFiltro = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

const FiltradoFechas = () => {
    const [mapaOrdenado, setMapaOrdenado] = useState(new Map());
    const [gruposPorFecha, setGruposPorFecha] = useState([]);
    const [elementosAMostrar, setElementosAMostrar] = useState([]);

    function filtrar(grupo) {
        setElementosAMostrar(mapaOrdenado.get(grupo));
    }

    useEffect(() => {
        fetch('https://6243a5813da3ac772b04e2cd.mockapi.io/sessions')
        .then(res => res.json())
        .then(datos => {
            const mapaValores = new Map();
            datos.forEach(elemento => {
                const fechaElemento = elemento.date;//"2022-06-06T07:07:52.355Z"
                const fechaElementoSinHorasNiMinutos = fechaElemento.split('T')[0];//"2022-06-06"
                const llaveActualMapa = fechaElementoSinHorasNiMinutos.substring(0, 7);//"2022-06"
                let listaElementosMismaFecha = mapaValores.get(llaveActualMapa);//con la llave se obtiene la lista de elementos que tiene la misma llave
                if(!listaElementosMismaFecha){//si no existe la lista de elementos
                    listaElementosMismaFecha = [];//dicha lista se inicializa como un arreglo vacío
                    gruposPorFecha.push(llaveActualMapa);//dado que acá solo se ingresa una vez por llave (cuando no existe el valor), se agrega a la lista de grupos por Fecha
                }
                listaElementosMismaFecha.push(elemento);//a la lista de elementos de la misma fecha se le agrega el elemento actual
                mapaValores.set(llaveActualMapa, listaElementosMismaFecha);//se agrega (si no existe) o actualiza (si existe) el valor en el mapa para la llave(mes actual)
            });
            const mapaOrdenadoTemporal = ordenarMapaPorLLaves(mapaValores);//luego de iterar todos los valores de datos, se ordenan y asignan a la variable mapaOrdenadoTemporal
            setMapaOrdenado(mapaOrdenadoTemporal);//se actualiza el valor de mapaOrdenado
            setElementosAMostrar(mapaOrdenadoTemporal.get(gruposPorFecha[0]));//por defecto se muestran los elementos del primer grupo
        });
    }, []);

    function ordenarMapaPorLLaves(mapaValores){
        return new Map([...mapaValores.entries()].sort());
    }


    return (
        <div >
            
            <ContenedorFiltro>
                {gruposPorFecha.map(grupo => (
                    <div key={grupo} onClick={() => filtrar(grupo)} ><BotonFiltro  >{grupo}</BotonFiltro></div>
                ))}
            </ContenedorFiltro>  
            <ContenedorElementos>
                {elementosAMostrar.map(elemento => (
                        <div  key={elemento.title} >
                            <Elemento >Cargo {elemento.id} {elemento.title} {elemento.date}</Elemento></div>
                    ))}
            </ContenedorElementos>
        </div>
    )
}

export default FiltradoFechas;