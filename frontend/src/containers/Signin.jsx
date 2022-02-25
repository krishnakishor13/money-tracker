import React, { useState } from 'react';
import Sidebar from '../components/Common/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUser } from '../reducks/users/selectors';
import { signIn } from '../reducks/users/operations';
import { push } from 'connected-react-router';

export default function Signin() {
    const dispatch = useDispatch();
    let history = useHistory();
    const selector = useSelector(state => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmit = async () => {
        setIsLoading(true);
        await dispatch(signIn(values, () => history.push('/')));
        setIsLoading(false);
        // history.push("/");
    };
    return (
        <>
            <Sidebar />
            <ul class="container">
                <li class="menu">
                    <div class="login">
                        <div class="fields">
                            <p class="welcomeback">Welcome back !</p>
                            <p class="paragraph">Please login using your account</p>

                            <p class="name">EMAIL</p>
                            {errors.error ? <span className="error-text">{errors.error}</span> : null}
                            <input
                                class="inputbox"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                            <p class="name">PASSWORD</p>
                            {errors.email ? <span className="error-text">{errors.email[0]}</span> : null}

                            <input
                                class="inputbox"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                            />
                            {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
                            <button type="button" class="createaccount" onClick={onSubmit}>{`${
                                isLoading ? 'Signing In...' : 'SIGN IN'
                            }`}</button>
                            <p class="forgot">
                                Forgot your password{' '}
                                <span id="reset" onClick={() => dispatch(push('/signup'))}>
                                    reset here
                                </span>
                            </p>
                            <button class="createaccount" onClick={() => dispatch(push('/signup'))}>
                                SIGNUP
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}
