import React from "react";
import './ExpForm.css'
import Form1 from "./Form";

const ExpenseForm= (props)=> {
    const saveExpDataHandler = (data) =>{
        const expenseData ={
            ...data,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }


return(
<div className="new-expense">
    <Form1 onSaveExpenseData={saveExpDataHandler}/>
</div>

)}


export default ExpenseForm