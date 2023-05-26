import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseForm, setExpenseForm] = useState(false);
  const [addButton, setAddButton] = useState(true);
  
  const showExpenseForm = () => {
    setExpenseForm(true);
    setAddButton(false);
  };
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddButton(true);
    setExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {expenseForm && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />)}
      {addButton && (<button onClick={showExpenseForm}>New Expense</button>)}
    </div>
  );
};

export default NewExpense;
