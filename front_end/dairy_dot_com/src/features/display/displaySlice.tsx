import { createSlice, createReducer, createAction} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { getValue } from '@testing-library/user-event/dist/utils';

enum OperationType { 
   add = '+',
   div = '/',
   mul = '*',
   sub = '-'
}

export function OperationExecute(right:string,left:string,type:OperationType) { 
   switch (type) { 
      case '+': { 
         return (+right)+(+left);
      }
      case '-': { 
         return (+right)-(+left);
      }
      case '*': { 
         return (+right)*(+left);
      }
      case '/': { 
         return (+right)/(+left);
      }
      default: { 
         throw 8;
      }
   }

}
export interface DisplayState { 
   value: string,
   bufValue: string,  
   operationTupe?: OperationType,
   showedvalue: string,
}

const discplayInitialState = {
   value: "10",
   showedvalue: "0",
   bufValue: "20"
} as DisplayState; 

export const mulAction = createAction('mul');
export const divAction = createAction('div');
export const addAction = createAction('add');
export const subAction = createAction('sub');
export const newValueAction = createAction<string>('new/var');
export const newBufValueAction = createAction<string>('new/buf/var');
export const append = createAction<string>('append');
export const clearOne = createAction('clear/one');
export const clearAll = createAction('clear/all');
export const equalAcrion = createAction('equal');

// вспомнил если жать на один знак много раз то там рекурси ябудет
export const reducersCool = createReducer(discplayInitialState, (builder) => {
   builder.addCase(addAction, (state, action) => {
      console.log("usu")
      if (state.operationTupe !== OperationType.add) {
         
         state.bufValue = OperationExecute(state.bufValue, state.value, OperationType.add).toString();

         state.value = "0";

      } else { 
         state.value = OperationExecute(state.bufValue, state.value, OperationType.add).toString();
      }
      state.operationTupe = OperationType.add;
      
   }).addCase(divAction, (state, action) => {
      if (state.operationTupe !== OperationType.div) {
         state.bufValue = OperationExecute(state.bufValue, state.value, OperationType.div).toString();

         state.value = "0";

      } else { 
         state.value = OperationExecute(state.bufValue, state.value, OperationType.div).toString();
      }
      state.operationTupe = OperationType.div;
      
   })
   .addCase(mulAction, (state, action) => {
      if (state.operationTupe !== OperationType.mul) {
         state.bufValue = OperationExecute(state.bufValue, state.value, OperationType.mul).toString();

         state.value = "0";

      } else { 
         state.value = OperationExecute(state.bufValue, state.value, OperationType.mul).toString();
      }
      state.operationTupe = OperationType.mul;
      
   })
   .addCase(subAction, (state, action) => {
      if (state.operationTupe != OperationType.sub) {
         state.bufValue = OperationExecute(state.bufValue, state.value, OperationType.sub).toString();

         state.value = "0";

      } else { 
         state.value = OperationExecute(state.bufValue, state.value, OperationType.sub).toString();
      }
      state.operationTupe = OperationType.sub;
      
   }).addCase(newValueAction, (state, action) => {
      state.value = action.payload
   }).addCase(newBufValueAction,(state, action)=>{
      state.bufValue = action.payload
   }).addCase(append, (state, action) => {
      // TODO: undefined check
      state.value += action.payload
   }).addCase(clearOne, (state, action) => { 
      if (state.value.length !== 0) {
         state.value = state.value.slice(0,-1)
      } 
   }).addCase(clearAll, (state, action) => {
      state.bufValue = "";
      state.value = ""
   }).addCase(equalAcrion, (state, action) => {
      console.log("do nothing")
    })
      .addDefaultCase((state, action) => { console.log(action.type+"gg") })
})


export const displaySlice = createSlice({
   name: "display",
   initialState: discplayInitialState,
   reducers: {
      reducersCool
   }
})

export default displaySlice.reducer