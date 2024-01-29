import { Grid, Button, Stack, Typography, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { useCartContext } from '@utils/CartContext';
import { useMakeOrderMutation } from '@generated/graphql';

gql`
  mutation MakeOrder($orderItems: [OrderItemInput!]!) {
    makeOrder(orderItems: $orderItems) {
      url
    }
  }
`;

export default function UserCart() {
  const [cartTotal, setCartTotal] = useState(0);

  const { cartList, clearCart, setCartList } = useCartContext();

  const [items, setItems] = useState(cartList);

  const [MakeOrder] = useMakeOrderMutation({
    onCompleted: () => {
      clearCart();
    },
  });

  const buyItems = async () => {
    const res = await MakeOrder({
      variables: {
        orderItems: cartList.map((item) => {
          return { prodId: item.product.id, quantity: item.quantity };
        }),
      },
    });

    console.log(res);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    window.location.replace(res.data?.makeOrder.url ?? window.location.origin);
  };

  useEffect(() => {
    const handlePrice = () => {
      let ans = 0;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < items.length; i++) ans += items[i].quantity * Number(items[i].product.price);
      setCartTotal(ans);
    };
    handlePrice();
  }, [items]);

  //dlaczego mnoży razy 3 xd bo mnozy razy ilosc elementow w koszyku - w ktorym miejscu? DZIAŁA!!!!!

  const handleAdding = (id: string) => {
    //1. find the item with provided id
    const currentAmountIndex = items.findIndex((el) => el.product.id === id);
    //2. change the amount
    const updatedAmount = Object.assign({}, items[currentAmountIndex]);
    updatedAmount.quantity += 1;
    //3. update the items list with updated amount
    const newItems = items.slice();
    newItems[currentAmountIndex] = updatedAmount;
    setItems(newItems);
    setCartList(newItems);
  };

  const handleSubstracting = (id: string) => {
    //1. find the item with provided id
    const currentAmountIndex = items.findIndex((el) => el.product.id === id);
    if (items[currentAmountIndex].quantity > 1) {
      //2. change the amount
      const updatedAmount = Object.assign({}, items[currentAmountIndex]);
      updatedAmount.quantity -= 1;
      //3. update the items list with updated amount
      const newItems = items.slice();
      newItems[currentAmountIndex] = updatedAmount;
      setItems(newItems);
      setCartList(newItems);
    }

    if (items[currentAmountIndex].quantity === 1) {
      setCartList(
        cartList.filter((cartProd) => {
          cartProd.product.id !== id;
        }),
      );
      setItems(
        cartList.filter((cartProd) => {
          cartProd.product.id !== id;
        }),
      );
    }
  };

  const listItems = items.map((el) => (
    <li key={el.product.id}>
      <Paper sx={{ width: 600, m: 4, borderRadius: 10 }} elevation={2} variant="outlined">
        <Grid padding={2} container>
          <Grid item xs={12} sm container borderRadius="50%">
            <img src={el.product.image ?? ''} width={150} height={60} />
          </Grid>
          <Grid item xs={12} sm container justifyContent="center" alignItems="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h5" sx={{ fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}>
                  {el.product.name}
                </Typography>
              </Grid>
              <Grid item direction="row" justifyContent="center" alignItems="center">
                <Button
                  className="bg-sky-500"
                  variant="contained"
                  style={{ maxWidth: '30px', maxHeight: '30px' }}
                  onClick={() => handleAdding(el.product.id)}
                >
                  +
                </Button>
                <Typography sx={{ fontWeight: 'bold' }}> {el.quantity} </Typography>
                <Button
                  className="bg-sky-500"
                  variant="contained"
                  style={{ maxWidth: '30px', maxHeight: '30px' }}
                  onClick={() => handleSubstracting(el.product.id)}
                >
                  -
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div">
              {el.product.price} zł
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </li>
  ));

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={6} justifyContent="center" alignItems="center" direction="row">
            <div>
              <ul>{listItems}</ul>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4} padding={2}>
          <Stack spacing={10} justifyContent="left" alignItems="left" direction="row" padding={4}>
            <Paper
              sx={{ width: 300, height: 200, m: 4, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
              elevation={2}
              variant="outlined"
            >
              <Grid item container direction="column" padding={4}>
                <Typography sx={{ fontWeight: 'bold' }}> Podsumowanie</Typography>
                <Typography sx={{ fontWeight: 'light' }}>Wartość produktów = {cartTotal.toFixed(2)} zł</Typography>
                <Typography sx={{ fontWeight: 'light' }}>{'Dostawa = ZA DARMO <3'}</Typography>
                <Typography sx={{ fontWeight: 'bold' }}> Suma całkowita = {cartTotal.toFixed(2)}</Typography>
                <Button
                  className="mb-2 bg-sky-500"
                  variant="contained"
                  style={{ maxWidth: '300px', maxHeight: '30px' }}
                  onClick={buyItems}
                >
                  Przejdź do płatności
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    clearCart();
                    setItems([]);
                  }}
                  style={{ maxWidth: '300px', maxHeight: '30px', marginTop: '5px' }}
                >
                  Wyczyść koszyk
                </Button>
              </Grid>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
