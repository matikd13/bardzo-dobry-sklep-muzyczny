import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex min-h-screen flex-col">
        <Footer />
      </div>
    </>
  );
}
