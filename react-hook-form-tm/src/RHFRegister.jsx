import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

const RHFRegister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container py-5">
      <div className="card border-0 shadow p-4 w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="form-group p-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                {...register('gender')}
              />
              <label className="form-check-label" htmlFor="male">
                male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                {...register('gender')}
              />
              <label className="form-check-label" htmlFor="female">
                female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="other"
                {...register('gender')}
              />
              <label className="form-check-label" htmlFor="other">
                other
              </label>
            </div>
          </div>
          <div className="form-group p-3">
            <select className="form-select" {...register('region')}>
              <option defaultValue={'DEFAULT'}>Select your state</option>
              <option value="Delhi">Delhi</option>
              <option value="Punjab">Punjab</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
            </select>
          </div>
          <div className="form-group p-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                value="agree"
                {...register('tos')}
              />
              <label className="form-check-label" htmlFor="terms">
                I agree all terms and conditons
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="updates"
                {...register('updates')}
              />
              <label className="form-check-label" htmlFor="updates">
                send me latest Bootstrap updates
              </label>
            </div>
          </div>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              {...register('address.state')}
            />
          </div>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              {...register('address.city')}
            />
          </div>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              {...register('address.zip')}
            />
          </div>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              Address 1
            </label>
            <input
              type="text"
              className="form-control"
              id="addOne"
              {...register('addressOne[0]')}
            />
          </div>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="addTwo"
              {...register('addressOne[1]')}
            />
          </div>

          <div className="p-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RHFRegister;
