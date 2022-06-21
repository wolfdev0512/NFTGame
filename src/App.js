import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="mx-auto">
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
