import React,{useState} from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpenses/NewExpense";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {  

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started'),
  //   React.createElement(Expenses,{items:items})
  // );

  const [expenseData, setExpenseData] = useState(dummyData);

  const getExpenseDataHandler = (expenseData) => {
    setExpenseData((prevExpenseData) => {
      return [expenseData, ...prevExpenseData];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={getExpenseDataHandler}/>
      <Expenses items={expenseData} />
    </div>
  );
};

export default App;
