import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import { FormModalProvider } from './context/FormModalContext';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import './index.css';

function App() {
  return (
    <FormModalProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}

export default App;
