import './ControlButton.css';
import { IButtonContent } from './IButtonContent';

export interface IControlButtonContent extends IButtonContent{ 
   buttonContent: string
}

function ControlButton({buttonContent }:IControlButtonContent) { 
   return (<>
      <button className='controlButton'>{ buttonContent}</button>
   </>);
}


export { ControlButton }