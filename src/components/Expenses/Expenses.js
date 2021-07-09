import React, { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [dateFilterVal, setDateFilterVal] = useState('2020');

  const addDateFilterHandler = (val) => {
    setDateFilterVal(val);
    console.log(`the val from expenses is ${val}`);
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => {
      return expense.date.getFullYear().toString() === dateFilterVal
    }
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={dateFilterVal} onChangeFilter={addDateFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses }/>
      <div className="container">
        <div className="child ex-height">1</div>
        <div className="child">2</div>
        <div className="child  ex-height">3</div>
        <div className="child">4</div>
      </div>
    </Card>
    
  )
}

export default Expenses;