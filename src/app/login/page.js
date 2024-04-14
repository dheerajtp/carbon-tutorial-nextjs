'use client';
import { Button, Grid, Column, TextInput } from '@carbon/react';
import { useState } from 'react';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });

  const changeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /\S+@\S+\.\S+/;
    const newValues = { ...values };

    if (!values.email) {
      newValues.emailError = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(values.email)) {
      newValues.emailError = 'Invalid email address';
      isValid = false;
    } else {
      newValues.emailError = '';
    }

    if (!values.password) {
      newValues.passwordError = 'Password is required';
      isValid = false;
    } else {
      newValues.passwordError = '';
    }

    setValues(newValues);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("It's Okay to Perform the Login Action");
    }
  };

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <TextInput
          id="email"
          name="email"
          labelText="Email"
          value={values.email}
          onChange={changeHandler}
          invalid={!!values.emailError}
          invalidText={values.emailError}
          style={{ marginBottom: '1rem' }}
        />
        <TextInput
          id="password"
          name="password"
          labelText="Password"
          type="password"
          value={values.password}
          onChange={changeHandler}
          invalid={!!values.passwordError}
          invalidText={values.passwordError}
          style={{ marginBottom: '1rem' }}
        />
        <Button onClick={handleSubmit}>Login</Button>
      </Column>
    </Grid>
  );
};

export default Login;
