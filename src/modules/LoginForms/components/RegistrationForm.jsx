import React, { Component } from 'react'
import Button from '../../../components/Button/Button'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Block from '../../../components/WhiteBlock/Block';

export default class RegistrationForm extends Component {
    render() {
        const success = false
        return (
            <div>
                <div className="auth__header">
                    <h2>Registration page</h2>
                    <p>You need registrate to log in at chat</p>
                </div>
                <Block>
                    {!success ? <Form
                        name="normal_login"
                        className="login-form"
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Item
                            name="email"
                            validateStatus='success'
                            hasFeedback
                        >
                            <Input type='email' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" size='large' />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            validateStatus='success'
                            hasFeedback
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size='large' />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item
                            name="repeatPassword"
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Repeat password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" sise='large' htmlType="submit" className="login-form-button">
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
}

