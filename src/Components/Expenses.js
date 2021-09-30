import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ items }) => {

    return (
        <div className='expenses'>
            {
                // console.log(items),
                items.map((item) => (
                    <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={ item.date}/>
                ))
            }
            
        </div>
    )
}

export default Expenses;
