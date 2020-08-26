import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransReducer";

// create initial state
const Initialtransaction = {
  transaction: [
    { description: "Cash", amount: 1000, id: 1 },
    { description: "Bill", amount: 3000, id: 2 },
  ],
};

// create the global context
export const global_transaction = createContext(Initialtransaction);

// create the provider for the global context
export function TransactionProvider({ children }) {
  let [state, dispatch] = useReducer(TransactionReducer, Initialtransaction);

  function addTrans(trans) {
    dispatch({
      type: "Add_Transaction",
      payload: {
        description: trans.description,
        amount: trans.amount,
        id: trans.id,
      },
    });
  }

  function deleteTrans(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }


return (
    <global_transaction.Provider
      value={{
        Addtransaction: state.transaction,
        addTrans,
        deleteTrans,
      }}
    >
     
      {children}
    </global_transaction.Provider>
  );
}



