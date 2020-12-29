import React,{useState} from 'react';

import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

import './App.css';

function App() {
  // const [all, setAll] = useState(true);
  // const [isdone, setIsdone] = useState(false);
  // const [notdone, setNotdone] = useState(false);
  // const handelAll = () => {
  //   setAll(true);
  //   setIsdone(false);
  //   setNotdone(false)

  // }
  // const handelIsdone = () =>{
  //  setIsdone(true);
  //  setAll(false);
  //  setNotdone(false)
  // }
  // const handelNotdone = () => {
  //   setIsdone(false);
  //   setAll(false);
  //   setNotdone(true)
  // }
  return (
    <div>
      <AddTodo />
      <TodoList   />
    </div>
  );
}

export default App;
