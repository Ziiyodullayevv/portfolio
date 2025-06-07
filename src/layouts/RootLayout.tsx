import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer />s */}
    </div>
  );
}
