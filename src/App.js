import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './Components/SignUp';
import { Login } from './Components/Login';
import { CreateNote } from './Components/createNote';
import { Notes } from './Components/Notes';
import { UpdateNote } from './Components/updateNote';
function App() {
  return (
    <div className="App">
      Notes App
      <Routes>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createnote' element={<CreateNote/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
        <Route path='/update/:id' element={<UpdateNote/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
