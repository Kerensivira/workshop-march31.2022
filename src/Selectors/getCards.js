import axios from "axios";

export const getCards = async () => {

    const peticion = axios.get('https://6243a5813da3ac772b04e2cd.mockapi.io/sessions')
console.log(peticion)
}

