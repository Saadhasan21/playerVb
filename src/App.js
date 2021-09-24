
import Navbar from './components/Navbar';
import Tracks from './components/Tracks';
import Toggleform from './components/Toggleform';

import './App.css';
import Searchbar from './components/Searchbar';



function App() {
  return (
    <>

    <Navbar/>
    <Searchbar/>
    {/* <Tracks/> */}
    <div className="container"><Tracks/></div>

    <div className="d-flex justify-content-end my-2 mx-5"><Toggleform/></div>

    </>
    
  );
}

export default App;
