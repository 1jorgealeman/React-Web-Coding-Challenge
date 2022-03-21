import React from 'react';
import './App.scss';
import BarraPrincipal from"./component/BarraPrincipal/BarraPrincipal"
import FiltroBusqueda from "./component/FiltroBusqueda/FiltroBusqueda";
import ContenidoDeRobos from "./component/ContenidoDeRobos/ContenidoDeRobos"
import Paginacion from "./component/Paginacion/Paginacion"
import config from "./config/therme.json"
function App() {
  const stColor={
    backgroundColor: config.threme1.second,
    minHeight:"100vh"
  }
  return (
    <div style={stColor}>
      <BarraPrincipal/>
      <FiltroBusqueda/>
      <ContenidoDeRobos/>
      <Paginacion/>
    </div>
  );
}

export default App;
