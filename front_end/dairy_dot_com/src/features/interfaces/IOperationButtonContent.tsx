import { IButtonContetent} from "./IButtonContent"
export interface IOperationButtonContent extends IButtonContetent { 
   operationType: string,
   content:string
}