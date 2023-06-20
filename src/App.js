import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Retrieve from './components/Retrieve';
import TableInfo from './components/TableInfo';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<TableInfo/>}/>
        <Route path='/retrieve' element={<Retrieve/>}/>
      </Routes>
    </div>
  );
}

export default App;
