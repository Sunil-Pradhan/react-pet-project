// React Hook Form - Validation & Errors
//https://www.npmjs.com/package/classnames
//A simple JavaScript utility for conditionally joining classNames together.

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const RHFVE = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //mode: 'onChange',
    mode: 'onTouched',
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container py-5">
      <div className="card border-0 shadow p-4 w-75 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group p-3">
            <label htmlFor="fullname" className="mb-2">
              Full Name
            </label>
            {/* <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': errors.fullname,
              })}
              id="fullname"
              placeholder="Enter Your Full Name"
              {...register('fullname', { required: true, minLength: 4 })}
            /> */}

            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': errors.fullname,
              })}
              id="fullname"
              placeholder="Enter Your Full Name"
              {...register('fullname', {
                required: 'This field is required',
                minLength: {
                  value: 4,
                  message: 'Please enter fullname minimum 4 characters',
                },
              })}
            />
            {/* <small className="form-text text-danger">
              {errors.fullname && 'This Field is required'}
            </small> */}
            {/* <small className="form-text text-danger">
              {errors.fullname?.type === 'required' && 'This Field is required'}
            </small> */}
            {/* <small className="form-text text-danger">
              {errors.fullname?.type === 'minLength' &&
                'Please enter fullname minimum 4 characters'}
            </small> */}

            {/* {errors.fullname?.type === 'required' && (
              <div className="invalid-feedback">This Field is required</div>
            )}

            {errors.fullname?.type === 'minLength' && (
              <div className="invalid-feedback">
                Please enter fullname minimum 4 characters
              </div>
            )} */}
            {errors.fullname && (
              <div className="invalid-feedback">{errors.fullname.message}</div>
            )}
          </div>
          <div className="form-group p-3">
            <label htmlFor="email" className="mb-2">
              E-mail Address
            </label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': errors.email,
              })}
              id="email"
              placeholder="Enter Your E-mail Address"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid e-mail address',
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group p-3">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': errors.phone,
              })}
              id="phone"
              placeholder="Enter Your Phone Number"
              {...register('phone', {
                required: 'This field is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
          <div className="form-group p-3">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className={classNames('form-control', {
                'is-invalid': errors.password,
              })}
              id="password"
              placeholder="Enter Your Password"
              {...register('password', {
                required: 'This field is required',
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    'Password must be uppercase, Lowercase, Number/Special char and min 8 chars)',
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="form-group p-3">
            <label htmlFor="region" className="mb-2">
              Choose Your State
            </label>
            <select
              className={classNames('form-control', {
                'is-invalid': errors.region,
              })}
              id="region"
              {...register('region', { required: 'This field is required' })}
            >
              <option value="">--- Select Your State ---</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Assam">Assam</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Punjab">Punjab</option>
            </select>
            {errors.region && (
              <div className="invalid-feedback">{errors.region.message}</div>
            )}
          </div>
          <div className="form-group p-3">
            <label htmlFor="gender" className="mr-4">
              Choose Your Gender
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input ms-1"
                type="radio"
                id="male"
                value="male"
                {...register('gender', { required: 'This field is required' })}
              />
              <label className="form-check-label ms-2" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                {...register('gender', { required: 'This field is required' })}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="other"
                {...register('gender', { required: 'This field is required' })}
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
            {errors.gender && (
              <div className="form-text text-danger">
                {errors.gender.message}
              </div>
            )}
          </div>
          <div className="form-group p-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="tnc"
                {...register('tnc', { required: 'This field is required' })}
              />
              <label className="form-check-label" htmlFor="tnc">
                I agree all terms & conditions
              </label>
              {errors.tnc && (
                <div className="form-text text-danger">
                  {errors.tnc.message}
                </div>
              )}
            </div>
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

export default RHFVE;
