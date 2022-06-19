import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";

import In from './Pages/In/index';
import Login from './Pages/Login/index';

export default function Rotas() {
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<In />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
  }
  