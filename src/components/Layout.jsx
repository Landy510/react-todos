import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </AuthProvider>
    </div>
  )
}

export default Layout;