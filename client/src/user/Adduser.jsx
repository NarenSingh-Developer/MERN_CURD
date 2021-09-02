import React from 'react'
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';
import { Form, Button } from "react-bootstrap"
const Adduser = () => {
    const history = useHistory();
    const [newuser, setnewuser] = React.useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        password : "",
        cpassword : ""
    })
    const handleInput = (e) =>{
       const name = e.target.name;
       const value = e.target.value;
        setnewuser({ ...newuser , [name] : value});
    }

    const Submit = async(e) =>{
        e.preventDefault();
        await axios.post("/add", newuser);
        history.push("/");
    }

    let mystyle = {
        marginBottom : "15px"
    }
    
    return (
        <>
        <section className="d-flex flex-column align-items-center">
        <h1>Add User</h1>
        <Link className=" btn btn-primary my-3" to="/">Home</Link>
            <Form className=" d-flex flex-column align-items-center w-50" method="POST" onSubmit={(e) => Submit(e)}>
                <Form.Control style={mystyle} type="text" placeholder="Name" name="name" onChange={(e) => handleInput(e)} value={newuser.name} autoComplete ="off"/>
                <Form.Control style={mystyle} type="text" placeholder="Username" name="username" onChange={(e) => handleInput(e)} value={newuser.username} autoComplete ="off"/>
                <Form.Control style={mystyle} type="text" placeholder="Email" name="email" onChange={(e) => handleInput(e)} value={newuser.email} autoComplete ="off"/>
                <Form.Control style={mystyle} type="number" placeholder="Phone" name="phone" onChange={(e) => handleInput(e)} value={newuser.phone} autoComplete ="off"/>
                <Form.Control style={mystyle} type="password" placeholder="Password" name="password" onChange={(e) => handleInput(e)} value={newuser.password} autoComplete ="off"/>
                <Form.Control style={mystyle} type="password" placeholder="Cpassword" name="cpassword" onChange={(e) => handleInput(e)} value={newuser.cpassword} autoComplete ="off"/>
                <Button type="submit">Submit</Button>
            </Form>
            </section>
        </>
    )
}

export default Adduser
