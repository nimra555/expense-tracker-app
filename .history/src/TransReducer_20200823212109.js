

const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'Add_Transaction': {
            return {
                ...state,
                transaction : [...action.payload,...state.transaction]
            }  
        }
        case "DELETE" : {
            return {
                ...state,
                transaction : state.transaction.filter(trans => 
                    trans.id !== action.payload)
            }
        }  
        default: return state;

    }
})

export default TransactionReducer;