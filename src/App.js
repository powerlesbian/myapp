import React from 'react';
import './App.css';
import Todolist from "./components/Todolist";
import Lists from './components/Lists';


const App = () => (
   // <div>
   // <Todolist />
   // <Lists />
   // </div>

   <div class="container">
      <div class="row">
         <div class="col">
            <Todolist />
         </div>
         <div class="col">
            <Lists />
         </div>
         <div class="col">
            <h1>Under construction</h1> 
         </div>
      </div>
   </div>
      
   );

export default App;