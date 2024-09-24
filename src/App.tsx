import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing';
import WebDesign from './pages/webdesign';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<WebDesign />} path="/webdesign" />
      </Routes>
    </BrowserRouter>
  );
}

export default App