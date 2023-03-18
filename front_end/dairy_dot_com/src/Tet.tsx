import './Tee.css';
import { useState } from 'react';

function Tet() { 
   var [cout, coutSet] = useState(["+","-","8"]);
   return (
      <>
         <div className='bloc1'>
           <div className='bloc3'>
            </div>
            <div className='bloc4'></div>
            <div className='bloc3'>
            </div>
            <div className='bloc4'></div>
            <div className='bloc3'>
            </div>
            <div className='bloc4'></div>
            <div className='bloc3'>
            </div>
            <div className='bloc4'></div>
            <div className='bloc3'>
            </div>
            <div className='bloc4'></div>
            <div className='bloc2'>
               <div className='bloc4'>
               </div>
            </div>   
         </div>   
         <div className='bloc2'>
            <div className='bloc4'>
            </div>
         </div>

         <div className='bloc1'>
            <div className='bloc5'>f</div>
            <div className='bloc5'></div>
            <div className='bloc5'></div>
            <div className='bloc5'></div>
            <div className='bloc5'></div>
            <div className='bloc5'></div>
            {cout.map((c) => <>
               <div className='bloc5'>{ c}</div>
            </>)
            }
         </div>
      </>);
}

export default Tet;