import React from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form , Button } from 'react-bootstrap';
const EditUser = () => {
    React.useEffect(() =>{
        loaduser();
    },[])
    const {id} = useParams();
    const history = useHistory();
    const [edituser, setedituser] = React.useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    const loaduser = async() =>{
    const result = await axios.get(`/view/${id}`)
    setedituser(result.data)
    }
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setedituser({ ...edituser, [name]: value });
    }

    const Submit = async (e) => {
        e.preventDefault();
        await axios.put(`/edit/${id}`, edituser);
        history.push("/");
    }

    let mystyle = {
        marginBottom : "15px"
    }
    
    return (
        <>
        <section className="d-flex flex-column align-items-center">
<h2>Edit User</h2>
            <Link className="btn btn-primary my-3" to="/">Home</Link>
            <Form className="d-flex flex-column align-items-center w-50" method="POST" onSubmit={(e) => Submit(e)}>
                <Form.Control style={mystyle} type="text" placeholder="Name" name="name" onChange={(e) => handleInput(e)} value={edituser.name} autoComplete="off" />
                <Form.Control style={mystyle} type="text" placeholder="Username" name="username" onChange={(e) => handleInput(e)} value={edituser.username} autoComplete="off" />
                <Form.Control style={mystyle} type="text" placeholder="Email" name="email" onChange={(e) => handleInput(e)} value={edituser.email} autoComplete="off" />
                <Form.Control style={mystyle} type="number" placeholder="Phone" name="phone" onChange={(e) => handleInput(e)} value={edituser.phone} autoComplete="off" />
                <Form.Control style={mystyle} type="password" placeholder="Password" name="password" onChange={(e) => handleInput(e)} value={edituser.password} autoComplete="off" />
                <Form.Control style={mystyle} type="password" placeholder="Cpassword" name="cpassword" onChange={(e) => handleInput(e)} value={edituser.cpassword} autoComplete ="off"/>
                <Button type="submit">Submit</Button>
            </Form>
            </section>
        </>
    )
}

export default EditUser
