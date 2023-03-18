import './OperationButton.css';
import { IButtonContent } from "./IButtonContent";

interface IOperationButtonData extends IButtonContent { 
   buttonContent: string
}

function OperationButton({ buttonContent}:IOperationButtonData) { 
   return (<>
      <button className="operationButton">{ buttonContent}</button>
   </>);
}

export { OperationButton }