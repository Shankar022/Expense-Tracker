import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expenses;
