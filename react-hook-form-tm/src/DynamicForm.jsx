// useFieldArray

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, useFieldArray } from 'react-hook-form';

const UserInformation = (prop) => {
  const { register, control } = prop;
  const { append, fields, remove } = useFieldArray({
    control, // control props comes from useForm
    name: 'users', // unique name for your Field Array
  });
  return (
    <div className="card mb-2">
      <div className="card-header">User Information</div>
      <div className="card-body">
        {fields.map((item, index) => (
          <div className="form-row form-group" key={item.id}>
            <div className="col p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First name"
                {...register(`users[${index}].firstName`)}
                defaultValue={item.firstName}
              />
            </div>
            <div className="col p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail Address"
                {...register(`users[${index}].emailAddress`)}
                defaultValue={item.emailAddress}
              />
            </div>
            <div className="col p-3">
              <select
                className="form-select"
                id="state"
                {...register(`users[${index}].region`)}
                defaultValue={item.region}
              >
                <option value="">Select Your State</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Goa">Goa</option>
                <option value="Manipur">Manipur</option>
              </select>
            </div>
            <div className="col p-3">
              <button className="btn btn-danger" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="p-3">
          <button
            type="submit"
            className="btn btn-dark mt-4 "
            onClick={() =>
              append({
                firstName: '',
                emailAddress: '',
                region: '',
              })
            }
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

const DynamicForm = () => {
  const { register, handleSubmit, control } = useForm();

  const basicForm = (
    <div className="card mb-5">
      <div className="card-header">Basic Information</div>
      <div className="card-body">
        <div className="form-group p-3">
          <label htmlFor="fullname" className="mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            {...register('fullname')}
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="email" className="mb-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email')}
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="phone" className="mb-2">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            {...register('phone')}
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password')}
          />
        </div>
      </div>
    </div>
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container py-5">
      <div className="border-0 p-4 w-75 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <UserInformation register={register} control={control} />
          <button type="submit" className="btn btn-primary mt-4">
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
