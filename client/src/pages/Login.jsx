//! This file contains the login page of the dashboard. 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import '../app.css';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await login({
            variables: { ...formState },
        });

        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }

    // clear form values
    setFormState({
        email: '',
        password: '',
    });
  };


    return (
        <main className='login-main'>
            <div>
                <div>
                <h2 className='login-title'>Login to your account!</h2>
                <div className='card-body'>
                    {data ? (
                        <p>
                            You have been logged in! Head {' '}
                            <Link to='/'>back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='login-form'
                                placeholder='Enter your email...'
                                name='email'
                                type='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='login-form'
                                placeholder='********'
                                name='password'
                                type='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button className='login-submit' type='submit'>Login</button>    
                        </form>
                    )}

                    {error && (
                        <div className='error-msg'>
                            {error.message}
                        </div>
                    )}
                </div>
                </div>
            </div>
        </main>
    );
    };
    
export default Login;


// export default function Login() {

//     return (
//         <div>
//             <h1>Login to account!</h1>
//         </div>
//     )
// }
