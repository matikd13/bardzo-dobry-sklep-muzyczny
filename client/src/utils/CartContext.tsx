import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { ProductsList_ProductFragment } from '@generated/graphql';

type CartItem = {
  product: ProductsList_ProductFragment;
  quantity: number;
};

type CartContextValue = {
  cartList: CartItem[];
  addToCart: (product: ProductsList_ProductFragment) => void;
  clearCart: () => void;
  setCartList: (cartItems: CartItem[]) => void;
};

const CartContext = createContext<CartContextValue>({
  cartList: [],
  addToCart: () => {
    return;
  },
  clearCart: () => {
    return;
  },
  setCartList: () => {
    return;
  },
});

export default function CartProvider({ children }: PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [cartList, setCartList] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cartItems') ?? '[]'));

  console.log(cartList);

  const addToCart = (product: ProductsList_ProductFragment) => {
    if (cartList.find((oldProd) => oldProd.product === product))
      setCartList(cartList.map((prod) => (prod.product === product ? { product, quantity: prod.quantity + 1 } : prod)));
    else setCartList([...cartList, { product, quantity: 1 }]);
  };

  useEffect(() => localStorage.setItem('cartItems', JSON.stringify(cartList)), [cartList]);

  const clearCart = () => {
    localStorage.setItem('cartItems', '[]');
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ addToCart, cartList, clearCart, setCartList }}>{children}</CartContext.Provider>
  );
}

export function useCartContext(): CartContextValue {
  return useContext(CartContext);
}
