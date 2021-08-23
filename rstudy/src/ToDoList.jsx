import React from 'react';

const ToDoList = (props) => {
    
    return ( 
    <>
     <i className="fa fa-times delbtn" area-hidden="true" onClick={() => {
         props.onSelect(props.id);
     }} />
    <h3 className="txtList"> {props.text} </h3>
    </>
    )
}

export default ToDoList;