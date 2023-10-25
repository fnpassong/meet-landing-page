import { Routes, Route } from 'react-router-dom';


import './App.scss'
import Home from './pages/Home';
import { Fragment } from 'react';
import Public from './layout/Public';


function App() {
  

  return (
    <Fragment>
      
    <Routes>
      <Route path='/' element= {<Public/>} >

        <Route index element={<Home/>} /> 

      </Route>
    </Routes>



    </Fragment>
  )
}

export default App
