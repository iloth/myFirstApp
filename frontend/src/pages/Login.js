import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as authService from '../services/Auth'
import { useNavigate } from "react-router";
import ApiErrorMessage from '../controls/ErrorMessage';
import Page from './Page';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import * as BSForm from '../controls/Bootstrap/Form'

function Login() {
  const { returnTo } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (model, { setSubmitting }) => {
    setError(null);

    authService.login(model.login, model.password, model.remember)
      .then((result) => {
        if (returnTo && returnTo !== '') {
          navigate(returnTo);
        } else {
          navigate('/');
        }
      }).catch((error) => {
        setError(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return ( 
    <Page className='login' title='Login'>
      <div className="row justify-content-around">
        <div className="col col-md-6 col-lg-4">
          <Formik
            initialValues={{login: '', password: '', remember: false}}
            validationSchema={Yup.object().shape({
              login: Yup.string()
                .required('Login name is required')
                .min(6, 'Minimum length of login name is 6'),
              password: Yup.string()
                .required('Password is required')
                .min(8, 'Minimum length of password is 8')
            })}
            onSubmit={handleFormSubmit}
          >
            {({ errors, isValid }) => (            
            <Form>
              <BSForm.Text name="login" label="Login" error={errors.login} />
              <BSForm.Password name="password" label="Password" error={errors.password} />
              <BSForm.Checkbox name="remember" label="Remember Me" error={errors.remember} />
              <button className="btn btn-primary" disabled={!isValid}><i className="fa fa-right-to-bracket"></i> Login</button>
            </Form>
            )}
          </Formik>
          {error && <ApiErrorMessage error={error} />}
        </div>
      </div>
    </Page>
  );
}

export default Login;