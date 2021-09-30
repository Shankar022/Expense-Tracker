import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");

  const getDropDownChangeData = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterExpenseItems = items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onDropDownChange={getDropDownChangeData}
        />
        {
          // console.log(items),
          filterExpenseItems.map((item) => (
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
