import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList items={filterExpenseItems} />
      </Card>
    </>
  );
};

export default Expenses;
