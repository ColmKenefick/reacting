import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated');
  }

  return (
    <li>
      <Card className="expense-item"> 
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <Card className="expense-item__price">${props.amount}</Card>
          <button onClick={clickHandler}>clck</button>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem;