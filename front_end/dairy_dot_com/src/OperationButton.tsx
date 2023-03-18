import './OperationButton.css';
import { IOperationButtonContent } from "./features/interfaces/IOperationButtonContent"
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function OperationButton({ operationType, content }: IOperationButtonContent) {
   const dispatch = useDispatch() 
   const callback = useCallback(() => { dispatch({type:operationType}) },[dispatch])
   return (<>
      <button onClick={()=>{callback()}} className="operationButton">{ content}</button>
   </>);
}

export { OperationButton }