import { Grid, Button, Stack, TextField} from '@mui/material';
import { useState } from 'react';

export default function UserCart() {
  //zorbic z mapem zeby byla lista

  const [items, setItems] = useState(
    [
      {
        itemPrice: 100, //tu trzeba z bazy pobrac?
        amount: 3,
        id: 1,
        title: "dupa",
      },
      {
        itemPrice: 100, //tu trzeba z bazy pobrac?
        amount: 3,
        id: 1,
        title: "dupa",
      },
      {
        itemPrice: 100, //tu trzeba z bazy pobrac?
        amount: 3,
        id: 1,
        title: "dupa",
      }
    ]
  );

  const cart = {
    products: 0
  }
  
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(item.amount); 
  

  const handlePrice = () => {
    let ans = 0;
    ans += (items.amount * items.itemPrice);
    setPrice(ans);
  }

  const handleAdding = () => {
    let add = items.amount;
    add += 1;
    setAmount(add);
  } 

  const handleDeleting = () => {
    let del = items.amount;
    del -= 1;
    setAmount(del);
  }


  function Item() {
    return (
      <Stack direction="row" spacing={2}>
                          <img width="70" height="70"  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"/>
                          <p>{item.title}</p>
                          <p>{item.itemPrice}</p>
                          <Button onClick={handleAdding} className="bg-sky-500" variant="contained"> + </Button>
                          <p>{item.amount}</p>            
                          <Button onClick={handleDeleting} className="bg-sky-500" variant="contained"> - </Button>
                      </Stack>
    );
  }
// const handleRemoving



  
    return (
      <>
        <Grid container direction="row" my={4} justifyContent="center" alignItems="flex-start" spacing={2} >
                
                  <Stack spacing={2} alignItems="center">
                    <Stack direction="row" spacing={2}>
                      {items.map((item) => {
                          <Item itemPrice={ProductsList.itemPrice}></Item>
                      })}
                    </Stack>
                      <div className='total'>
                        <span> Podsumowanie Twojego koszyka</span>
                        <span> = {price}</span>
                      </div>
                    </Stack>
        
        </Grid>
        </>
    );
  

}             

    

  