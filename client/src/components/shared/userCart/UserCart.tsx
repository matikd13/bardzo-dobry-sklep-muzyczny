import { Grid, Button} from '@mui/material';
import { useState } from 'react';


export default function UserCart() {
  //zorbic z mapem zeby byla lista

  const item = {
    itemPrice: 100, //tu trzeba z bazy pobrac?
    amount: 3,
    id: 1,
    title: "dupa"
  }

  const cart = {
    products: 0
  }
  
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(item.amount); 
  

  const handlePrice = () => {
    let ans = 0;
    ans += (item.amount * item.itemPrice);
    setPrice(ans);
  }

  const handleAdding = () => {
    let add = item.amount;
    add += 1;
    setAmount(add);
  } 

  const handleDeleting = () => {
    let del = item.amount;
    del -= 1;
    setAmount(del);
  }
// const handleRemoving



  
    return (
      <>
        <Grid container direction="row" my={4} justifyContent="center" alignItems="flex-start" spacing={20} >
                <div className="cart_img">
                  <img width="50" height="50"  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"/>
                  <p>{item.title}</p>
                  <p>{item.itemPrice}</p>
                </div>
            <div>
              <Button onClick={handleAdding} className="bg-sky-500" variant="contained"> + </Button>
              <p>{item.amount}</p>            
              <Button onClick={handleDeleting} className="bg-sky-500" variant="contained"> - </Button>
            </div> 
        <div className='total'>
          <span> Podsumowanie Twojego koszyka</span>
          <span> = {price}</span>
        </div>
        </Grid>
        </>
    );
  

}             

    

  