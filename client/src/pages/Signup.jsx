//! This file contains the signup page of the dashboard. 

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

    // submit form
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    try {
        const { data } = await addProfile({
        variables: { ...formState },
        });
    
        Auth.login(data.addProfile.token);
    } catch (e) {
        console.error(e);
        }
    };

    return (
        <main className='signup-main'>
            <div>
                <div>
                <h2 className='signup-title'>Signup for a new account!</h2>
                <div className='card-body'>
                    {data ? (
                        <p>
                            You have made a new account! Head {' '}
                            <Link to='/'>back to the homepage.</Link>
                        </p>
                    ) : (
                        <form className= 'main-signup-form' onSubmit={handleFormSubmit}>
                            <input
                                className='signup-form'
                                placeholder='Please enter your name...'
                                name='name'
                                type='text'
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <input
                                className='signup-form'
                                placeholder='Please enter an email...'
                                name='email'
                                type='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='signup-form'
                                placeholder='Create a password...'
                                name='password'
                                type='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button className='signup-submit' type='submit'>Signup</button>  
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

export default Signup;
