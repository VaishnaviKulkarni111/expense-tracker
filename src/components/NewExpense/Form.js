import React, {useState } from 'react'
import './Form.css'

const Form1 =() => {
 const [enteredTitle, setEnteredTitle] = useState('');
 const [enteredAmount, setEnteredAmount] = useState('');
 const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event)=> {
        setEnteredDate(event.target.value)
    } ; 

    return (
  <form>
    <div className='new-expense__controls '>
        <div className='new-expense__control'>
            <label> Title</label>
            <input  type='text' onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label> Amount </label>
            <input  type='number' min="1" onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label> Date</label>
            <input  type='date' min="2019-01-01" onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
             <button type='submit'> Add Expense</button>
        </div>

    </div>
  </form>
   
)}

export default Form1;