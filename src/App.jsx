import React, { useState } from 'react';
import axios from 'axios'; // Use the official Axios library

const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const { username, email, password, confirmpassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !email || !password || !confirmpassword) {
      alert('All fields are required');
      return;
    }
    if (password !== confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    // Correct API URL
    axios
      .post(
        'https://saikiran-db0b5-default-rtdb.firebaseio.com/user.json', // Add .json for Firebase
        { username, email, password }
      )
      .then(() => alert('Submit successful'))
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username"
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default App;