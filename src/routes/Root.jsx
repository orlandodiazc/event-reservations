import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
export default Root;
