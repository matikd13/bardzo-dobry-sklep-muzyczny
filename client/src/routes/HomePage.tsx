import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import ProductsList from './layouts/ProductsList/ProductsList';

export default function HomePage() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <ProductsList />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
