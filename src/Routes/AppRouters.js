
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import BarraDeNav from "../Components/BarraDeNav";
import Cards from "../Components/Cards";
import getCards from "../Selectors/getCards";




export default function AppRouters () {
        return (
           <BrowserRouter>
           <Routes>
               <Route path="/" element = {<BarraDeNav/>}/> 
               <Route path="/Cards" element = {<Cards/>}/> 
               <Route path="/GetCards" element = {<getCards/>}/>
           </Routes>
           </BrowserRouter>
        )
    }

