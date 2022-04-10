import {
    BrowserRouter,
    Route
} from 'react-router-dom'
import Home from './pages/home';
import Register from './pages/Register/index';


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Route  path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
        </BrowserRouter>
    );
}