import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Clock from 'react-digital-clock';

function IncAndDec(){
    const [num,setNum] = useState(0);

    const clickDec = () => {
        if (num>0){
            setNum(num - 1);
        }else{
            setNum(0)
            alert("Plese Increse Your Number")
        }
    };
    const clickInc = () => {
         setNum(num + 1);
    };
    return (
        <>
            <div className="main">
                <div className="Main_box">
                <h1><Clock /></h1>
                    <hr /> <h1> {num} </h1><hr /><br />
                        <Button onClick={clickInc} className="Inc" > <AddIcon /> </Button>
                        <Button onClick={clickDec} className="rem"> <RemoveIcon /> </Button>
                </div>
            </div>
        </>
    )
    
}
export default IncAndDec;