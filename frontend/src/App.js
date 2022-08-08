import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SinglePost from './Pages/SinglePost';
import CreatePost from './Pages/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/:id' element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
