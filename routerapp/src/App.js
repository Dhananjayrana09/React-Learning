import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import MainHeader from './Components/MainHeader';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/labs'>Labs</NavLink></li>
          <li><NavLink to='/support'>Support</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='support' element={<Support />} />
          <Route path='about' element={<About />} />
          <Route path='labs' element={<Labs />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
