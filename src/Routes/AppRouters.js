
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import BarraDeNav from "../Components/BarraDeNav";
import Cards from "../Components/Cards";
import SearchWords from "../Components/SearchWords";




export default function AppRouters () {
        return (
           <BrowserRouter>
           <BarraDeNav/>
           <Routes>
               <Route path="/Cards" element = {<Cards/>}/> 
               <Route path="/SearchWords" element = {<SearchWords/>}/> 
           </Routes>
           </BrowserRouter>
        )
    }

