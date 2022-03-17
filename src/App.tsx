import React from 'react';

import Header from './views/header/index';
import Global from './style/global';
import Main from './views/main/index';
import Formulario from './views/formulario';
import Footer from './views/footer';
function App() {
  return (
    <div className="App">
      <Global/>
      <Header/>
      <Main/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
