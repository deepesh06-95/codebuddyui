
import './App.css';
import { CCarousel } from './components/carousel';
import { Navbar } from './components/navbar';
import { Search } from './components/search';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Search/>
     <CCarousel/>
    </div>
  );
}

export default App;
