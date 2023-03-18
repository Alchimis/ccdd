import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react';
import { divAction, mulAction, subAction, addAction, append } from './displaySlice'
import NumberButton from '../../NumberButton';


export function Display() {
   const displayState = useSelector((state: RootState) => state.cool)
   const dispatch = useDispatch()
   const addCalback = useCallback(
      () => dispatch({type:addAction.type}),
      [dispatch]
   )
   const subCalback = useCallback(
      () => dispatch({type:subAction.type}),
      [dispatch]
   )
   const mulCalback = useCallback(
      () => dispatch({type:mulAction.type}),
      [dispatch]
   )
   const divCalback = useCallback(
      () => dispatch({type:divAction.type}),
      [dispatch]
   )
   const appendCalback = useCallback(
      () => dispatch({ type: append.type }),
      [dispatch]
   )
   return (<>
      <div style={{ display: "block" }}>
         <p>{displayState.value}</p>
         <p>{displayState.bufValue}</p>
         <NumberButton buttonContent='1' callbackFunction={()=>appendCalback()}/>
         <NumberButton callbackFunction={()=>addCalback()} buttonContent={"+"} />
         <NumberButton callbackFunction={()=>subCalback()} buttonContent={"-"} />
         <NumberButton callbackFunction={()=>mulCalback()} buttonContent={"*"} />
         <NumberButton callbackFunction={()=>divCalback()} buttonContent={"/"} />
      </div>      
   </>);
}
