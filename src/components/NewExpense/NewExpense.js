import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setIsEditing((prevState) => !prevState)
  }

  const formShowHandler = () => {
    setIsEditing((prevState) => !prevState)
  }

  return (
    <div className="new-expense">
      {isEditing && <button onClick={formShowHandler}> SHOW FORM </button>}
      {!isEditing && <ExpenseForm onCancel={formShowHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;