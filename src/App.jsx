import React from 'react';
import Contador from './componentes/Contador/Contador';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </>
  )
}

export default App