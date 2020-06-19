import React, { Component } from 'react'
import Button from '../../../components/Button/Button'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Block from '../../../components/WhiteBlock/Block';

export default class LoginForm extends Component {
    render() {
        return (
            <div >
                <div className="auth__header">
                    <h2>Login page</h2>
                    <p>Enter login and password</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onSubmit={this.handleSubmit}
                    >
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
                        <Form.Item>
                            <Button type="primary" sise='large' htmlType="submit" className="login-form-button">
                                Log in
            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/registration'>Registration</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}

