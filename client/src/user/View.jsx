import React from 'react'
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {Table} from 'react-bootstrap'
const View = () => {
    const {id} = useParams();
    const [view, setview] = React.useState([]);

    React.useEffect(() =>{
        loaduser();
    }, []);
    
    const loaduser = async() =>{
    const result = await axios.get(`/view/${id}`);
    setview(result.data);
    }
    return (
        <>
        <section className="d-flex flex-column align-items-center">
        <h2>User Details</h2>
        <Link className="btn btn-primary my-3" to="/">Home</Link>
        <Table hover className="w-50">
        <thead className="table-dark">
            <tr>
                <th>name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{view.name}</td>
                <td>{view.username}</td>
                <td>{view.email}</td>
                <td>{view.phone}</td>
                <td>{view.password}</td>
            </tr>
            </tbody>
        </Table>
        </section>
        </>
    )
}

export default View
