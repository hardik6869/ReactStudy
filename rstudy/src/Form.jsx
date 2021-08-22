import Reat,{useState} from 'react';

function Form (){
    const [fullName,setFullName] = useState({
        fname :"",
        lname :"",
        email :"",
        Phone :"",
    });
    const InputEvent = (event) =>{

        const {value,name} = event.target;

        setFullName((prev) => {
            return{
                ...prev,
                [name] : value,
            }
        //    if( name === 'fname'){
        //        return{
        //            fname :value,
        //            lname : prev.lname,
        //            email : prev.email,
        //            Phone : prev.Phone,
        //        };
        //    }else if (name === 'lname'){
        //        return{
        //            fname : prev.fname,
        //            lname : value,
        //            email : prev.email,
        //            Phone : prev.Phone,
        //        };
        //    }else if (name === 'email'){
        //         return{
        //             fname : prev.fname,
        //             lname : prev.lname,
        //             email : value,
        //             Phone : prev.Phone,
        //         };
        //     }else if (name === 'Phone'){
        //         return{
        //             fname : prev.fname,
        //             lname : prev.lname,
        //             email : prev.email,
        //             Phone : value,
        //         };
        //     }

        });
    };
  
    return(
    <>
        <h1> Hello ! {fullName.fname} {fullName.lname} <br/> {fullName.email} {fullName.Phone}  </h1>
        <input type="text" name="fname" onChange={InputEvent} placeholder="Enter Your First Name" value={fullName.fname} />
        <input type="text" name="lname" onChange={InputEvent} placeholder="Enter Your Last Name" value={fullName.lname} />
        <input type="email" name="email" onChange={InputEvent} placeholder="Enter Your Email" value={fullName.email} autoComplete="off" />
        <input type="number" name="Phone" onChange={InputEvent} placeholder="Enter Your Phone Number" value={fullName.Phone} />
    </>
    );
} 

export default Form;