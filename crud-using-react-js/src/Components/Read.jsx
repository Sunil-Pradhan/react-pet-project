import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseURL = 'https://650d5c44a8b42265ec2c146c.mockapi.io/crud-api';

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');

  function getData() {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  function handleDelete(id) {
    axios
      .delete(`https://650d5c44a8b42265ec2c146c.mockapi.io/crud-api/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  return (
    <>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={() => {
            if (tabledark === 'table-dark') setTableDark('');
            else setTableDark('table-dark');
          }}
        />
      </div>
      <div className="d-flex justify-content-between mt-4">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
