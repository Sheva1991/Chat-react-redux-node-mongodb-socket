import React from 'react'
import Button from '../../../components/Button/Button'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Block from '../../../components/WhiteBlock/Block';
import { withFormik } from 'formik';
import validateForm from '../../../utils/validate'
import validateField from '../../../utils/helpers/validateField'

const RegistrationForm = (props) => {
    const success = false
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        dirty,
        isSubmitting,
        isValid
    } = props;
    return (
        <div>
            <div className="auth__header">
                <h2>Registration page</h2>
                <p>You need registrate to log in at chat</p>
            </div>
            <Block>
                {!success ? <Form
                    name="register_form"
                    className="register-form"
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="email"
                        validateStatus={validateField('email', touched, errors)}
                        help={errors.email}
                        hasFeedback
                    >
                        <Input type='email'
                            id='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" size='large' />
                    </Form.Item>
                    <Form.Item
                        name="username"
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='username'
                            placeholder="Username" size='large' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus={validateField('password', touched, errors)}
                        help={errors.password}
                        hasFeedback
                    >
                        <Input
                            id='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            value={values.password}
                            placeholder="Password"
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item
                        name="repeatPassword"
                    >
                        <Input
                            id='repeatPassword'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Repeat password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item>
                        {dirty && !isValid && <span style={{ display: 'block', color: 'red', marginBottom: '20px' }}>Error at form! Fill the form correct</span>}
                        <Button onClick={handleSubmit} disabled={!dirty || isSubmitting} type="primary" sise='large' htmlType="submit" className="login-form-button">
                            Registrate
                            </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/login'>Log in</Link>
                </Form> : <div className="auth__success-block">
                        <ExclamationCircleOutlined className='alert' />
                        <h3>Verify your account</h3>
                        <p>A letter has arrived in your mail</p>
                    </div>}

            </Block>
        </div>
    )
}

export default withFormik({
    // Custom sync validation
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    }),
    validate: values => {
        let errors = {};

        validateForm({ isAuth: false, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegistrationForm);

