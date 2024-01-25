import { Grid, Button, Stack, TextField, listItemClasses} from '@mui/material';
import { useState, useEffect, useContext, useReducer } from 'react';

export default function UserCart() {

    const [cartTotal, setCartTotal] = useState(0);
    const [items, setItems] = useState([
      {
        itemPrice: 100, //tu trzeba z bazy pobrac?
        itemAmount: 0,
        id: 1,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      },
      {
        itemPrice: 200, 
        itemAmount: 0,
        id: 2,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      },
      {
        itemPrice: 100, 
        itemAmount: 0,
        id: 3,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      },
      {
        itemPrice: 100, 
        itemAmount: 0,
        id: 3,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      }
    ]);

    useEffect(() => {
      //handleAdding(items: id);
      handlePrice();
      //handleSubstracting(items[id]);
    }, [items]);

    const handlePrice = ()=>{
      
      let ans = 0;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < items.length; i++) 
        ans += items[i].itemAmount * items[i].itemPrice;
      setCartTotal(ans);
  }
      //dlaczego mnoży razy 3 xd bo mnozy razy ilosc elementow w koszyku - w ktorym miejscu? DZIAŁA!!!!!
      
      const handleAdding = (id: number) => {
        //1. find the item with provided id
        const currentAmountIndex = items.findIndex((el) => el.id === id );
        //2. change the amount
        const updatedAmount = Object.assign({}, items[currentAmountIndex]);
        updatedAmount.itemAmount += 1;
        //3. update the items list with updated amount
        const newItems = items.slice();
        newItems[currentAmountIndex] = updatedAmount;
        setItems(newItems);
      }

      const handleSubstracting = (id: number) => {
        //1. find the item with provided id
        const currentAmountIndex = items.findIndex((el) => el.id === id );
        //2. change the amount
        const updatedAmount = Object.assign({}, items[currentAmountIndex]);
        updatedAmount.itemAmount -= 1;
        //3. update the items list with updated amount
        const newItems = items.slice();
        newItems[currentAmountIndex] = updatedAmount;
        setItems(newItems);
      }

     
  
  

  const listItems = items.map((el) => 
      <li key={el.id}>
        <Stack direction="row" spacing={2}>
      <p> {el.title} </p>
      <p> {el.itemPrice} zł </p>
      <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} onClick={() => handleAdding(el.id)} >+</Button>
      <p> {el.itemAmount} </p>
      <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} onClick={() => handleSubstracting(el.id)} >-</Button>
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
                <Button className="bg-sky-500" variant="contained" style={{maxWidth: '300px', maxHeight: '30px'}}>Przejdź do płatności</Button>
            </Stack>
        
        </Grid>
        </>
    );
  

}             







