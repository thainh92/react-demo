import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [expense, setExpense] = useState();

    const whatEverChange = (yearFilter) => {
        console.log(props);
    };

  return (
    <Card className="expenses">
      <ExpensesFilter whatEver={whatEverChange} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props?.items[3].title}
        amount={props?.items[3].amount}
        date={props?.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
