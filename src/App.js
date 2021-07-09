import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = expense => {
    console.log(`in App.js`);
    console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }


  // const arr1 = [0, 10, 20, [3, 7]];

  // console.log(
  //   arr1.reduce((acc, curr) => {
  //     return acc.concat(curr);
  //   }, [])
  // )

  // let strArray = ["a", "b", "w", "w", "a", "c", "c", "b"];

  // console.log(strArray.filter((item, index, array) => {
  //   console.log(item, index, array.indexOf(item), array.indexOf(item) === index);
  //   //if the index of the current item equals the current index then it's unique  
  //   return array.indexOf(item) === index
  // }));

  // for (let i = 1; i <= 5; i++) {
  //   setTimeout(function () {
  //     console.log(i); 
  //   }, 100);
  // }

  return (
    <div>
      <Expenses expenses={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <p> this is also visible </p>
    </div>
  );
}

export default App;