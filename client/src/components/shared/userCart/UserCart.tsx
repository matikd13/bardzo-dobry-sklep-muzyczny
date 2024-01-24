import { Grid, Button, Stack, TextField, listItemClasses} from '@mui/material';
import { useState, useEffect, useContext, useReducer } from 'react';

export default function UserCart() {

    const [cartTotal, setCartTotal] = useState(0);
    const items = [
      {
        itemPrice: 100, //tu trzeba z bazy pobrac?
        amount: 3,
        id: 1,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      },
      {
        itemPrice: 200, 
        amount: 3,
        id: 2,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      },
      {
        itemPrice: 100, 
        amount: 3,
        id: 3,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      }
    ];

    const handlePrice = ()=>{
      
      let ans = 0;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < items.length; i++) {
        items.map((item)=> {
            ans += items[i].amount * items[i].itemPrice;
          }
        )};
      setCartTotal(ans);
  }
      //kurwa mnoży razy 3 xd
      
      const handleChange = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        let ans = items[id].amount;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ans += items[id].amount;

      }

      useEffect(() => {
        handlePrice();
      }, [items]);

      //to dodawanie tych produktow trzeba zrobic :((
  
  

  const listItems = items.map((el) => 
      <li key={el.id}>
        <Stack direction="row" spacing={2}>
      <p> {el.title} </p>
      <p> {el.itemPrice} zł </p>
      <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} >+</Button>
      <p> {el.amount} </p>
      <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} >-</Button>
      <img src={el.imgURL} width={60} height={60} />
      </Stack>
      </li>
  ); 
    

    return (
      <>
        <Grid container direction="row" my={4} justifyContent="center" alignItems="flex-start" spacing={2} >
            <Stack spacing={2} alignItems="center">
              <Stack direction="row" spacing={2}>
               <ul>{listItems}</ul>
              </Stack>
                <div className='total'>
                  <span> Podsumowanie Twojego koszyka</span>
                  <span> = {cartTotal} zł</span>
                </div>
            </Stack>
        
        </Grid>
        </>
    );
  

}             







