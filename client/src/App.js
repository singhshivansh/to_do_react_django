import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import About_us from './components/About_us';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact><Home /></Route>
      <Route path="/about_us"><About_us /></Route>
      <Route path="/gallery"><Gallery /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>

    </div>
  );
}

export default App;
