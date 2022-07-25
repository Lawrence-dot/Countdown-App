import React, { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/Home/Home.css'
import './App.css'
import Home from '../components/Home/Home'
import Favourite from '../components/Favourite/Favourite'
import Edit from '../components/Edit/Edit'
import Navbar from '../components/Layout/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export const NoteContext = createContext()



const App = props => {
  var spinner = document.getElementById('spinners');
  const [note, setNote] = useState([]);
  const [edit, setEdit] = useState([]);
  const [status, setStatus] = useState(true);

  setTimeout(()=>{
    if (spinner) {
      spinner.style.display = 'none';
    }
  }, 500)

  useEffect(()=>{
    setStatus(false);
    var vals = localStorage.getItem('notes');
    if (vals) {
        setNote(JSON.parse(vals));
    } else {
        setNote([]);
    }
  }, [])

   return ( 
    <NoteContext.Provider value={[note, setNote, edit, setEdit]}>
    <div className='App'>
      <div className="containers" id="spinners">
        <div className="loading">
          <span>
           <FontAwesomeIcon icon={faBook} />
          </span>
        </div>
      </div>
    </div>
    
    {!status &&(
      <div className='body-app animate_animated animate_fadeInUp animate_delay-5s'>
        <Router>
         <Navbar />
         <Routes>
           <Route path='/' 
           element={<Home />} 
           />

           <Route path='/edit' 
           element={<Edit />} 
           />

           <Route path='/favourite' 
           element={<Favourite />} 
           />
         </Routes>
     </Router>
      </div>
      )}
   </NoteContext.Provider>  
   )
  };

export default App;

