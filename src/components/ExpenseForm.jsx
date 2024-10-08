import React from 'react'

export default function ExpenseForm() {
  return (
    <form ClassName="expense-form">
          <div ClassName="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" />
          </div>
          <div ClassName="input-container">
            <label htmlFor="category">Category</label>
            <input id="category" />
          </div>
          <div ClassName="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" />
          </div>
          <button ClassName="add-btn">Add</button>
        </form>
  )
}
