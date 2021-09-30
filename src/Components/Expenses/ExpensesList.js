import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0)
    return <h2 className="expenses-list__fallback ">Found no Expenses.</h2>;
  return (
    <ul className="expenses-list">
      {
        // console.log(items),
        items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;
