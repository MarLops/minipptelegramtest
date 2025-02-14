import './App.css';
import Home from './screens/Home';
import Earn from './screens/Earn';
import AirDrop from './screens/AirDrop';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <BottomNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earn' element={<Earn />} />
      </Routes>
    </Router>
  );
}

export default App;
