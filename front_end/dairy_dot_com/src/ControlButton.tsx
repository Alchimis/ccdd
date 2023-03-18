import './ControlButton.css';
import { IControlButtonContent} from "./features/interfaces/IControlButtonContent"
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function ControlButton({ operationType, content }: IControlButtonContent) { 
   const dispatch = useDispatch()
   const callback = useCallback(
      () => {dispatch({type:operationType}) },
      [dispatch]
   )
   return (<>
      <button onClick={() => { callback() }} className='controlButton'>{ content}</button>
   </>);
}


export { ControlButton }