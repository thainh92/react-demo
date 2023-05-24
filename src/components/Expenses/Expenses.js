import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const [expenseFilter, setExpenseFilter] = useState("Not Found");

  const filterChangeHandler = (selectedYear) => {
    console.log("expenses.js");
    setFilterYear(selectedYear);

    if (selectedYear) {
      const expenseFilted = props.items.filter((expense) => 
        expense.date.getFullYear().toString() === selectedYear
      );
      setExpenseFilter(expenseFilted.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )))
      console.log(props.items);
    }
  };

  // const expenseItem = "Not found!";

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseFilter ||
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
