import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' ;


const  ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  

   const clickHandler = () => {
    setTitle('Updated!!!');
    console.log(title)
   }



  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title} </h2>
      </div>
      <div className='expense-item__price'> { props.amount}</div>
      {/* <button >'$'100</button> */}
      <div className='exp-item-location'> {props.loc}</div>
      <button onClick={clickHandler}> Change Title</button>
    </div>
  );
}

export default ExpenseItem;

