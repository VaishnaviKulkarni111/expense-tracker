import './ExpenseItem.css' ;

function ExpenseItem(props) {
   const expenseDate = new Date(2023,0,22);
  const expenseTitle = 'Car Insurnase';
  const expenseAmount = 300;
  const location = 'Mumbai'

  return (
    <div className='expense-item'>
      <div > {props.date.toDateString()} </div>
      <div className='expense-item__description'>
        <h2>{props.title} </h2>
      </div>
      <div className='expense-item__price'> { props.amount}</div>
     
    </div>
  );
}

export default ExpenseItem;
