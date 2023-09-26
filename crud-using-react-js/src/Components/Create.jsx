import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const baseURL = 'https://650d5c44a8b42265ec2c146c.mockapi.io/crud-api';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Clicked');
    axios
      .post(baseURL, {
        name: name,
        email: email,
      })
      .then(() => {
        history('/read');
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-4">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {/* {name}
      {email} */}
    </>
  );
};

export default Create;
