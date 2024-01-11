import './App.css'
import { Route, Routes } from '../../../node_modules/react-router-dom/dist/index';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/Contact';
import SkillsPage from '../SkillsPage/Skills';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App
