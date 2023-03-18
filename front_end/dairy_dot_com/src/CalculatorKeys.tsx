import NumberButton from "./NumberButton"
import { OperationButton } from "./OperationButton"
import { ControlButton } from "./ControlButton"
import { addAction, divAction, clearAll, clearOne, mulAction, subAction } from './features/display/displaySlice'
import { IButtonContetent} from "./features/interfaces/IButtonContent"
import { INumberButtonContent } from "./NumberButton"

interface Key { 
   buttonComponent: (content:IButtonContetent) => JSX.Element,
   props: IButtonContetent
}

const Row1 = [
   {
      buttonComponent: NumberButton, props: { content: "1"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "2"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "3"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: OperationButton, props: { content: "+", operationType:addAction.type} as IButtonContetent ,
   } as Key,
]
const Row2 = [
   {
      buttonComponent: NumberButton, props: { content: "4"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "5"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "6"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: OperationButton, props: { content: "-", operationType:subAction.type} as IButtonContetent ,
   } as Key,
]
const Row3 = [
   {
      buttonComponent: NumberButton, props: { content: "7"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "8"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: NumberButton, props: { content: "9"} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: OperationButton, props: { content: "*", operationType:mulAction.type} as IButtonContetent ,
   } as Key,
]

const Row4 = [
      {
      buttonComponent: ControlButton, props: { content: "C", operationType:clearOne.type } as IButtonContetent ,
   } as Key,
   {
      buttonComponent: ControlButton, props: { content: "CE", operationType:clearAll.type} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: OperationButton, props: { content: "=", operationType:mulAction.type} as IButtonContetent ,
   } as Key,
   {
      buttonComponent: OperationButton, props: { content: "/", operationType:divAction.type} as IButtonContetent ,
   } as Key,
]

export { Row1,Row2, Row3, Row4}