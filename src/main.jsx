import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MenuComponent from './components/MenuComponent';
import { RutasMasCortasComponent } from './components/RutasMasCortasComponent';
import { ProblemaDeLaMochilaComponent } from './components/ProblemaDeLaMochilaComponent';
import { ReemplazoDeEquiposComponent } from './components/ReemplazoDeEquiposComponent';
import { ArbolesBinariosComponent } from './components/ArbolesBinariosComponent';
import { SeriesDeportivasComponent } from './components/SeriesDeportivasComponent';
import { MultiplicacionDeMatricesComponent } from './components/MultiplicacionDeMatricesComponent';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<MenuComponent/>}/>
            <Route path='/rutas' element={<RutasMasCortasComponent/>}/>
            <Route path='/mochila' element={<ProblemaDeLaMochilaComponent/>}/>
            <Route path='/equipos' element={<ReemplazoDeEquiposComponent/>}/>
            <Route path='/arboles' element={<ArbolesBinariosComponent/>}/>
            <Route path='/series' element={<SeriesDeportivasComponent/>}/>
            <Route path='/matrices' element={<MultiplicacionDeMatricesComponent/>}/>
        </Routes>
        
        </BrowserRouter>
    </React.StrictMode>
)