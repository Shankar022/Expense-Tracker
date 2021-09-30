import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({items}) => {
    return (
        <div className='expenses'>
            <ExpenseItem
                title={items[0].title}
                amount={items[0].amount}
                date={ items[0].date}/>
        </div>
    )
}

export default Expenses;
