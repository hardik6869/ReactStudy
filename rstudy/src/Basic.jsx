import React,{useState} from 'react';
import {add,sub,mul,div} from './Arith';
import Form from './Form';

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
function Basic(){
    const [count,store] = useState(0);

    const newTime = cDate.toLocaleTimeString();
    const [sTime,cTime] = useState(newTime);  

    const setTime = () => {
        let newTime = new Date().toLocaleTimeString();
        cTime(newTime);
    };setInterval(setTime,1000);

    const IncCount = () => {
        store(count + 1 );
    };
    
    const onSubmit =(event) => {
        event.preventDefault();
        alert("Form Submitted");
    }
    return(
    <div className='greetstyle'>
    <h1 className='fontsty'> Hello Sir,<span style={cssStyle}> {greet} </span> </h1>
    <ul className='Arithmatic'>
        <li> Sum is {add(40,4)}</li>
        <li> SUb is {sub(30,3)}</li>
        <li> Mul is {mul(10,3)}</li>
        <li> Div is {div(10,3)}</li>
    </ul>
    <form onSubmit={onSubmit} className='greetstyle'>
    <h1> {count} </h1>
    <h1> {sTime} </h1>
    <Form />
    <button onClick={IncCount} type="submit"> Click Me !! </button>
    </form>
    </div>
    );
}
export default Basic;