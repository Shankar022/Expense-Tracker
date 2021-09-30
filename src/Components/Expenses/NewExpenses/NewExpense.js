import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [formVisible, setFormNotVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const formVisibleHandler = () => {
    setFormNotVisible(true);
  };

  const formDisablehandler = () => {
    setFormNotVisible(false);
  };
  return (
    <div className="new-expense">
      {!formVisible && (
        <button onClick={formVisibleHandler}>Add new Expense</button>
      )}
      {formVisible && (
        <ExpenseForm
          onDisable={formDisablehandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
