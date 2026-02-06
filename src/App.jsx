import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import Header from './components/layout/header';
import { useState } from 'react';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
