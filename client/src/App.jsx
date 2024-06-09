// This is the root folder
// Bringing in the required import from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  //The Outlet component will conditionally swap betwene the different pages according ot the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
