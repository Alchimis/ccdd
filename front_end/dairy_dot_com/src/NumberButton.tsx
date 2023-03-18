import './NumberButton.css';
import { IButtonContent } from './IButtonContent';
import { type } from 'os';

interface INumberButtonContent extends IButtonContent { 
   buttonContent: string,
   callbackFunction: ()=>void
}

function NumberButton({buttonContent, callbackFunction}:INumberButtonContent) { 
   return (
      <>
         <button className='NumberButton' onClick={() => { console.log(buttonContent); callbackFunction()}}>{ buttonContent}</button>
      </>
   );
}

export type { INumberButtonContent };
export default NumberButton;
