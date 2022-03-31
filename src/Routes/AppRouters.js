
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import BarraDeNav from "../Components/BarraDeNav";
import Cards from "../Components/Cards";




export default function AppRouters () {
        return (
           <BrowserRouter>
           <BarraDeNav/>
           <Routes>
               
               <Route path="/Cards" element = {<Cards/>}/> 
           </Routes>
           </BrowserRouter>
        )
    }

