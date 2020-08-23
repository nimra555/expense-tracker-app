import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransReducer';



const Initialtransaction = {
   transaction : [ 
    { description: 'Cash', amount: 1000 , id : 1 },
    { description: 'Bill', amount: 3000 , id : 2 }
]   
}

export const global_transaction = createContext(Initialtransaction);


// let [state,dispatch] = useReducer(TransactionReducer,Initialtransaction);

export function TransactionProvider({children}) {

    let [state, dispatch] = useReducer(TransactionReducer, Initialtransaction);

    function addTrans(trans){
          dispatch({
              type: 'Add_Transaction',
              payload:{
                  description:trans.description,
                  amount:trans.amount,
                  id:trans.id
              }
          })
    }

    function deleteTrans(id){
        dispatch({
            type: 'DELETE',
            payload:id
        })
  }

    return(
        <TransactionProvider value={{
            Addtransaction:state,
            addTrans,
            deleteTrans
        }}> 
           {{children}}
        </TransactionProvider>
    )
}


