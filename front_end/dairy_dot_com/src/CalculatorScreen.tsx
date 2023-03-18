import './CalculatorScreen.css';

interface CalculatorScreenData { 
   data:string
}

function CalculatorScreen({ data}:CalculatorScreenData) { 
   return (<>
      <div className="calculatorscreen">
         <p className="font-face-dg calculator-data">{data}</p>
      </div>
   </>);
}

export {CalculatorScreen }