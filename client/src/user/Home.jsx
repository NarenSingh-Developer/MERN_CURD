import React, { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Button, Table } from "react-bootstrap"

const Home = () => {

  useEffect(() => {
    loaduser();
  }, [])
  
  const [user, setuser] = React.useState([]);
  const loaduser = async () => {
    const result = await axios.get("/Users");
    setuser(result.data);
  }

  const Delete = async (_id) => {
    await axios.delete(`${_id}`);
    loaduser();
  }
  return (
    <>
    <div className=" d-flex flex-column align-items-center">
      <h2>MERN_CURD</h2>
      <Link className="btn btn-primary my-3" to={`/add`}>Adduser</Link>
      <Table striped bordered hover className="w-75">
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            user.map((value, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.password}</td>
                  <td>
                  <Link className="btn btn-primary me-2" to={`/view/${value._id}`}>view</Link>
                  <Link className="btn btn-primary me-2" to={`/edit/${value._id}`}>edit</Link>
                  <Button variant="danger" onClick={() => Delete(value._id)}>delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default Home
