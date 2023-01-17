import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contatos from "./Pages/Contatos";
import Galeria from "./Pages/Galeria";
import Inicio from "./Pages/Inicio";

export default function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  )
}


// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edite <code>src/App.js</code> e salve para recarregar.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aprenda React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
