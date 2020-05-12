import React from 'react';
import { reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from './../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import { createField } from './../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required, maxLength50], Input)}
            {createField('Password', 'password', [required, maxLength50], Input, { type: 'password' })}
            {createField(null, 'rememberMe', null, Input, { type: 'checkbox' }, 'remember me')}

        {captchaUrl && <img src={captchaUrl}/>} 
        {captchaUrl &&  createField('Symbols from image', 'captcha', [required], Input, {})} 

            {captchaUrl && <img src={captchaUrl} alt="captcha"/>} 
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to='/profile' />
    }
   
    return <div>
        <h1>Login:</h1>
        
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login, logout })(Login);