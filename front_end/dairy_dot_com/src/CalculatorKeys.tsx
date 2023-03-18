import Button from "./Button"
import { ButtonProps } from "./ButtonPropertys"
import NumberButton from "./NumberButton"
import { IButtonContent } from "./IButtonContent"
import { OperationButton } from "./OperationButton"
import { ControlButton } from "./ControlButton"
import { useDispatch } from 'react-redux'
import { useCallback } from 'react';

const dispatch = useDispatch()


interface Key { 
   buttonComponent: (content:IButtonContent) => JSX.Element,
   props: ButtonProps
}
const addCalback = useCallback(
      () => dispatch({type:"add"}),
   [dispatch]
)
const subCalback = useCallback(
      () => dispatch({type:"sub"}),
      [dispatch]
)
const mulCalback = useCallback(
      () => dispatch({type:"mul"}),
      [dispatch]
)
const divCalback = useCallback(
      () => dispatch({type:"div"}),
   [dispatch]
)



const Row1 = [
   { buttonComponent: NumberButton, props: { content: "1", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "2", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "3", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: OperationButton, props: { content: "+", executionFunction: () => { } } as ButtonProps } as Key,]
const Row2 = [
   { buttonComponent: NumberButton, props: { content: "4", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "5", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "6", executionFunction: () => { } } as ButtonProps } as Key,
{ buttonComponent: OperationButton, props: { content: "-", executionFunction: () => { } } as ButtonProps } as Key,]
const Row3 = [
   { buttonComponent: NumberButton, props: { content: "7", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "8", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: NumberButton, props: { content: "9", executionFunction: () => { } } as ButtonProps } as Key,
{ buttonComponent: OperationButton, props: { content: "*", executionFunction: () => { } } as ButtonProps } as Key,]

const Row4 = [
   { buttonComponent: ControlButton, props: { content: "C", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: ControlButton, props: { content: "CE", executionFunction: () => { } } as ButtonProps } as Key,
   { buttonComponent: OperationButton, props: { content: "=", executionFunction: () => { } } as ButtonProps } as Key,
{ buttonComponent: OperationButton, props: { content: "*", executionFunction: () => { } } as ButtonProps } as Key,]

export { Row1,Row2, Row3, Row4}