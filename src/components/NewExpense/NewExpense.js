import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  let [isEditing, changeFormState] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    if (
      enterExpenseData.title &&
      enterExpenseData.amount &&
      enterExpenseData.date
    ) {
      const expenseData = {
        ...enterExpenseData,
        id: new Date().getTime(),
      };
      props.onAddExpense(expenseData);
      stopEditingHandler();
      console.log(expenseData);
    }
  };

  const startEditingHandler = () => {
    changeFormState(true);
  };

  const stopEditingHandler = () => {
    changeFormState(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler} type="button">
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
