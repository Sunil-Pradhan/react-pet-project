import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://650d5c44a8b42265ec2c146c.mockapi.io/crud-api/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate('/read');
      });
  };

  return (
    <>
      <div className="mt-4">
        <h2>Update</h2>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link to="/read">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      </form>
      {/* {name}
      {email} */}
    </>
  );
};

export default Update;
