import { Grid, Button, Stack, TextField, Card, Typography, CardActions, CardHeader, Paper} from '@mui/material';

import { useState, useEffect} from 'react';

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
        id: 4,
        title: "dupa",
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      }
    ]);

    useEffect(() => {
      handlePrice();
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
        if(items[currentAmountIndex].itemAmount > 0){
        //2. change the amount
        const updatedAmount = Object.assign({}, items[currentAmountIndex]);
        updatedAmount.itemAmount -= 1;
        //3. update the items list with updated amount
        const newItems = items.slice();
        newItems[currentAmountIndex] = updatedAmount;
        setItems(newItems);
      }}

 
  const listItems = items.map((el) => 
          
      <li key={el.id}>
         <Paper sx={{ width: 600, m: 4, borderRadius: 10 }} elevation={2} variant="outlined">
          <Grid padding={2} container>
            <Grid item xs={12} sm container borderRadius="50%">
             <img src={el.imgURL} width={150} height={60}  />
            </Grid>
          <Grid item xs={12} sm container justifyContent="center" alignItems="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant='h5' sx={{ fontWeight: 'bold', alignItems: "center", justifyContent: "center" }} >{el.title}</Typography>
              </Grid>
            <Grid item direction="row" justifyContent="center" alignItems="center">
              <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} onClick={() => handleAdding(el.id)} >+</Button>
              <Typography sx={{ fontWeight: 'bold'}}> {el.itemAmount} </Typography>
              <Button className="bg-sky-500" variant="contained" style={{maxWidth: '30px', maxHeight: '30px'}} onClick={() => handleSubstracting(el.id)} >-</Button>
           </Grid>
            </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div">{el.itemPrice} zł</Typography>
            </Grid>
            </Grid>

          </Paper>
      </li>
      
  ); 
    

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
                <Paper sx={{ width: 300, height: 180, m: 4, borderRadius: 10, justifyContent: "center", alignItems: "center"}} elevation={2} variant="outlined">
                  <Grid item container direction="column" padding={4}>
                    <Typography sx={{ fontWeight: 'bold'}}> Podsumowanie</Typography>
                    <Typography sx={{ fontWeight: 'light'}}>Wartość produktów = {cartTotal} zł</Typography>
                    <Typography sx={{ fontWeight: 'light'}}>Dostawa = ??</Typography>
                    <Typography sx={{ fontWeight: 'bold'}}> Suma całkowita = {cartTotal}</Typography>
                    <Button className="bg-sky-500" variant="contained" style={{maxWidth: '300px', maxHeight: '30px'}}>Przejdź do płatności</Button>
                  </Grid>
                </Paper>
                </Stack>
                
                </Grid>
                </Grid>
        
        
        </>
    );
  

}             







