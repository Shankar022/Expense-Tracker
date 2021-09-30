import React,{useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [year, setYear] = useState("2020");

    const dropdownChangeHandler = (event) => {
        setYear(event.target.value);
         props.onDropDownChange(year);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
              <select value={ year} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;