import React from 'react';
import './index.css';
import {add,sub,mul,div} from './Arith';

let greet = '' ;
let cDate = new Date();
let cTime = cDate.getHours();
const cssStyle = {};
if ( cTime >= 1 && cTime <= 11){
    greet = 'Good Morning';
    cssStyle.color = 'green';
}else if( cTime >= 12 && cTime <= 17 ){
    greet = 'Good Afternoon';
    cssStyle.color = 'red';
}else if( cTime >17 && cTime <= 19 ){
    greet = 'Good Evening';
    cssStyle.color = 'orange';
}else{
    greet = 'Good Night';
    cssStyle.color = 'blue';
}
function App(){
    return(
    <div className='greetstyle'>
    <h1 className='fontsty'> Hello Sir,<span style={cssStyle}> {greet} </span> </h1>
    <ul className='Arithmatic'>
        <li> Sum is {add(40,4)}</li>
        <li> SUb is {sub(30,3)}</li>
        <li> Mul is {mul(10,3)}</li>
        <li> Div is {div(10,3)}</li>
    </ul>
    </div>
    );
}
export default App;