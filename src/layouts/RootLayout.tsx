import { Outlet } from 'react-router-dom';
import Nav from '../components/NAv';

/**
 * The root layout component for the app.
 *
 * This component renders the navigation bar and the main outlet for the app's routes.
 *
 * @returns {JSX.Element} The JSX element for the root layout.
 */
const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#16161a]">
      <Nav />
      <Outlet />
    </div>
  );
};

export default RootLayout;