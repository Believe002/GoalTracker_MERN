import { useState,useEffect } from "react";
import { FaUser } from "react-icons/fa";


function Register() {

    const [formData, setFormData] = useState({
        name:'',email :'',password:'',password2:''
    })

    const {name,email,password,password2} = formData;

    const onChange = (e) => {
        setFormData( prevStat => ({
            ...prevStat,
            [e.target.name] : e.target.value

        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
    
    <>
    <section>
        <h1> <FaUser /> Register </h1>
        <p> Please Create an Account </p>     
    </section>        

    <section>
        <form onSuspend={onSubmit}>
            
            <div className="form-group">
            <input type="text" className="form-group" 
            name="name" id="name"
            value={name}
            placeholder="Enter Your Name"
            onChange={onChange}  />
            </div>

            <div className="form-group">
            <input type="text" className="form-group" 
            name="email" id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={onChange}  />
            </div>
            
            <div className="form-group">
            <input type="text" className="form-group" 
            name="password" id="password"
            value={password}
            placeholder="Enter Your password"
            onChange={onChange}  />
            </div>
            
            <div className="form-group">
            <input type="text" className="form-group" 
            name="password2" id="password2"
            value={password2}
            placeholder="Confirm Password"
            onChange={onChange}  />
            </div>
            
            <div className="form-group">
                <button type="submit" className="btn btn-block"> Submit </button>
            </div>
        </form>
    </section>
    
    </>
    )
}

export default Register