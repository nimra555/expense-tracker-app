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

// create the provider for the expense context
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
        Addtransaction: state,
        addTrans,
        deleteTrans,
      }}
    >
      {children}
    </global_transaction.Provider>
  );
}

// import React, { createContext, useReducer }  from 'react';
// import TransactionReducer from "./Transreducer";

// // create initial state
// const initialTransaction = {
//     transaction: [
//         { amount: 2500, description: "Cash" , id: 1 },
//         { amount: -200, description: "Book" ,id:2 },
//         { amount: -800, description: "Watch" ,id :3 }
//     ]
// }

// // create the expense context
// export const ExpenseContext = createContext(initialTransaction);

// // create the provider for the expense context

// export const TransactionProvider = ({children}) => {
//     let [state,dispatch] = useReducer(TransactionReducer, initialTransaction);

//     function addTransaction(transObj){
//         dispatch({
//             type:"ADD_Transaction",
//             payload:{
//                 amount:transObj.amount,
//                 description:transObj.description,
//                 id: transObj.id
//             },
//         })
//     }

//     function deleteTransaction(id){
//         dispatch({
//             type:'Delete',
//             payload: id
//         })
//     }

//     return(
//         <ExpenseContext.Provider value={{
//             transaction:state.transaction,
//             addTransaction,
//             deleteTransaction
//         }}>
//             {children}
//         </ExpenseContext.Provider>
//     )
// };
