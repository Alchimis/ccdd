import './NumberButton.css';
import { INumberButtonContent } from './features/interfaces/INumberButtonContent';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { append } from './features/display/displaySlice';

function NumberButton({ content }: INumberButtonContent) { 
   var dispatch = useDispatch()
   var calback = useCallback(() => {dispatch(append(content))},[dispatch])
   return (
      <>
         <button className='NumberButton' onClick={() => { calback()}}>{content}</button>
      </>
   );
}

export type { INumberButtonContent };
export default NumberButton;
