import Row from "./Row";
import { Row1, Row2, Row3, Row4} from "./CalculatorKeys";
import { IButtonContent } from "./IButtonContent";
import { INumberButtonContent } from "./NumberButton";
import './ActualApp.css';
import { CalculatorScreen } from "./CalculatorScreen";

function ActualApp() { 

   return (<>
      <div className="container">
         <CalculatorScreen data="1234"/>
         <div>
      {[Row1, Row2, Row3, Row4].map((element) =>
         <Row content=
            {element.map(
               (element) => element.buttonComponent(
                  { buttonContent: element.props.content }
               )
               )} />
            )}
            </div>
      </div>
   </>);
}

export{ ActualApp }