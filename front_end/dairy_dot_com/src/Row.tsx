//import { JsxElement } from "typescript";
import './Row.css';

interface RowData { 
   content: JSX.Element[]
}



function Row({ content}:RowData) { 
   return (<>
      <div className="wraper">
         {content.map((element) => element)}
         
      </div>
   </>);
}

export default Row;