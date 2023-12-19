import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' ;

const  ExpenseItem = (props) => {
   const clickHandler = () => {
    console.log('clicked')
   }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title} </h2>
      </div>
      <div className='expense-item__price'> { props.amount}</div>
      <div className='exp-item-location'> {props.loc}</div>
      <button onClick={clickHandler}> Change Title</button>
     
    </div>
  );
}

export default ExpenseItem;
