import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Basic from './Basic';
function ToDo (){
    const [item,setItem] = useState();
    const [clickEvent,setOnEvent] = useState([]);

    const onCEvent = (eve) =>{
        setItem(eve.target.value)        
    };

    const onEvent = () => {
        setOnEvent ((oldItem) => {
           return [...oldItem,item];
        });
        setItem("");
    };
    
    const removeItems = (id) => {
        setOnEvent((oldItem) => {
            return oldItem.filter((arrElement,index) =>{
                return index !== id;
            });
        });
    };

    return ( <> <Basic />, <div className="Main_div">

    <h1 className="toDoHead"> ToDo List </h1>
        <div className="inner_div">
        <input type="text" placeholder="Enter a Item" onChange={onCEvent} value={item}/>
        <button className="todoBtn" onClick={onEvent}> + </button>

        <div className="todoText">
            {clickEvent.map((setValue,index) => {
                return <ToDoList key={index} id={index} onSelect={removeItems} text={setValue}/> 
            })} 
        </div>
        </div>
    </div>
    </> 
    )
}

export default ToDo;