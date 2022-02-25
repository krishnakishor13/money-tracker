import React, { useState } from 'react';
import Sidebar from '../components/Common/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUser } from '../reducks/users/selectors';
import { signUpError } from '../reducks/users/actions';
import { signUp } from '../reducks/users/operations';

export default function Signup() {
    let history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
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
        if (values.password !== values.password_confirmation) {
            dispatch(signUpError({ password: ['Password are not the same.'] }));
            return;
        }

        setIsLoading(true);
        await dispatch(signUp(values));
        setIsLoading(false);
        history.push('/');
    };

    return (
        <>
            <Sidebar />
            <ul class="container">
                <li class="menu">
                    <div class="login">
                        <div class="fields">
                            <p class="welcomeback">Create new account</p>
                            <p class="paragraph">Please login using your account</p>

                            <p class="name">USERNAME</p>
                            <input
                                class="inputbox"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                            />
                            <p class="name">EMAIL</p>
                            <input
                                class="inputbox"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                            <p class="name">PASSWORD</p>
                            <input
                                class="inputbox"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                            />
                            <p class="name">CONFIRM PASSWORD</p>
                            <input
                                class="inputbox"
                                type="password"
                                name="password_confirmation"
                                value={values.password_confirmation}
                                onChange={handleInputChange}
                                placeholder="Re-type your password"
                            />
                            {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}

                            <button class="createaccount" type="button" onClick={onSubmit}>
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}
