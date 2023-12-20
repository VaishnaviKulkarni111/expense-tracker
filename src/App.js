import React from "react";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
  // import ExpenseItem from './components/Expenses/ExpenseItem';

 const addExpenseHandler = (expense) => {
  console.log('in app js');
  console.log(expense)
}
const form = () => {
  return(
    <div>
      <h2> Expense Form</h2>
      <ExpenseForm onAddExpense= {addExpenseHandler}/>
    </div>
  )
}
 

 export default form;

// const  App =() => {
//   const expenses = [
//     {id: 'e1',title: 'Rent',amount: 990,date: new Date(2020, 7, 14), loc:'mumbai'},
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),loc:'pune' },
//     {id: 'e3', title: 'Car Insurance',amount: 294.67,date: new Date(2021, 2, 28), loc:'delhi'},
//     { id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2021, 5, 12),loc:'kop' }
//   ]
 
//   return (
//     <div >
//       <h2> Expense Tracker</h2>
//    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} loc={expenses[0].loc}/>
//    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} loc={expenses[1].loc}/>
//    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} loc={expenses[2].loc}/>
//    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} loc={expenses[3].loc}/>
   
   
//     </div>

//   );
// }
//  export default App;
