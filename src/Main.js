import React, { useContext, useState } from "react";
import { global_transaction } from "./Transcontext";

function Main() {
  let { Addtransaction, addTrans, deleteTrans } = useContext(
    global_transaction
  );

  // create state for description and amount
  let [newDes, setDes] = useState("");

  let [newAmount, setAmount] = useState(0);

  let AddnewTrans = (event) => {
    event.preventDefault();
  };

  const addTaransactionHandler = () => {
    addTrans({
      description: newDes,
      amount: Number(newAmount),
      id: Math.floor(Math.random() * 10000000),
    });
    if (Number(newAmount) === 0) {
      alert("Please enter correct value");
    }
    return false;

  };



  // income and expense amount

  function addIncome() {
    let income = 0;
    for (let i = 0; i < Addtransaction.length; i++) {
      if (Addtransaction[i].amount > 0) {
        income += Addtransaction[i].amount;
      }
    }
    return income;
  }

  function addExpense() {
    let expense = 0;
    for (let e = 0; e < Addtransaction.length; e++) {
      if (Addtransaction[e].amount < 0) {
        expense += Addtransaction[e].amount;
      }
    }
    return expense;
  }

  return (
    <div>
      {/* balance component */}
      <h2 className="total_balance">
        Total balance <br /> ${addIncome() + addExpense()}
      </h2>
      {/* account summary */}
      <div className="data">
        <h3 className="green">
          Income <br /> ${addIncome()}
        </h3>
        <h3 className="red">
          Expense <br /> ${addExpense()}
        </h3>
      </div>
      {/* transaction history */}
      <div className="history">
        <h2>History</h2>
        <hr />
        <ul>
          {Addtransaction.map((trans,index) => {
            return (
              <li key={index}>
                <span>{trans.description}</span>
                <span>{trans.amount}</span>
                <button className="delete"
                  onClick={() => {
                    deleteTrans(trans.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* addTransaction component  */}
      
        <div className="transaction">
          <h2> Transaction </h2>
          <hr />
          <form onSubmit={AddnewTrans} className="form">
            <label>
              Add new Description
            <input
                type="text"
                placeholder="Enter Description"
                required
                onChange={(event) => {
                  setDes(event.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Add Amount
            <input
                type="number"
                placeholder="Enter Amount"
                required
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </label>
            <br />
          </form>
        </div>

        {/* <button>Add Transaction</button> */}
        <button onClick={addTaransactionHandler} className="butn">Add Transaction</button>
      </div>
      );
    }
    
    export default Main;
