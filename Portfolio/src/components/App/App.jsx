import './App.css'
import { Route, Routes } from '../../../node_modules/react-router-dom/dist/index';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App
