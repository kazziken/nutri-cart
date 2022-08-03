import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CartCard({id, name, displayCarts, setDisplayCarts, time}) {

  function onDelete(){

    setDisplayCarts((displayCarts.filter(cart => cart.id !== id)))
    fetch((`/carts/${id}`), 
    {method: 'DELETE'}).then(res => res.json())
      
  }

  return (
    <div>
      <TableContainer component={Paper} id="tableContainer">
      <p id="time">Created on {time}</p>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Saturated Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Cholesterol&nbsp;(g)</TableCell>
              <TableCell align="right">Fiber&nbsp;(g)</TableCell>
              <TableCell align="right">Sodium&nbsp;(g)</TableCell>
              <TableCell align="right">Sugar&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Potassium&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {name.map((food) => (
              <TableRow
                key={food.food_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {food.food_name}
                </TableCell>
                <TableCell align="right">{food.nf_calories}</TableCell>
                <TableCell align="right">{food.nf_total_fat}</TableCell>
                <TableCell align="right">{food.nf_saturated_fat}</TableCell>
                <TableCell align="right">{food.nf_total_carbohydrate}</TableCell>
                <TableCell align="right">{food.nf_cholesterol}</TableCell>
                <TableCell align="right">{food.nf_dietary_fiber}</TableCell>
                <TableCell align="right">{food.nf_sodium}</TableCell>
                <TableCell align="right">{food.nf_sugars}</TableCell>
                <TableCell align="right">{food.nf_protein}</TableCell>
                <TableCell align="right">{food.nf_potassium}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" color="error" id='delete-cart-btn'>
        <button onClick={()=>onDelete()}> Delete Cart </button>
      </Button>
    </div>
  )
}

export default CartCard;


