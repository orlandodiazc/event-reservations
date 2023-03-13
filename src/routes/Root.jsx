import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const Root = () => (
  <div className="min-vh-100" style={{ backgroundColor: '#202020' }}>
    <NavigationBar />
    <div className="text-light">
      <Outlet />
    </div>
  </div>
);
export default Root;
