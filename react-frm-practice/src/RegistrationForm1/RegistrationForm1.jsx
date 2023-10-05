import React, { useEffect, useState } from 'react';
import './FormStyle.css';

const RegistrationForm1 = () => {
  const data = {
    name: '',
    email: '',
    password: '',
  };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert('All fields are mandatory');
    } else {
      setFlag(true);
    }
  };

	const [flag, setFlag] = useState(false);
  useEffect(() => {
    //console.log('Registered');
  }, [flag]);

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}! You have registered successfully.
          </h2>
        ) : (
          ''
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm1;

//https://stackoverflow.com/questions/50376353/why-we-need-to-put-e-target-name-in-square-brackets
//https://softauthor.com/e-target-in-javascript/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
//https://stackoverflow.com/questions/34831262/what-do-square-brackets-around-a-property-name-in-an-object-literal-mean
//https://stackoverflow.com/questions/47052938/understanding-computed-properties-square-brackets
//https://www.javascripttutorial.net/es6/javascript-computed-property/#
//https://www.appsloveworld.com/reactjs/200/197/why-these-brackets-in-this-function-setformdata-formdata-e-target-name-e
//https://www.youtube.com/watch?v=Vd8kcLbLItc
