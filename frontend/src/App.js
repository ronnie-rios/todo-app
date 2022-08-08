import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SinglePost from './Pages/SinglePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
