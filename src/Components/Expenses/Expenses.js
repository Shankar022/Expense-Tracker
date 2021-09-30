import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";

const Expenses = ({ items }) => {
  
  const getDropDownChangeData = (selectedYear) => {
   
    console.log(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onDropDownChange={getDropDownChangeData}
        />
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
    </>
  );
};

export default Expenses;
