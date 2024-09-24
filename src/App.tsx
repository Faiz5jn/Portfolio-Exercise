import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App