import { useState } from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([
    { title: 'Roksana Węgiel', price: '49,99 zł', img: 'dwd' },
    { title: 'Roksana Kręgiel', price: '42,99 zł', img: 'dwd' },
    { title: 'Roksana Dżnigiel', price: '43,99 zł', img: 'dwd' },
  ]);

  return (
    <>
      <div>
        <h1> Polecane </h1>
      </div>
    </>
  );
}
