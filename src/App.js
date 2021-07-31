import React from 'react';
import './App.css';
import Todolist from "./components/Todolist";
import Lists from './components/Lists';
import DisplayButton from './components/DisplayButton';
import DisplayStock from './components/DisplayStock';

const App = () => (

         <div>
            <DisplayStock />            
         </div>
  
   // <div class="container">
   //    <div class="row">
   //       <div class="col">
   //          <Todolist />
   //       </div>
   //       <div class="col">
   //          <Lists />            
   //       </div>
   //       <div class="col">
   //          {/* <h1>Under construction</h1>  */}
   //          <DisplayButton />  
   //       </div>
   //    </div>
   // </div>
      
   );

export default App;