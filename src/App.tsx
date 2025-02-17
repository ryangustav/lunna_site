import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Vip from './pages/Vip';
import LunnarCoins from './pages/LunnarCoins';
import PrivacyPolicy from './pages/PrivacyPolicy';

/**
 * Main application component that sets up the routing for the application.
 * Utilizes React Router for navigation between different pages including Home,
 * VIP section, Lunnar Coins, and Privacy Policy. Wraps the routes in a 
 * BrowserRouter with a RootLayout to manage the overall layout structure.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vip" element={<Vip />} />
          <Route path="/LunnarCoins" element={<LunnarCoins />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;