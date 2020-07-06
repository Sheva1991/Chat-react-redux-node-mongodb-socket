import React from 'react'
import Button from '../../../components/Button/Button'
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Block from '../../../components/WhiteBlock/Block';
import { withFormik } from 'formik';
import validateForm from '../../../utils/validate'
import validateField from '../../../utils/helpers/validateField'

const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;
    return (
        <div>
            <div className="auth__header">
                <h2>Login page</h2>
                <p>Enter login and password</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="email"
                        validateStatus={validateField('email', touched, errors)
                        }
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
                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" sise='large' htmlType="submit" className="login-form-button">
                            Log in
            </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/registration'>Registration</Link>
                </Form>
            </Block>
        </div >
    )
}



export default withFormik({
    // Custom sync validation
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: true, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(LoginForm);

