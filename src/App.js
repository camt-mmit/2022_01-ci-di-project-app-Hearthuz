import './App.css';
import { Routes, Route } from 'react-router-dom';
import AccessToken from './components/AccessToken';
import Books from './components/Books';
import Users from './components/Users';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccessToken />} />
      <Route path="/books" element={<Books />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
