import { useState,useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    const [formData, setFormData] = useState({
        email :'',password:''
    })

    const {email,password} = formData;

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
        <h1> <FaSignInAlt /> Login </h1>
        <p> Login to Get Set Go . . .   </p>     
    </section>        

    <section>
        <form onSuspend={onSubmit}>
            
           
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
                <button type="submit" className="btn btn-block"> Submit </button>
            </div>
        </form>
    </section>
    </>
    )
}

export default Login