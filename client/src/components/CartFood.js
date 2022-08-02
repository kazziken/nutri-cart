import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function CartFood(
  {id, 
    foods, 
    name, 
    image, 
    setFoods,
    calories,
    totalFat,
    saturatedFat,
    cholesterol,
    sodium,
    totalCarb,
    fiber,
    sugars,
    protein,
    pot
  }) 
  {

    function onDelete(){
        fetch((`/delete-cart-food/${id}`), 
        {method: 'DELETE'}).then(res => res.json()
        .then(data => { 
            setFoods((foods.filter(food => food.id !== data.id)))
          }))
      }

  return (
    <div>
      <TableContainer component={Paper} id="cart-food-container">
        <img src={image} alt={name} id="cart-food-img"></img>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
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
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{calories}</TableCell>
              <TableCell align="right">{totalFat}</TableCell>
              <TableCell align="right">{saturatedFat}</TableCell>
              <TableCell align="right">{totalCarb}</TableCell>
              <TableCell align="right">{cholesterol}</TableCell>
              <TableCell align="right">{sodium}</TableCell>
              <TableCell align="right">{fiber}</TableCell>
              <TableCell align="right">{sugars}</TableCell>
              <TableCell align="right">{protein}</TableCell>
              <TableCell align="right">{pot}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={() => onDelete()}></DeleteIcon>
        </IconButton>
    </div>
  )
}

export default CartFood