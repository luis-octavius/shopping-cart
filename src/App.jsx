import './App.css'
import { Outlet } from 'react-router';
import Navbar from './components/ui/Navbar';

function App () {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
