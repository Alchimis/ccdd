import Row from "./Row";
import { Row1, Row2, Row3, Row4} from "./CalculatorKeys";
import './ActualApp.css';
import { CalculatorScreen } from "./CalculatorScreen";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function ActualApp() { 
const displayState = useSelector((state: RootState) => state.cool)
   
   return (<>
      
      <div className="container">
         <CalculatorScreen data={ displayState.value} />
         <div>
      {[Row1, Row2, Row3, Row4].map((element) =>
         <Row content=
            {element.map(
               (element) => element.buttonComponent(
                  element.props 
               )
               )} />
            )}
            </div>
      </div>
   </>);
}

export{ ActualApp }