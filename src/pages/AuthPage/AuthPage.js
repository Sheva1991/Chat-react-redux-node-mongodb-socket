import React from 'react'
import './AuthPage.scss'
import LoginForm from '../../modules/LoginForms/components/LoginForm';
import { Route } from 'react-router';
import RegistrationForm from '../../modules/LoginForms/components/RegistrationForm';

const AuthPage = () => {
    return (
        <section className='auth'>
            <Route exact path={['/', '/login']} component={LoginForm} />
            <Route path='/registration' component={RegistrationForm} />
        </section >
    )
}


export default AuthPage