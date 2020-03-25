import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListHeader from './ToDoListHeader';
import ToDoList from './ToDoList';

function App() {

  return (
    <div className="App">
      <ToDoListHeader />
      <ToDoList/>
    </div>
  );
}

export default App;
