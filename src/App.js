
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<h1>Home</h1>}/>

          / http://localhost:3000/react yazarak sayfaya gidebilirsiniz.
          <Route path={"/react"} element={<h1>React Page</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
