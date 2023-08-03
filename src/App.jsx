import React from "react";
import { Routes , Route } from "react-router-dom";

import Input from "./page/input"
import Main from "./page/Main"
import Navebar from "./components/Navebar";

const App = () => {
  return(
    <>
      <Navebar />
      <Routes>
      <Route path='/' element={<Main />} />
        <Route path='/input' element={<Input />} />
      </Routes>
    
    </>
  )
}

export default App