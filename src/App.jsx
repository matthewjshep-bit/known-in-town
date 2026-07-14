import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import ScrollToTop from './components/ScrollToTop';
import { FormModalProvider } from './context/FormModalContext';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import PortfolioPage from './pages/Portfolio';
import './index.css';

function App() {
  return (
    <FormModalProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}

export default App;
