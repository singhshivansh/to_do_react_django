import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';



const Register = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:"", cpassword:""
    })

    let target_name, target_value;
    const inputHandler = (e) => {
        // console.log(e.target.name);
        target_name = e.target.name;
        target_value = e.target.value;

        // if(target_name === 'name'){
        //     setUser({name : target_value});
        // }
        setUser({...user,[target_name] : target_value})
    } 
    
    const submitForm = async (e)=>{
        e.preventDefault();
        
        const {name, email, phone, password, cpassword} = user;

        const res  = await fetch('/register', {
            method : "POST",
            headers : {
                "Content-type" : "application/JSON"
            },
            body : JSON.stringify({
                name, email, phone, password, cpassword 
            })        
        });

        const res_data = await res.json();

        if(res_data.status === 422 || !res_data ){
            window.alert("Something went wrong");
        }
        else{
            // window.alert("Successfull Registration");
            console.log(res_data);

            history.push('/login');
        }

        // res.json().then(
        //     (success) => {
        //         console.log("Success : ", success, res.status);
        //     },

        //     (error) => {
        //         console.log("Error : ", error);
        //     }
        // );
    }

    return(
        <>
            <div className="container col-4 py-5">
                <h5>Register Form</h5>
                <form method="POST" >
                    <input type="text" className="form-control my-2" name="name" value={user.name} onChange={inputHandler} placeholder="Enter your Name" />
                    <input type="email" className="form-control my-2" name="email" value={user.email} onChange={inputHandler} placeholder="Enter Email" />
                    <input type="text" className="form-control my-2" name="phone" value={user.phone} onChange={inputHandler} placeholder="Enter Phone Number" />
                    <input type="text" className="form-control my-2" name="password" value={user.password} onChange={inputHandler} placeholder="Enter Password" />
                    <input type="text" className="form-control my-2" name="cpassword" value={user.cpassword} onChange={inputHandler} placeholder="Re-enter Password" />

                    <button type="submit" onClick={submitForm} className="btn btn-success">Register</button>
                </form>
            </div>
        </>
    )
}


export default Register;