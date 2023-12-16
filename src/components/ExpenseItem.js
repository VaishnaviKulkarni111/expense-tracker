import './ExpenseItem.css' ;

function ExpenseItem() {
   const expenseDate = new Date(2023,0,22);
  const expenseTitle = 'Car Insurnase';
  const expenseAmount = 300;


  return (
    <div className='expense-item'>
      <div > {expenseDate.toDateString()} </div>
      <div className='expense-item__description'>
        <h2>{expenseTitle} </h2>
      </div>
      <div className='expense-item__price'> { expenseAmount}</div>
     
    </div>
  );
}

export default ExpenseItem;
